import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
//import "./styles.v3.module.css"; // Arquivo de estilos CSS
import moment from "moment";

import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import Fab from "@mui/material/Fab";

import {
  TextField,
  Button,
  Switch,
  Toolbar,
  AppBar,
  Typography,
  Container,
  Grid,
  FormControl,
  FormControlLabel,
  InputLabel,
  InputAdornment,
  Input,
  Stack,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import SemControles from "./semControles";
import { useDispatch, useSelector } from "react-redux";
import { setUrlQuiz, setUrlVisitas } from "../../store/urlSlice";
import {
  setTitleUrlQuiz,
  setSubTitleUrlQuiz,
  titleUrlVisitas,
  subTitleUrlVisitas,
  setTitleCounterTimeRemainA,
  setTitleCounterTimeRemainB,
  setTitleCounterTimeOffA,
  setTitleCounterTimeOffB,
} from "../../store/textoSlice";
import UseFullScreen from "../../src/components/UseFullScreen";

import { setLimitTime } from "../../store/timerSlice";

import {
  setShowTimer,
  setShowLogoQuiz,
  setShowLogoVisitantes,
  setShowTextoQuiz,
  setShowTextoVisitantes,
  setShowQRCodeQuiz,
  setShowQRCodeVisitantes,
  setAudioEnable,
  setShowBothQr,
  setDisplayPlaceQuiz,
  setDisplayPlaceVisitantes,
  setHidePlaceQuiz,
  setHidePlaceVisitantes,
  setShowFullScreen,
  displayShowFullScreen,
  hideShowFullScreen,
} from "../../store/booleansSlice";

import ColorPickerChange from "../../src/components/ColorPickerChange";

import {
  setQuizColor,
  setQuizQrSize,
  setVisitanteColor,
  setVisitanteQrSize,
  setLeftSideBarWidth,
  setFontSizeTimerPlace,
  setLeftSideBarPosition,
  setLeftSideBarTopPosition,
  setVisitanteTextSize,
  setQuizTextSize,
  setQuizLogoSize,
  setVisitanteLogoSize,
  setTimerTextColor,
} from "../../store/stylizationSlice";
import Slider from "@mui/material/Slider";

export default () => {
  const [controlls, setControlls] = useState(false);
  const dispatch = useDispatch();
  const searchParams = useSearchParams();

  const router = useRouter();

  const urlQuiz = useSelector((state) => state.url.urlQuiz);
  const urlVisitas = useSelector((state) => state.url.urlVisitas);
  const titleUrlQuiz = useSelector((state) => state.texto.titleUrlQuiz);
  const subTitleUrlVisitas = useSelector(
    (state) => state.texto.subTitleUrlVisitas
  );
  const titleUrlVisitas = useSelector((state) => state.texto.titleUrlVisitas);
  const subTitleUrlQuiz = useSelector((state) => state.texto.subTitleUrlQuiz);
  const limitTime = useSelector((state) => state.timer.limitTime);
  const showLogoQuiz = useSelector((state) => state.booleans.showLogoQuiz);
  const showLogoVisitantes = useSelector(
    (state) => state.booleans.showLogoVisitantes
  );
  const showTextoVisitantes = useSelector(
    (state) => state.booleans.showTextoVisitantes
  );
  const showQRCodeQuiz = useSelector((state) => state.booleans.showQRCodeQuiz);
  const showQRCodeVisitantes = useSelector(
    (state) => state.booleans.showQRCodeVisitantes
  );
  const showTextoQuiz = useSelector((state) => state.booleans.showTextoQuiz);
  const audioEnable = useSelector((state) => state.booleans.audioEnable);
  const titleCounterTimeRemainA = useSelector(
    (state) => state.texto.titleCounterTimeRemainA
  );
  const titleCounterTimeRemainB = useSelector(
    (state) => state.texto.titleCounterTimeRemainB
  );
  const titleCounterTimeOffA = useSelector(
    (state) => state.texto.titleCounterTimeOffA
  );
  const titleCounterTimeOffB = useSelector(
    (state) => state.texto.titleCounterTimeOffB
  );
  const showTimer = useSelector((state) => state.booleans.showTimer);
  const showBothQr = useSelector((state) => state.booleans.showBothQr);
  const quizColor = useSelector((state) => state.stylization.quizColor);
  const visitanteColor = useSelector(
    (state) => state.stylization.visitanteColor
  );
  const quizQrSize = useSelector((state) => state.stylization.quizQrSize);
  const quizLogoSize = useSelector((state) => state.stylization.quizLogoSize);
  const visitanteLogoSize = useSelector(
    (state) => state.stylization.visitanteLogoSize
  );
  const visitanteQrSize = useSelector(
    (state) => state.stylization.visitanteQrSize
  );
  const quizTextSize = useSelector((state) => state.stylization.quizTextSize);
  const visitanteTextSize = useSelector(
    (state) => state.stylization.visitanteTextSize
  );
  const leftSideBarWidth = useSelector(
    (state) => state.stylization.leftSideBarWidth
  );
  const fontSizeTimerPlace = useSelector(
    (state) => state.stylization.fontSizeTimerPlace
  );

  const showFullScreen = useSelector((state) => state.booleans.showFullScreen);
  const leftSideBarPosition = useSelector(
    (state) => state.stylization.leftSideBarPosition
  );
  const leftSideBarTopPosition = useSelector(
    (state) => state.stylization.leftSideBarTopPosition
  );

  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const channel = new BroadcastChannel("semanaSanta");
  const isFullScreen = UseFullScreen();

  function afterRender() {
    if (searchParams.get("quiz")) {
      dispatchUpdate(
        {
          target: {
            value:
              "https://es.minhaes.org/quizgeral/1/" + searchParams.get("quiz"),
          },
        },
        "setUrlQuiz"
      );
    }

    if (searchParams.get("visitas")) {
      dispatchUpdate(
        {
          target: {
            value:
              "https://minhaes.org/interessados-recepcao/interessados-recepcao.php?key=" +
              searchParams.get("visitas"),
          },
        },
        "setUrlVisitas"
      );
    }

    if (searchParams.get("time")) {
      dispatchUpdate(
        {
          target: {
            value: searchParams.get("time"),
          },
        },
        "setLimitTime"
      );
    }

    if (searchParams.get("painel")) {
      setControlls(false);
      setIsVisible(false);
    } else {
      setControlls(true);
      setIsVisible(true);
    }
  }

  useEffect(() => {
    afterRender();
  }, [searchParams]);

  // this function increments the limitTime value
  function handlePlusTime(moreTime) {
    const time = moment(limitTime, "HH:mm:ss");

    // Add the specified number of minutes
    time.add(moreTime, "minutes");

    // Format the updated time string with leading zeros
    const formattedTime = time.format("HH:mm:ss");
    dispatchUpdate({ target: { value: formattedTime } }, "setLimitTime");
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

  const methods = {
    fullScreenFunc: { fn: fullScreenFunc, redux: false },
    setUrlQuiz: {
      fn: setUrlQuiz,
      redux: true,
    },
    setTitleUrlQuiz: {
      fn: setTitleUrlQuiz,
      redux: true,
    },
    setSubTitleUrlQuiz: {
      fn: setSubTitleUrlQuiz,
      redux: true,
    },
    setTitleCounterTimeRemainA: {
      fn: setTitleCounterTimeRemainA,
      redux: true,
    },
    setTitleCounterTimeRemainB: {
      fn: setTitleCounterTimeRemainB,
      redux: true,
    },
    setTitleCounterTimeOffA: {
      fn: setTitleCounterTimeOffA,
      redux: true,
    },
    setTitleCounterTimeOffB: {
      fn: setTitleCounterTimeOffB,
      redux: true,
    },
    setShowTimer: {
      fn: setShowTimer,
      redux: true,
    },
    setLimitTime: {
      fn: setLimitTime,
      redux: true,
    },
    setShowLogoQuiz: {
      fn: setShowLogoQuiz,
      redux: true,
    },
    setShowLogoVisitantes: {
      fn: setShowLogoVisitantes,
      redux: true,
    },
    setShowTextoQuiz: {
      fn: setShowTextoQuiz,
      redux: true,
    },
    setAudioEnable: {
      fn: setAudioEnable,
      redux: true,
    },
    setShowQRCodeQuiz: {
      fn: setShowQRCodeQuiz,
      redux: true,
    },
    setShowBothQr: {
      fn: setShowBothQr,
      redux: true,
    },
    setDisplayPlaceVisitantes: {
      fn: setDisplayPlaceVisitantes,
      redux: true,
    },
    setDisplayPlaceQuiz: {
      fn: setDisplayPlaceQuiz,
      redux: true,
    },
    setHidePlaceQuiz: {
      fn: setHidePlaceQuiz,
      redux: true,
    },
    setHidePlaceVisitantes: {
      fn: setHidePlaceVisitantes,
      redux: true,
    },
    setQuizColor: {
      fn: setQuizColor,
      redux: true,
    },
    setQuizQrSize: {
      fn: setQuizQrSize,
      redux: true,
    },
    setVisitanteColor: {
      fn: setVisitanteColor,
      redux: true,
    },
    setVisitanteQrSize: {
      fn: setVisitanteQrSize,
      redux: true,
    },
    setLeftSideBarWidth: {
      fn: setLeftSideBarWidth,
      redux: true,
    },
    setFontSizeTimerPlace: {
      fn: setFontSizeTimerPlace,
      redux: true,
    },
    setUrlVisitas: {
      fn: setUrlVisitas,
      redux: true,
    },
    setShowQRCodeVisitantes: {
      fn: setShowQRCodeVisitantes,
      redux: true,
    },
    setShowTextoVisitantes: {
      fn: setShowTextoVisitantes,
      redux: true,
    },
    setShowFullScreen: {
      fn: setShowFullScreen,
      redux: true,
    },
    setLeftSideBarPosition: {
      fn: setLeftSideBarPosition,
      redux: true,
    },
    setLeftSideBarTopPosition: {
      fn: setLeftSideBarTopPosition,
      redux: true,
    },
    setQuizTextSize: {
      fn: setQuizTextSize,
      redux: true,
    },
    setVisitanteTextSize: {
      fn: setVisitanteTextSize,
      redux: true,
    },
    setVisitanteLogoSize: {
      fn: setVisitanteLogoSize,
      redux: true,
    },
    setQuizLogoSize: {
      fn: setQuizLogoSize,
      redux: true,
    },
  };

  function fullScreenFunc() {
    var elem = document.documentElement; // Elemento HTML
    if (!document.fullscreenElement) {
      elem.requestFullscreen().catch((err) => {
        alert(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  function openUrl(url) {
    const dualScreenLeft =
      window.screenLeft !== undefined ? window.screenLeft : window.screen.left;
    const dualScreenTop =
      window.screenTop !== undefined ? window.screenTop : window.screen.top;

    const width = window.innerWidth
      ? window.innerWidth
      : document.documentElement.clientWidth
      ? document.documentElement.clientWidth
      : window.screen.width;
    const height = window.innerHeight
      ? window.innerHeight
      : document.documentElement.clientHeight
      ? document.documentElement.clientHeight
      : window.screen.height;

    const left = width / 2 + dualScreenLeft;
    const top = height / 2 + dualScreenTop;

    const newWindow = window.open(url, "_blank", "width=800,height=600");

    if (newWindow && newWindow.focus) {
      newWindow.focus();
    }
  }

  function turnOffPageFullScreen() {
    dispatch(hideShowFullScreen());
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      /* Chrome, Safari e Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE/Edge */
      document.msExitFullscreen();
    }
  }

  function turnPageFullScreen() {
    dispatch(hideShowFullScreen());
    // Obtém o elemento que você deseja exibir em tela cheia
    const element = document.documentElement; // Este é o elemento raiz do documento, geralmente o <html>

    // Verifica se a página está em tela cheia
    const isInFullScreen =
      document.fullscreenElement ||
      document.mozFullScreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement;

    // Se a página não estiver em tela cheia, então solicita entrar em tela cheia
    if (isInFullScreen) {
    } else {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        /* Firefox */
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        /* Chrome, Safari e Opera */
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        /* IE/Edge */
        element.msRequestFullscreen();
      }
    }
  }

  function openUrlWithNewParam() {
    const currentUrl = window.location.href;
    let newUrl;

    // Verificar se o parâmetro parametro1 está presente na URL atual
    if (currentUrl.includes("painel=")) {
      // Se estiver presente, substituir o valor atual pelo novo_valor
      newUrl = currentUrl.replace(/painel=([^&]*)/, "painel=false");
    } else {
      // Se não estiver presente, adicionar o parâmetro parametro1 com o valor novo_valor
      const separator = currentUrl.includes("?") ? "&" : "?";
      newUrl = currentUrl + separator + "painel=false";
    }

    // Abrir a nova URL em tela cheia
    openUrl(newUrl);
  }

  useEffect(() => {
    channel.onmessage = (ev) => {
      console.log(ev.data.id);
      console.log(ev.data.content);
      if (methods[ev.data.id]) {
        if (methods[ev.data.id].redux == true) {
          dispatch(methods[ev.data.id].fn(ev.data.content));
        } else {
          methods[ev.data.id].fn(ev.data.content);
        }
      } else {
        console.log("Método não encontrado:", ev.data);
      }
    };

    return () => {
      channel.close();
    };
  }, [channel]);

  function dispatchUpdate(ev, methodName) {
    {
      dispatch(methods[methodName].fn(ev.target.value));
      const message = {
        id: methodName,
        content: ev.target.value,
      };
      channel.postMessage(message);
    }
  }

  function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
  }

  function handlePlaceQr(ev) {
    if (ev.target.value == "quiz") {
      dispatchUpdate(ev, "setDisplayPlaceQuiz");
      dispatchUpdate(ev, "setHidePlaceVisitantes");
    } else {
      dispatchUpdate(ev, "setDisplayPlaceVisitantes");
      dispatchUpdate(ev, "setHidePlaceQuiz");
    }
  }

  /*  useEffect(() => {
    const painel = router.query.painel;
    if (painel == "false") {
      setControlls(false);
      setIsVisible(false);
    } else {
      setControlls(true);
      setIsVisible(true);
    }
  }, [router]); // */
  return (
    <>
      <div className={!isFullScreen ? "visible" : "hidden"}>
        <div
          className={
            showFullScreen && !controlls ? "flutuante visible" : "hidden"
          }
          style={{
            position: "absolute",
          }}
        >
          <Fab color="primary" aria-label="Tela Cheia">
            <FullscreenIcon onClick={(e) => turnPageFullScreen()} />
          </Fab>
        </div>
      </div>
      <div className={isFullScreen ? "visible" : "hidden"}>
        <div
          className={
            showFullScreen && !controlls ? "flutuante visible" : "hidden"
          }
          style={{
            position: "absolute",
          }}
        >
          <Fab color="primary" aria-label="Sair Tela Cheia">
            <FullscreenExitIcon onClick={(e) => turnOffPageFullScreen()} />
          </Fab>
        </div>
      </div>
      <div className={isVisible ? "visible painelControll" : "hidden"}>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" onClick={openUrlWithNewParam}>
              Apresentar
            </Button>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Controle da Aplicação
            </Typography>
            <Button
              color="inherit"
              onClick={(e) => dispatchUpdate(e, "setShowFullScreen")}
            >
              Tela Cheia
            </Button>
          </Toolbar>
        </AppBar>
        <Container sx={{ paddingTop: "20px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <label>Tamanho da área esquerda</label>
              <Slider
                value={leftSideBarWidth}
                onChange={(e) => dispatchUpdate(e, "setLeftSideBarWidth")}
                min={1}
                max={100}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <label>Tamanho do texto do timer</label>
              <Slider
                value={fontSizeTimerPlace}
                onChange={(e) => dispatchUpdate(e, "setFontSizeTimerPlace")}
                min={0.1}
                step={0.1}
                max={20}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <label>Posição da área à esquerda</label>
              <Slider
                value={leftSideBarPosition}
                onChange={(e) => dispatchUpdate(e, "setLeftSideBarPosition")}
                min={0}
                max={100}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <label>Posição da área ao topo</label>
              <Slider
                value={leftSideBarTopPosition}
                onChange={(e) => dispatchUpdate(e, "setLeftSideBarTopPosition")}
                min={0}
                max={100}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Link do Quiz"
                variant="outlined"
                value={urlQuiz}
                onChange={(e) => dispatchUpdate(e, "setUrlQuiz")}
              />
              <TextField
                fullWidth
                label="Titulo do Quiz"
                variant="outlined"
                value={titleUrlQuiz}
                onChange={(e) => dispatchUpdate(e, "setTitleUrlQuiz")}
              />
              <TextField
                fullWidth
                label="Subtítulo do Quiz"
                variant="outlined"
                value={subTitleUrlQuiz}
                onChange={(e) => dispatchUpdate(e, "setSubTitleUrlQuiz")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Link dos Visitantes"
                variant="outlined"
                value={urlVisitas}
                onChange={(e) => dispatchUpdate(e, "setUrlVisitas")}
              />
              <TextField
                fullWidth
                label="Titulo dos Visitantes"
                variant="outlined"
                value={titleUrlVisitas}
                onChange={(e) => dispatchUpdate(e, "setTitleUrlVisitas")}
              />
              <TextField
                fullWidth
                label="Subtítulo Visitantes"
                variant="outlined"
                value={subTitleUrlVisitas}
                onChange={(e) => dispatchUpdate(e, "setSubTitleUrlVisitas")}
              />{" "}
            </Grid>
            <Grid item xs={12} sm={6}>
              <ColorPickerChange
                label="Cor QrCode Quiz"
                value={quizColor}
                fnOnColorChange={(e) => {
                  dispatchUpdate(
                    { target: { value: rgbToHex(e.r, e.g, e.b) } },
                    "setQuizColor"
                  );
                }}
              />{" "}
            </Grid>

            <Grid item xs={12} sm={6}>
              <ColorPickerChange
                label="Cor QrCode Visitantes"
                value={visitanteColor}
                fnOnColorChange={(e) => {
                  dispatchUpdate(
                    { target: { value: rgbToHex(e.r, e.g, e.b) } },
                    "setVisitanteColor"
                  );
                }}
              />{" "}
            </Grid>
            <Grid item xs={12} sm={6}>
              <label>Tamanho Logo Quiz</label>
              <Slider
                value={quizLogoSize}
                onChange={(e) => dispatchUpdate(e, "setQuizLogoSize")}
                min={10}
                max={2000}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <label>Tamanho Logo Visitantes</label>
              <Slider
                value={visitanteLogoSize}
                onChange={(e) => dispatchUpdate(e, "setVisitanteLogoSize")}
                min={10}
                max={2000}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <label>Tamanho QrCode Quiz</label>
              <Slider
                value={quizQrSize}
                onChange={(e) => dispatchUpdate(e, "setQuizQrSize")}
                min={10}
                max={2000}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <label>Tamanho QrCode Visitantes</label>
              <Slider
                value={visitanteQrSize}
                onChange={(e) => dispatchUpdate(e, "setVisitanteQrSize")}
                min={10}
                max={2000}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <label>Tamanho Texto Título Quiz</label>
              <Slider
                value={quizTextSize}
                onChange={(e) => dispatchUpdate(e, "setQuizTextSize")}
                min={0.1}
                max={20}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <label>Tamanho Texto Título Visitantes</label>
              <Slider
                value={visitanteTextSize}
                onChange={(e) => dispatchUpdate(e, "setVisitanteTextSize")}
                min={0.1}
                max={20}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Hora Final</InputLabel>
                <Input
                  type="time"
                  value={limitTime}
                  onChange={(e) => dispatchUpdate(e, "setLimitTime")}
                  endAdornment={
                    <InputAdornment position="end">
                      <Button onClick={() => handlePlusMinute()}>+1</Button>
                      <Button onClick={() => handlePlusFiveMinutes()}>
                        +5
                      </Button>
                      <Button onClick={() => handlePlusTenMinutes()}>
                        +10
                      </Button>
                      <Button onClick={() => handlePlusThirtyMinutes()}>
                        +30
                      </Button>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <TextField
                fullWidth
                label="Texto de Tempo Restante "
                variant="outlined"
                value={titleCounterTimeRemainA}
                onChange={(e) =>
                  dispatchUpdate(e, "setTitleCounterTimeRemainA")
                }
              />
              <TextField
                fullWidth
                label="Texto de Tempo Restante"
                variant="outlined"
                value={titleCounterTimeRemainB}
                onChange={(e) =>
                  dispatchUpdate(e, "setTitleCounterTimeRemainB")
                }
              />
              <TextField
                fullWidth
                label="Texto de Tempo Esgotado"
                variant="outlined"
                value={titleCounterTimeOffA}
                onChange={(e) => dispatchUpdate(e, "setTitleCounterTimeOffA")}
              />
              <TextField
                fullWidth
                label="Texto de Tempo Esgotado"
                variant="outlined"
                value={titleCounterTimeOffB}
                onChange={(e) => dispatchUpdate(e, "setTitleCounterTimeOffB")}
              />
            </Grid>
            {/* Outros controles e botões conforme necessário */}
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={audioEnable}
                    onChange={(e) => dispatchUpdate(e, "setAudioEnable")}
                  />
                }
                label="Som"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={showTimer}
                    onChange={(e) => dispatchUpdate(e, "setShowTimer")}
                  />
                }
                label="Exibir Timer"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={showBothQr}
                    onChange={(e) => dispatchUpdate(e, "setShowBothQr")}
                  />
                }
                label="Exibir Ambos QrCodes"
              />
              <ToggleButtonGroup
                color="primary"
                exclusive
                onChange={handlePlaceQr}
              >
                <ToggleButton value="quiz">Quiz</ToggleButton>
                <ToggleButton value="visitas">Visitas</ToggleButton>
              </ToggleButtonGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked={showQRCodeQuiz}
                    onChange={(e) => dispatchUpdate(e, "setShowQRCodeQuiz")}
                  />
                }
                label="Exibir QR Code do Quiz"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={showQRCodeVisitantes}
                    onChange={(e) =>
                      dispatchUpdate(e, "setShowQRCodeVisitantes")
                    }
                  />
                }
                label="Exibir QR Code dos Visitantes"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={showLogoQuiz}
                    onChange={(e) => dispatchUpdate(e, "setShowLogoQuiz")}
                  />
                }
                label="Exibir Logo do Quiz"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={showLogoVisitantes}
                    onChange={(e) => dispatchUpdate(e, "setShowLogoVisitantes")}
                  />
                }
                label="Exibir Logo dos Visitantes"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={showTextoQuiz}
                    onChange={(e) => dispatchUpdate(e, "setShowTextoQuiz")}
                  />
                }
                label="Exibir Texto do Quiz"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={showTextoVisitantes}
                    onChange={(e) =>
                      dispatchUpdate(e, "setShowTextoVisitantes")
                    }
                  />
                }
                label="Exibir Texto dos Visitantes"
              />
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={isVisible ? "hidden" : "visible"}>
        <SemControles />
      </div>
    </>
  );
};
