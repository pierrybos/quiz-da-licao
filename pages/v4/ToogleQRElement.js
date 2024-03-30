import { useState } from "react";
import TitleIcon from "@mui/icons-material/Title";
import ImageIcon from "@mui/icons-material/Image";
import QrCodeIcon from "@mui/icons-material/QrCode";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";

export default ({
  titulo,
  fnShowText,
  imagem,
  fnShowImage,
  qrcode,
  fnShowQrcode,
}) => {
  const [formats, setFormats] = useState(() => []);
  const atributos = {
    titulo: "titulo",
    imagem: "imagem",
    qrcode: "qrcode",
  };
  const handleFormat = (event, newFormats) => {
    fnShowText({
      target: {
        value: newFormats.indexOf(atributos.titulo) !== -1,
      },
    });

    fnShowImage({
      target: {
        value: newFormats.indexOf(atributos.imagem) !== -1,
      },
    });

    fnShowQrcode({
      target: {
        value: newFormats.indexOf(atributos.qrcode) !== -1,
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
        <ToggleButton value={atributos.titulo} aria-label="Título">
          <TitleIcon />
        </ToggleButton>
        <ToggleButton value={atributos.imagem} aria-label="Imagem">
          <ImageIcon />
        </ToggleButton>
        <ToggleButton value={atributos.qrcode} aria-label="QrCode">
          <QrCodeIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};
