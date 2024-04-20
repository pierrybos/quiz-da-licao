import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import LaunchIcon from "@mui/icons-material/Launch";
import CancelIcon from "@mui/icons-material/Cancel";
import ButtonGroupWithOptions from "./ButtonGroupWithOptions";
import { useSelector } from "react-redux";
import { useAppState } from "./stateService";

function abrirNovaAbaComParametro(parametro, valor) {
  // Obtém a URL atual
  var currentUrl = window.location.href;

  // Verifica se o parâmetro já está presente na URL
  if (currentUrl.indexOf(parametro) !== -1) {
    // Se o parâmetro já estiver presente, substitui seu valor pelo novo valor
    var regex = new RegExp("([?&])" + parametro + "=.*?(&|$)", "i");
    var newUrl = currentUrl.replace(
      regex,
      "$1" + parametro + "=" + encodeURIComponent(valor) + "$2"
    );
  } else {
    // Se o parâmetro não estiver presente, adiciona-o à URL
    if (currentUrl.indexOf("?") !== -1) {
      // Se já houver parâmetros, adiciona o novo parâmetro com "&"
      var newUrl =
        currentUrl +
        "&" +
        encodeURIComponent(parametro) +
        "=" +
        encodeURIComponent(valor);
    } else {
      // Se não houver parâmetros, adiciona o novo parâmetro com "?"
      var newUrl =
        currentUrl +
        "?" +
        encodeURIComponent(parametro) +
        "=" +
        encodeURIComponent(valor);
    }
  }
  var options = "fullscreen=yes,toolbar=no,location=no";
  window.aplicacaoJanela = window.open(newUrl, "_blank", options);
}

export default () => {
  const { dispatchUpdate } = useAppState(); // Use o hook personalizado

  const showFullScreen = useSelector((state) => state.booleans.fullScreen);

  const options = [
    {
      name: "launch",
      label: "Launch",
      icon: <LaunchIcon />,
      fn: () => {
        abrirNovaAbaComParametro("painel", false);
      },
      initialState: false,
    },
    {
      name: "fullscreen",
      label: "Fullscreen",
      icon: <FullscreenIcon />,
      fn: () => {
        dispatchUpdate({ target: { value: !showFullScreen } }, "setFullScreen");
      },
      initialState: showFullScreen,
    },
    {
      name: "imagem",
      label: "Imagem",
      icon: <CancelIcon />,
      fn: () => {
        window.aplicacaoJanela.close();
      },
      initialState: false,
    },
  ];

  return <ButtonGroupWithOptions options={options} />;
};
