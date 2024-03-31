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

  /*

 @TODO: refatorar abaixo com o comentado aqui
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
    atributos[targetValue].fn({
      target: {
        value: newFormats.indexOf(targetValue) > -1,
      },
    });
    setFormats(newFormats);
  };
*/

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
