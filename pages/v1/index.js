"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import logo from "../public/img/logo-minha-es.png";
import logoQuiz from "../public/img/logo-minha-es.png";
import logoRecepcao from "../public/img/interessados-recepcao.png";
import { useEffect, useState } from "react";
import { useQRCode } from "next-qrcode";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import moment from "moment";
import Head from "next/head";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function Page() {
  const { Canvas } = useQRCode();
  const searchParams = useSearchParams();

  const [urlVisitas, setUrlVisitas] = useState("");
  const [urlQuiz, setUrlQuiz] = useState("");
  const [exibir, setExibir] = useState(false);
  const [showClock, setShowClock] = useState(true);
  const [limitTime, setLimitTime] = useState("10:00:00");
  const [timeRemain, setTimeRemain] = useState("10:00:00"); // Corrigido para inicializar com o valor padrão
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [alingToCenter, setAlignToCenter] = useState(true);
  const [showQrCode, setShowQrCode] = useState(true);
  const [showVisitas, setShowVisitas] = useState(true);
  const [textoLicaoAcabou, setTextoLicaoAcabou] = useState(false);
  const [audioEnable, setAudioEnable] = useState(true);
  const [play1min, setPlay1Min] = useState(false);
  const [play5min, setPlay5Min] = useState(false);
  const [file1min, setFile1min] = useState(false);
  const [file5min, setFile5min] = useState(false);

  function debounce(fn, delay) {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn(...args), delay);
    };
  }

  function afterRender() {
    if (searchParams.get("url") || searchParams.get("crm")) {
      setUrlQuiz(
        "https://es.minhaes.org/quizgeral/1/" + searchParams.get("url")
      );
    }

    if (searchParams.get("recepcao")) {
      setUrlVisitas(
        "https://minhaes.org/interessados-recepcao/interessados-recepcao.php?key=" +
          searchParams.get("recepcao")
      );
    }

    if (searchParams.get("time")) {
      setLimitTime(searchParams.get("time"));
    }

    if (searchParams.get("qroff")) {
      setShowQrCode(false);
      setShowVisitas(false);
      setAlignToCenter(false);
    }
  }

  async function getAudioPermission() {
    try {
      if ("permissions" in navigator) {
        navigator.permissions
          .query({
            name: "midi",
          })
          .then((permission) => {
            if (permission.state === "granted") {
              setAudioEnable(true);
            } else {
              setAudioEnable(false);
            }
          });
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    afterRender();
    getAudioPermission();
  }, [searchParams]);

  function toggleUrl() {
    setExibir(!exibir);
  }

  const virtualPlayer = async function (time) {
    let fileMp3 = "/mp3/1min.mp3";
    if (time == 5) {
      fileMp3 = "/mp3/5min.mp3";
    }
    const audioContext = new AudioContext();

    const fetchResponse = await fetch(fileMp3);
    const arrayBuffer = await fetchResponse.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

    const bufferSource = audioContext.createBufferSource();
    bufferSource.buffer = audioBuffer;
    bufferSource.connect(audioContext.destination);

    bufferSource.start(0);
  };

  const dispatchPlayAudio = function (
    hoursRemaining,
    minutesRemaining,
    secondsRemaining
  ) {
    if (audioEnable) {
      if (
        hoursRemaining === 0 &&
        minutesRemaining === 1 &&
        secondsRemaining === 14
      ) {
        virtualPlayer(1);
      } else if (
        hoursRemaining === 0 &&
        minutesRemaining === 5 &&
        secondsRemaining === 12
      ) {
        virtualPlayer(5);
      }
    }
  };

  let debounceDispatchPlayAudio = debounce(dispatchPlayAudio, 1500);

  function calcularTimer() {
    const now = moment();
    const then = moment(limitTime, "HH:mm:ss");
    const diff = then.diff(now, "seconds");

    const pureHoursRemaining = Math.floor(diff / 3600);
    const pureMinutesRemaining = Math.floor((diff % 3600) / 60);
    const secondsRemaining = Math.floor((diff % 3600) % 60);

    const hoursRemaining =
      pureHoursRemaining < 0 ? pureHoursRemaining + 1 : pureHoursRemaining;
    const minutesRemaining =
      pureMinutesRemaining < 0
        ? pureMinutesRemaining + 1
        : pureMinutesRemaining;

    debounceDispatchPlayAudio(
      hoursRemaining,
      minutesRemaining,
      secondsRemaining
    );

    setTextoLicaoAcabou(secondsRemaining < 0);

    const strTimeRemain =
      `${hoursRemaining.toString().padStart(2, "0")}h ` +
      `${minutesRemaining.toString().padStart(2, "0")}m ` +
      `${secondsRemaining.toString().padStart(2, "0")}s`;

    setTimeRemain(strTimeRemain);
  }

  useEffect(() => {
    afterRender();
    const handleFullScreenChange = () => {
      console.log(!document.fullscreenElement);
      setExibir(!document.fullscreenElement);
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);

  function openFullscreen() {
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE11 */
      elem.msRequestFullscreen();
    }
  }

  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE11 */
      document.msExitFullscreen();
    }
  }

  // this function increments the limitTime value
  function handlePlusTime(moreTime) {
    const time = moment(limitTime, "HH:mm:ss");

    // Add the specified number of minutes
    time.add(moreTime, "minutes");

    // Format the updated time string with leading zeros
    const formattedTime = time.format("HH:mm:ss");
    setLimitTime(formattedTime);
  }

  function handlePlusMinute() {
    handlePlusTime(1);
  }

  function handlePlusFiveMinutes() {
    handlePlusTime(5);
  }

  function handlePlusTenMinutes() {
    handlePlusTime(10);
  }

  function handlePlusThirtyMinutes() {
    handlePlusTime(30);
  }

  useEffect(() => {
    calcularTimer(); // Initial calculation

    const updateTime = setInterval(() => {
      calcularTimer();
    }, 1000); // Update timer every second

    return () => clearInterval(updateTime);
  }, [limitTime, timeRemain]); // Update on both limitTime and timeRemain changes

  function handleTimeChange(newValue) {
    setLimitTime(newValue);
    calcularTimer(); // Atualiza o timer sempre que o valor do tempo for alterado
  }

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content={`width=${viewport.width}, initial-scale=${
            viewport.initialScale
          }, maximum-scale=${viewport.maximumScale}, user-scalable=${
            viewport.userScalable ? "yes" : "no"
          }`}
        />
      </Head>
      <div id="containter">
        <div
          className={`row ${showVisitas && showQrCode ? "titles" : ""}`}
          style={{ textAlign: "center" }}
        >
          {showVisitas && (
            <div className="visitasTitulo">
              <h3>Primeira vez?</h3>
              <p>
                Aponte sua câmera para o link abaixo e vamos manter contato!
              </p>
            </div>
          )}
          {showQrCode && (
            <div className="quizTitulo">
              <h3>Acesse o Quiz pelo QRCode</h3>
              <p>Use a câmera do seu celular</p>
            </div>
          )}
        </div>

        <div
          className="row"
          id={`${showVisitas || showQrCode ? "displayRow" : ""}`}
        >
          {showVisitas && (
            <div
              className={`visitasCode ${alingToCenter ? "center" : ""}`}
              onClick={() => toggleUrl()}
            >
              <Canvas
                text={urlVisitas || "Informe o Link"}
                options={{
                  errorCorrectionLevel: "M",
                  margin: 3,
                  scale: 4,
                  width: 300,
                  color: {
                    dark: "#fa6767",
                    light: "#f4f4f6",
                  },
                }}
              />
            </div>
          )}
          {!(showVisitas && showQrCode) && (
            <div className={`logo ${alingToCenter ? "center" : ""}`}>
              <Image
                src={logo}
                onClick={() => toggleUrl()}
                width={272}
                height={153}
                alt=""
              />
            </div>
          )}
          {showQrCode && (
            <div
              className={`qrcode ${alingToCenter ? "center" : ""}`}
              onClick={() => toggleUrl()}
            >
              <Canvas
                text={urlQuiz || "Informe o Link"}
                options={{
                  errorCorrectionLevel: "M",
                  margin: 3,
                  scale: 4,
                  width: 300,
                  color: {
                    dark: "#1e3666",
                    light: "#f4f4f6",
                  },
                }}
              />
            </div>
          )}
        </div>
        {showClock && (
          <>
            <div className="row">
              <div className="timer">
                <div className="titleTimer">
                  {!textoLicaoAcabou && (
                    <p>
                      A Lição da Escola Sabatina
                      <br /> termina em
                    </p>
                  )}
                  {textoLicaoAcabou && (
                    <p>
                      A Lição da Escola Sabatina
                      <br /> TERMINOU HÁ
                    </p>
                  )}
                </div>
                <div className="remainTime">
                  <p>{timeRemain}</p>
                </div>
              </div>
            </div>
          </>
        )}
        {exibir && (
          <>
            {showClock && (
              <>
                <div className="row">
                  <TimePicker value={limitTime} onChange={handleTimeChange} />
                </div>
                <a onClick={handlePlusMinute}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path d="M480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440h80q0 117 81.5 198.5T480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720h-6l62 62-56 58-160-160 160-160 56 58-62 62h6q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Z" />
                  </svg>
                </a>
                <a onClick={handlePlusFiveMinutes}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path d="M480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440h80q0 117 81.5 198.5T480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720h-6l62 62-56 58-160-160 160-160 56 58-62 62h6q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80ZM380-320v-60h120v-40H380v-140h180v60H440v40h80q17 0 28.5 11.5T560-420v60q0 17-11.5 28.5T520-320H380Z" />
                  </svg>
                </a>
                <a onClick={handlePlusTenMinutes}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path d="M480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440h80q0 117 81.5 198.5T480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720h-6l62 62-56 58-160-160 160-160 56 58-62 62h6q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80ZM360-320v-180h-60v-60h120v240h-60Zm140 0q-17 0-28.5-11.5T460-360v-160q0-17 11.5-28.5T500-560h80q17 0 28.5 11.5T620-520v160q0 17-11.5 28.5T580-320h-80Zm20-60h40v-120h-40v120Z" />
                  </svg>
                </a>
                <a onClick={handlePlusThirtyMinutes}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path d="M480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440h80q0 117 81.5 198.5T480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720h-6l62 62-56 58-160-160 160-160 56 58-62 62h6q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80ZM300-320v-60h100v-40h-60v-40h60v-40H300v-60h120q17 0 28.5 11.5T460-520v160q0 17-11.5 28.5T420-320H300Zm240 0q-17 0-28.5-11.5T500-360v-160q0-17 11.5-28.5T540-560h80q17 0 28.5 11.5T660-520v160q0 17-11.5 28.5T620-320h-80Zm20-60h40v-120h-40v120Z" />
                  </svg>
                </a>
              </>
            )}
            <div className="row">
              <input
                type="text"
                id="targetUrl"
                placeholder="Link do QUIZ da LIÇÃO"
                value={urlQuiz}
                onChange={(e) => {
                  setUrlQuiz(e.target.value);
                }}
              />
            </div>
            <div className="row">
              <input
                type="text"
                id="targetUrl"
                placeholder="Link dos VISITANTES"
                value={urlVisitas}
                onChange={(e) => {
                  setUrlVisitas(e.target.value);
                }}
              />
            </div>
            <div className="row">
              {isFullScreen && (
                <button onClick={() => closeFullscreen()}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
                  </svg>
                </button>
              )}
              {!isFullScreen && (
                <button onClick={() => openFullscreen()}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path d="M120-120v-200h80v120h120v80H120Zm520 0v-80h120v-120h80v200H640ZM120-640v-200h200v80H200v120h-80Zm640 0v-120H640v-80h200v200h-80Z" />
                  </svg>
                </button>
              )}
              {!alingToCenter && (
                <button onClick={() => setAlignToCenter(true)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path d="M440-80v-800h80v800h-80Zm160-200v-400h120v400H600Zm-360 0v-400h120v400H240Z" />
                  </svg>
                </button>
              )}
              {alingToCenter && (
                <button onClick={() => setAlignToCenter(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path d="M800-80v-200H680v-400h120v-200h80v800h-80ZM80-80v-800h80v200h120v400H160v200H80Z" />
                  </svg>
                </button>
              )}
              {audioEnable && (
                <button onClick={() => setAudioEnable(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path d="M560-131v-82q90-26 145-100t55-168q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 127-78 224.5T560-131ZM120-360v-240h160l200-200v640L280-360H120Zm440 40v-322q47 22 73.5 66t26.5 96q0 51-26.5 94.5T560-320ZM400-606l-86 86H200v80h114l86 86v-252ZM300-480Z" />
                  </svg>
                </button>
              )}
              {!audioEnable && (
                <button onClick={() => setAudioEnable(true)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path d="M792-56 671-177q-25 16-53 27.5T560-131v-82q14-5 27.5-10t25.5-12L480-368v208L280-360H120v-240h128L56-792l56-56 736 736-56 56Zm-8-232-58-58q17-31 25.5-65t8.5-70q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 53-14.5 102T784-288ZM650-422l-90-90v-130q47 22 73.5 66t26.5 96q0 15-2.5 29.5T650-422ZM480-592 376-696l104-104v208Zm-80 238v-94l-72-72H200v80h114l86 86Zm-36-130Z" />
                  </svg>
                </button>
              )}
              {showClock && (
                <button onClick={() => setShowClock(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path d="m798-274-60-60q11-27 16.5-53.5T760-440q0-116-82-198t-198-82q-24 0-51 5t-56 16l-60-60q38-20 80.5-30.5T480-800q60 0 117.5 20T706-722l56-56 56 56-56 56q38 51 58 108.5T840-440q0 42-10.5 83.5T798-274ZM520-552v-88h-80v8l80 80ZM792-56l-96-96q-48 35-103.5 53.5T480-80q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-60 18.5-115.5T192-656L56-792l56-56 736 736-56 56ZM480-160q42 0 82-13t75-37L248-599q-24 35-36 75t-12 84q0 116 82 198t198 82ZM360-840v-80h240v80H360Zm83 435Zm113-112Z" />
                  </svg>
                </button>
              )}
              {!showClock && (
                <button onClick={() => setShowClock(true)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z" />
                  </svg>
                </button>
              )}
              <button onClick={() => setShowQrCode(!showQrCode)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M520-120v-80h80v80h-80Zm-80-80v-200h80v200h-80Zm320-120v-160h80v160h-80Zm-80-160v-80h80v80h-80Zm-480 80v-80h80v80h-80Zm-80-80v-80h80v80h-80Zm360-280v-80h80v80h-80ZM180-660h120v-120H180v120Zm-60 60v-240h240v240H120Zm60 420h120v-120H180v120Zm-60 60v-240h240v240H120Zm540-540h120v-120H660v120Zm-60 60v-240h240v240H600Zm80 480v-120h-80v-80h160v120h80v80H680ZM520-400v-80h160v80H520Zm-160 0v-80h-80v-80h240v80h-80v80h-80Zm40-200v-160h80v80h80v80H400Zm-190-90v-60h60v60h-60Zm0 480v-60h60v60h-60Zm480-480v-60h60v60h-60Z" />
                </svg>
              </button>
              <button onClick={() => setShowVisitas(!showVisitas)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M200-400v-80h80v80h-80Zm-80-80v-80h80v80h-80Zm360-280v-80h80v80h-80ZM180-660h120v-120H180v120Zm-60 60v-240h240v240H120Zm60 420h120v-120H180v120Zm-60 60v-240h240v240H120Zm540-540h120v-120H660v120Zm-60 60v-240h240v240H600ZM360-400v-80h-80v-80h160v160h-80Zm40-200v-160h80v80h80v80H400Zm-190-90v-60h60v60h-60Zm0 480v-60h60v60h-60Zm480-480v-60h60v60h-60Zm-50 570v-120H520v-80h120v-120h80v120h120v80H720v120h-80Z" />
                </svg>
              </button>
              <button onClick={() => setExibir(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z" />
                </svg>
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
