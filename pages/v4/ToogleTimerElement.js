import { useState, useEffect } from "react";
import { ToggleButton } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";
import Replay5Icon from "@mui/icons-material/Replay5";
import Replay10Icon from "@mui/icons-material/Replay10";
import Replay30Icon from "@mui/icons-material/Replay30";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PlayDisabledIcon from "@mui/icons-material/PlayDisabled";
import ButtonGroupWithOptions from "./ButtonGroupWithOptions";

export default ({
  fnPlusOne,
  fnPlusFive,
  fnPlusTen,
  fnPlusThirty,
  showTimer,
  audioEnable,
  fnAudioEnable,
  fnShowTimer,
  modalFn,
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

  const options = [
    {
      name: "plusOne",
      label: "plusOne",
      icon: <ReplayIcon />,
      fn: fnPlusOne,
      initialState: false,
    },
    {
      name: "plusFive",
      label: "plusFive",
      icon: <Replay5Icon />,
      fn: fnPlusFive,
      initialState: false,
    },
    {
      name: "plusTen",
      label: "plusTen",
      icon: <Replay10Icon />,
      fn: fnPlusTen,
      initialState: false,
    },
    {
      name: "plusThirty",
      label: "plusThirty",
      icon: <Replay30Icon />,
      fn: fnPlusThirty,
      initialState: false,
    },
    {
      name: "showTimer",
      label: "showTimer",
      icon: showTimer ? <VisibilityIcon /> : <VisibilityOffIcon />,
      fn: fnShowTimer, // TODO: timer está ficando false todas as vezes
      initialState: showTimer,
    },
    {
      name: "audioEnable",
      label: "audioEnable",
      icon: audioEnable ? <PlayArrowIcon /> : <PlayDisabledIcon />,
      fn: fnAudioEnable,
      initialState: audioEnable,
    },
  ];

  return (
    <ButtonGroupWithOptions options={options} modal={modalFn} /> // Substituindo ToggleButtonGroup por ToggleButtonGroupWithOptions
  );
};
