import {
  TextField,
  Button,
  Switch,
  Toolbar,
  AppBar,
  Container,
  Grid,
  Box,
  FormControl,
  FormControlLabel,
  InputLabel,
  InputAdornment,
  Input,
  Stack,
  Slider,
} from "@mui/material";

import ToogleTimerElement from "./ToogleTimerElement";
import GetColor from "./GetColor";

const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default ({
  limitTime,
  title,
  titleRemain,
  subtitle,
  subtitleRemain,
  textSize,
  audioEnable,
  timerTextColor,
  fnTimerTextColor,
  fnTextSize,
  fnLimitTime,
  fnPlusOne,
  fnPlusFive,
  fnPlusTen,
  fnPlusThirty,
  showTimer,
  fnShowTimer,
  fnAudioEnable,
  fnTitle,
  fnSubtitle,
  fnTitleRemain,
  fnSubtitleRemain,
  audioGender,
  fnAudioGender,
  setGender,
}) => {
  return (
    <Box sx={styles}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <label>Tamanho do texto</label>
          <Slider
            value={textSize}
            onChange={fnTextSize}
            step={0.1}
            min={0.1}
            max={10}
          />
        </Grid>{" "}
        <Grid item xs={6} sm={6}>
          <label>cor do Texto</label>
          <GetColor
            definedColor={timerTextColor}
            fnDefinedColor={fnTimerTextColor}
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <label>Horario Limite</label>
          <Input type="time" value={limitTime} onChange={fnLimitTime} />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="outlined-basic"
            value={title}
            onChange={fnTitle}
            label="Titulo Terminará"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="outlined-basic"
            value={subtitle}
            onChange={fnSubtitle}
            label="Subtitulo Terminará"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="outlined-basic"
            value={titleRemain}
            onChange={fnTitleRemain}
            label="Titulo Terminou"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="outlined-basic"
            value={subtitleRemain}
            onChange={fnSubtitleRemain}
            label="Subtitulo Terminou"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <ToogleTimerElement
            fnPlusOne={fnPlusOne}
            fnPlusFive={fnPlusFive}
            fnPlusTen={fnPlusTen}
            fnPlusThirty={fnPlusThirty}
            showTimer={showTimer}
            fnShowTimer={fnShowTimer}
            audioEnable={audioEnable}
            fnAudioEnable={fnAudioEnable}
            audioGender={audioGender}
            fnAudioGender={fnAudioGender}
            setGender={setGender}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
