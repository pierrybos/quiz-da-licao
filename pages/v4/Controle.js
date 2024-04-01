import Box from "@mui/material/Box";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionGroup from "@mui/joy/AccordionGroup";
import AccordionSummary from "@mui/joy/AccordionSummary";

import {
  TextField,
  Button,
  Switch,
  Toolbar,
  AppBar,
  Container,
  Grid,
  FormControl,
  FormControlLabel,
  InputLabel,
  InputAdornment,
  Input,
  Stack,
  Slider,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  VisibilityOffRounded,
} from "@mui/icons-material";
import GetColor from "./GetColor";
import { setCenterBackgroundColor } from "../../store/stylizationSlice";

import ToogleElemento from "./ToogleElemento";

export default ({
  sideBarWidth,
  fnWidthArea,
  displayed,
  fnDisplayed,
  sideBarLeftPosition,
  fnSideBarLeftPosition,
  sideBarTopPosition,
  fnSideBarTopPosition,
  fnBackgroundColor,
  centerBackgroundColor,
  fontSizeTimerPlace,
  urlQuiz,
  subTitleUrlQuiz,
  titleUrlQuiz,
  styles,
  target,
  quizDisplay,
  fnQuizDisplay,
  visitantesDisplay,
  fnVisitantesDisplay,
  timerDisplay,
  fnTimerDisplay,
}) => {
  return (
    <Box sx={styles}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <label>Tamanho da área {target}</label>
          <Slider
            value={sideBarWidth}
            onChange={fnWidthArea}
            min={1}
            max={100}
          />
        </Grid>

        <Grid item xs={12} sm={12}>
          <label>Posição à margem</label>
          <Slider
            value={sideBarLeftPosition}
            onChange={fnSideBarLeftPosition}
            min={0}
            max={100}
          />
        </Grid>

        <Grid item xs={12} sm={12}>
          <label>Posição da área ao topo</label>
          <Slider
            value={sideBarTopPosition}
            onChange={fnSideBarTopPosition}
            min={0}
            max={100}
          />
        </Grid>
        <Grid item xs={4} sm={4}>
          <label>Cor Fundo</label>
          <GetColor
            definedColor={centerBackgroundColor}
            fnDefinedColor={fnBackgroundColor}
          />
        </Grid>
        <Grid item xs={8} sm={8}>
          <label>Ocultar</label>
          <ToogleElemento
            display={displayed}
            fnDisplay={fnDisplayed}
            quiz={quizDisplay}
            fnQuiz={fnQuizDisplay}
            visitantes={visitantesDisplay}
            fnVisitantes={fnVisitantesDisplay}
            timer={timerDisplay}
            fnTimer={fnTimerDisplay}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
