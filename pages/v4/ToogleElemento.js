import { useState, useEffect } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ButtonGroupWithOptions from "./ButtonGroupWithOptions";

export default ({
  quiz,
  fnQuiz,
  visitantes,
  fnVisitantes,
  timer,
  fnTimer,
  display,
  fnDisplay,
  modalFn,
}) => {
  const atributos = {
    quiz: {
      name: "quiz",
      label: "Quiz",
      initialValue: quiz,
      fn: fnQuiz,
    },
    visitantes: {
      name: "visitantes",
      label: "Visitantes",
      initialValue: visitantes,
      fn: fnVisitantes,
    },
    timer: {
      name: "timer",
      label: "Timer",
      initialValue: timer,
      fn: fnTimer,
    },
    display: {
      name: "display",
      label: "Display",
      initialValue: display,
      fn: fnDisplay,
    },
  };

  return (
    <>
      <ButtonGroupWithOptions
        options={[
          atributos.quiz,
          atributos.visitantes,
          atributos.timer,
          atributos.display,
        ]}
        modal={modalFn}
      />
    </>
  );
};
