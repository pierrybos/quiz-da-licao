import { useState } from "react";
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
  const [formats, setFormats] = useState(() => []);
  const atributos = {
    quiz: "quiz",
    visitantes: "visitantes",
    timer: "timer",
    display: "display",
  };
  const handleFormat = (event, newFormats) => {
    fnQuiz({
      target: {
        value: newFormats.indexOf(atributos.quiz) !== -1,
      },
    });

    fnVisitantes({
      target: {
        value: newFormats.indexOf(atributos.visitantes) !== -1,
      },
    });

    fnTimer({
      target: {
        value: newFormats.indexOf(atributos.timer) !== -1,
      },
    });

    fnDisplay({
      target: {
        value: newFormats.indexOf(atributos.display) !== -1,
      },
    });
    setFormats(newFormats);
  };
  return (
    <>
      <ToggleButtonGroup
        value={formats}
        onChange={handleFormat}
        aria-label="text formatting"
      >
        <ToggleButton value={atributos.quiz} aria-label="Quiz">
          Quiz
        </ToggleButton>
        <ToggleButton value={atributos.visitantes} aria-label="Visitantes">
          Visitantes
        </ToggleButton>
        <ToggleButton value={atributos.timer} aria-label="Timer">
          Timer
        </ToggleButton>
        <ToggleButton value={atributos.display} aria-label="display">
          {display && <VisibilityIcon />}
          {!display && <VisibilityOffIcon />}
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};
