import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
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
  const options = [
    {
      name: "quiz",
      label: "Quiz",
      initialState: quiz,
      fn: fnQuiz,
    },
    {
      name: "visitantes",
      label: "Visitantes",
      initialState: visitantes,
      fn: fnVisitantes,
    },
    {
      name: "timer",
      label: "Timer",
      icon: <AccessTimeFilledIcon />,
      initialState: timer,
      fn: fnTimer,
    },
    {
      name: "display",
      label: "Display",
      icon: display ? <VisibilityIcon /> : <VisibilityOffIcon />,
      fn: fnDisplay,
      initialState: display,
    },
  ];

  return (
    <>
      <ButtonGroupWithOptions options={options} modal={modalFn} />
    </>
  );
};
