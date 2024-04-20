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
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import FaceIcon from "@mui/icons-material/Face";

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
  audioGender,
  fnAudioGender,
  setGender,
}) => {
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
      fn: fnShowTimer,
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
  if (setGender) {
    options.push({
      name: "audioGender",
      label: "audioGender",
      icon: audioGender ? <FaceRetouchingNaturalIcon /> : <FaceIcon />,
      fn: fnAudioGender,
      initialState: audioGender,
    });
  }

  return <ButtonGroupWithOptions options={options} modal={modalFn} />;
};
