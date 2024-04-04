import { useState, useEffect } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PlayDisabledIcon from "@mui/icons-material/PlayDisabled";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";
import Replay5Icon from "@mui/icons-material/Replay5";
import Replay10Icon from "@mui/icons-material/Replay10";
import Replay30Icon from "@mui/icons-material/Replay30";

export default ({
  fnPlusOne,
  fnPlusFive,
  fnPlusTen,
  fnPlusThirty,
  showTimer,
  audioEnable,
  fnAudioEnable,
  fnShowTimer,
}) => {
  const [formats, setFormats] = useState(() => {
    const initialFormats = [];
    if (showTimer) initialFormats.push("showTimer");
    return initialFormats;
  });

  useEffect(() => {
    setFormats(() => {
      const initialFormats = [];
      if (showTimer) initialFormats.push("showTimer");
      return initialFormats;
    });
  }, [showTimer]);

  const atributos = {
    plusOne: {
      name: "plusOne",
      fn: fnPlusOne,
    },
    plusFive: {
      name: "plusFive",
      fn: fnPlusFive,
    },
    plusTen: {
      name: "plusTen",
      fn: fnPlusTen,
    },
    plusThirty: {
      name: "plusThirty",
      fn: fnPlusThirty,
    },
    audioEnable: {
      name: "audioEnable",
      fn: fnAudioEnable,
    },
    showTimer: {
      name: "showTimer",
      fn: fnShowTimer,
    },
  };

  const handleIconClick = (iconFunction) => {
    // Execute a função associada ao ícone
    iconFunction();
    // Adicione aqui qualquer outra lógica que você deseja executar quando o ícone é clicado
  };

  const handleFormat = (event, newFormats) => {
    let targetValue = event.target.value || event.target.dataset.name;
    if (targetValue !== undefined) {
      atributos[targetValue].fn({
        target: {
          value: newFormats.indexOf(targetValue) > -1,
        },
      });
      if (targetValue === atributos.showTimer.name) {
        setFormats(newFormats);
      }
    }
  };

  return (
    <>
      <ToggleButtonGroup
        value={formats}
        onChange={handleFormat}
        aria-label="text formatting"
      >
        <ToggleButton
          value={atributos.plusOne.name}
          key="plusOne"
          aria-label="plusOne"
        >
          <ReplayIcon onClick={() => handleIconClick(atributos.plusOne.fn)} />
        </ToggleButton>
        <ToggleButton
          value={atributos.plusFive.name}
          key="plusFive"
          aria-label="plusFive"
        >
          <Replay5Icon onClick={() => handleIconClick(atributos.plusFive.fn)} />
        </ToggleButton>
        <ToggleButton
          value={atributos.plusTen.name}
          key="plusTen"
          aria-label="plusTen"
        >
          <Replay10Icon onClick={() => handleIconClick(atributos.plusTen.fn)} />
        </ToggleButton>
        <ToggleButton
          value={atributos.plusThirty.name}
          key="plusThirty"
          aria-label="plusThirty"
        >
          <Replay30Icon
            onClick={() => handleIconClick(atributos.plusThirty.fn)}
          />
        </ToggleButton>
        <ToggleButton
          value={atributos.showTimer.name}
          key="showTimer"
          aria-label="showTimer"
        >
          {showTimer && (
            <VisibilityIcon
              data-name={atributos.showTimer.name}
              onClick={() => handleIconClick(atributos.showTimer.fn)}
            />
          )}
          {!showTimer && (
            <VisibilityOffIcon
              data-name={atributos.showTimer.name}
              onClick={() => handleIconClick(atributos.showTimer.fn)}
            />
          )}
        </ToggleButton>
        <ToggleButton
          value={atributos.audioEnable.name}
          key="audioEnable"
          aria-label="audioEnable"
        >
          {audioEnable && (
            <PlayArrowIcon
              data-name={atributos.audioEnable.name}
              onClick={() => handleIconClick(atributos.audioEnable.fn)}
            />
          )}
          {!audioEnable && (
            <PlayDisabledIcon
              data-name={atributos.audioEnable.name}
              onClick={() => handleIconClick(atributos.audioEnable.fn)}
            />
          )}
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};
