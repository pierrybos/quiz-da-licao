import Head from "next/head";
import Fab from "@mui/material/Fab";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import { ConnectedTvOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useAppState } from "./stateService";

export default () => {
  const showFullScreen = useSelector((state) => state.booleans.fullScreen);

  const { dispatchUpdate } = useAppState(); // Use o hook personalizado

  function turnPageFullScreen() {
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
      dispatchUpdate({ target: { value: false } }, "setFullScreen");
    }
  }

  return (
    <>
      <Head>
        <style>
          {`
              .visible {
                display: block; /* ou qualquer outra propriedade de exibição que você preferir */
            }
            div.hidden {
                display: none;
            }

              `}
        </style>
      </Head>
      <div
        className={showFullScreen ? "flutuante visible" : "hidden"}
        style={{
          position: "absolute",
        }}
      >
        <Fab color="primary" aria-label="Tela Cheia">
          <FullscreenIcon onClick={(e) => turnPageFullScreen()} />
        </Fab>
      </div>
    </>
  );
};
