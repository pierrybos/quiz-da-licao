import Box from "@mui/material/Box";

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

import ToogleQRElement from "./ToogleQRElement";
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
  textSize,
  fnTextSize,
  imageSize,
  fnImagemSize,
  qrcodeSize,
  fnQrcodeSize,
  qrcodeColor,
  fnQrcodeColor,
  textColor,
  fnTextColor,
  title,
  fnTitle,
  subtitle,
  fnSubtitle,
  link,
  fnLink,
  fnShowImage,
  fnShowText,
  fnShowQrcode,
}) => {
  return (
    <Box sx={styles}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <label>Tamanho da texto</label>
          <Slider
            value={textSize}
            onChange={fnTextSize}
            step={0.1}
            min={0.1}
            max={10}
          />
        </Grid>

        <Grid item xs={12} sm={12}>
          <label>Tamanho da imagem</label>
          <Slider value={imageSize} onChange={fnImagemSize} min={0} max={900} />
        </Grid>

        <Grid item xs={12} sm={12}>
          <label>Tamanho do QrCode</label>
          <Slider
            value={qrcodeSize}
            onChange={fnQrcodeSize}
            min={0}
            max={900}
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <label>cor do QrCode</label>
          <GetColor definedColor={qrcodeColor} fnDefinedColor={fnQrcodeColor} />
        </Grid>
        <Grid item xs={6} sm={6}>
          <label>cor do texto</label>
          <GetColor definedColor={textColor} fnDefinedColor={fnTextColor} />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="outlined-basic"
            value={title}
            onChange={fnTitle}
            label="Título"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} sm={12}>
          <TextField
            id="outlined-basic"
            value={subtitle}
            onChange={fnSubtitle}
            label="Subtítulo"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} sm={12}>
          <TextField
            id="outlined-basic"
            value={link}
            onChange={fnLink}
            label="Link"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <ToogleQRElement
            fnShowQrcode={fnShowQrcode}
            fnShowText={fnShowText}
            fnShowImage={fnShowImage}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
