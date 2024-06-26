import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { useRouter } from "next/router";

const Timer = function ({ show }) {
  const [controlls, setControlls] = useState(false);
  const [timeRemain, setTimeRemain] = useState("10h10m10s");
  const [beforeOff, setBeforeOff] = useState(true);
  const [audioContext, setAudioContext] = useState(null);

  useEffect(() => {
    const context = new AudioContext();
    setAudioContext(context);
  }, []);

  const router = useRouter();

  const limitTime = useSelector((state) => state.timer.limitTime);
  const showTimer = useSelector((state) => state.timer.showTimer);
  const timerTextSize = useSelector((state) => state.timer.timerTextSize);
  const timerTextColor = useSelector((state) => state.timer.timerTextColor);
  const audioGender = useSelector((state) => state.booleans.audioGender);

  const audioEnable = useSelector((state) => state.timer.audioEnable);

  const titleCounterTimeRemainA = useSelector(
    (state) => state.timer.timerTitle
  );
  const titleCounterTimeRemainB = useSelector(
    (state) => state.timer.timerSubtitle
  );
  const titleCounterTimeOffA = useSelector(
    (state) => state.timer.timerRemainTitle
  );
  const titleCounterTimeOffB = useSelector(
    (state) => state.timer.timerRemainSubtitle
  );

  useEffect(() => {
    const painel = router.query.painel;
    if (painel == "false") {
      setControlls(false);
    } else {
      setControlls(true);
    }
  }, [router]);
  function debounce(fn, delay) {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn(...args), delay);
    };
  }

  const virtualPlayer = async function (time) {
    if (!audioContext) return;

    let fileMp3 = audioGender ? "/mp3/1min.mp3" : "/mp3/1min.h.mp3";
    if (time == 5) {
      fileMp3 = audioGender ? "/mp3/5min.mp3" : "/mp3/5min.h.mp3";
    }

    const fetchResponse = await fetch(fileMp3);
    const arrayBuffer = await fetchResponse.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

    normalizeAudioBuffer(audioBuffer);

    const bufferSource = audioContext.createBufferSource();
    bufferSource.buffer = audioBuffer;
    bufferSource.connect(audioContext.destination);
    bufferSource.start(0);
  };

  function normalizeAudioBuffer(audioBuffer) {
    const channels = audioBuffer.numberOfChannels;
    const length = audioBuffer.length;
    let maxVolume = 0;

    // Encontra o valor máximo em todos os canais
    for (let channel = 0; channel < channels; channel++) {
      const channelData = audioBuffer.getChannelData(channel);
      for (let i = 0; i < length; i++) {
        const absValue = Math.abs(channelData[i]);
        if (absValue > maxVolume) {
          maxVolume = absValue;
        }
      }
    }

    // Normaliza o áudio dividindo pelo valor máximo
    if (maxVolume > 1) {
      for (let channel = 0; channel < channels; channel++) {
        const channelData = audioBuffer.getChannelData(channel);
        for (let i = 0; i < length; i++) {
          channelData[i] /= maxVolume;
        }
      }
    }
  }

  const dispatchPlayAudio = function (
    hoursRemaining,
    minutesRemaining,
    secondsRemaining
  ) {
    if (audioEnable && !controlls) {
      //
      if (
        hoursRemaining === 0 &&
        minutesRemaining === 1 &&
        secondsRemaining === 13
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

  let debounceDispatchPlayAudio = debounce(dispatchPlayAudio, 2000);

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

    setBeforeOff(!(secondsRemaining < 0));

    const strTimeRemain =
      `${hoursRemaining.toString().padStart(2, "0")}h ` +
      `${minutesRemaining.toString().padStart(2, "0")}m ` +
      `${secondsRemaining.toString().padStart(2, "0")}s`;

    setTimeRemain(strTimeRemain);
  }

  useEffect(() => {
    calcularTimer(); // Initial calculation

    const updateTime = setInterval(() => {
      calcularTimer();
    }, 1000); // Update timer every second

    return () => clearInterval(updateTime);
  }, [timeRemain]); // Update on both limitTime and timeRemain changes

  return (
    <div
      className={showTimer && show ? "visible" : "hidden"}
      style={{
        fontSize: `${timerTextSize}em`,
        color: `rgba(${timerTextColor.r},${timerTextColor.g},${timerTextColor.b},${timerTextColor.a})`,
      }}
    >
      <div className={beforeOff ? "visible beforeOff" : "hidden"}>
        <p style={{ margin: 0 }}>{titleCounterTimeRemainA}</p>
        <p style={{ margin: 0 }}>{titleCounterTimeRemainB}</p>
      </div>
      <div className={!beforeOff ? "visible afterOff" : "hidden"}>
        <p style={{ margin: 0 }}>{titleCounterTimeOffA}</p>
        <p style={{ margin: 0 }}>{titleCounterTimeOffB}</p>
      </div>
      <div className="remainTime">
        <h3>{timeRemain}</h3>
      </div>
    </div>
  );
};

export default Timer;
