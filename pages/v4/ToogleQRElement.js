import { useState, useEffect } from "react";
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
  const [formats, setFormats] = useState(() => {
    const initialFormats = [];
    if (titulo) initialFormats.push("titulo");
    if (imagem) initialFormats.push("imagem");
    if (qrcode) initialFormats.push("qrcode");
    return initialFormats;
  });

  useEffect(() => {
    setFormats(() => {
      const initialFormats = [];
      if (titulo) initialFormats.push("titulo");
      if (imagem) initialFormats.push("imagem");
      if (qrcode) initialFormats.push("qrcode");
      return initialFormats;
    });
  }, [titulo, imagem, qrcode]);

  const atributos = {
    titulo: {
      name: "titulo",
      fn: fnShowText,
    },
    imagem: {
      name: "imagem",
      fn: fnShowImage,
    },
    qrcode: {
      name: "qrcode",
      fn: fnShowQrcode,
    },
  };

  const handleFormat = (event, newFormats) => {
    let targetValue = event.target.value || event.target.dataset.name;

    if (targetValue) {
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
        <ToggleButton value={atributos.titulo.name} aria-label="Título">
          <TitleIcon data-name={atributos.titulo.name} />
        </ToggleButton>
        <ToggleButton value={atributos.imagem.name} aria-label="Imagem">
          <ImageIcon data-name={atributos.imagem.name} />
        </ToggleButton>
        <ToggleButton value={atributos.qrcode.name} aria-label="QrCode">
          <QrCodeIcon data-name={atributos.qrcode.name} />
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};
