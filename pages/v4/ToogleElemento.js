import { useState, useEffect } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";

export default ({
  quiz,
  fnQuiz,
  visitantes,
  fnVisitantes,
  timer,
  fnTimer,
  display,
  fnDisplay,
}) => {
  const [formats, setFormats] = useState(() => {
    const initialFormats = [];
    if (quiz) initialFormats.push("quiz");
    if (visitantes) initialFormats.push("visitantes");
    if (timer) initialFormats.push("timer");
    if (display) initialFormats.push("display");
    return initialFormats;
  });

  useEffect(() => {
    setFormats(() => {
      const initialFormats = [];
      if (quiz) initialFormats.push("quiz");
      if (visitantes) initialFormats.push("visitantes");
      if (timer) initialFormats.push("timer");
      if (display) initialFormats.push("display");
      return initialFormats;
    });
  }, [quiz, visitantes, timer, display]);

  const atributos = {
    quiz: {
      name: "quiz",
      fn: fnQuiz,
    },
    visitantes: {
      name: "visitantes",
      fn: fnVisitantes,
    },
    timer: {
      name: "timer",
      fn: fnTimer,
    },
    display: {
      name: "display",
      fn: fnDisplay,
    },
  };

  const handleFormat = (event, newFormats) => {
    let targetValue = event.target.value || event.target.dataset.name;
    if (targetValue !== undefined) {
      atributos[targetValue].fn({
        target: {
          value: newFormats.indexOf(targetValue) > -1,
        },
      });
      setFormats(newFormats);
    }
  };

  return (
    <>
      <ToggleButtonGroup
        value={formats}
        onChange={handleFormat}
        aria-label="text formatting"
      >
        <ToggleButton value={atributos.quiz.name} aria-label="Quiz">
          Quiz
        </ToggleButton>
        <ToggleButton value={atributos.visitantes.name} aria-label="Visitantes">
          Visitantes
        </ToggleButton>
        <ToggleButton value={atributos.timer.name} aria-label="Timer">
          Timer
        </ToggleButton>
        <ToggleButton value={atributos.display.name} aria-label="display">
          {display && <VisibilityIcon data-name={atributos.display.name} />}
          {!display && <VisibilityOffIcon data-name={atributos.display.name} />}
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};
