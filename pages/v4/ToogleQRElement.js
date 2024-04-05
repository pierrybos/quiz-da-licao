import { Title, Image, QrCode } from "@mui/icons-material";
import ToggleButtonGroupWithOptions from "./ToggleButtonGroupWithOptions";

const ToogleQRElement = ({ fnShowText, fnShowImage, fnShowQrcode }) => {
  const options = [
    {
      name: "titulo",
      label: "Título",
      icon: <Title />,
      fn: fnShowText,
      initialState: true,
    },
    {
      name: "imagem",
      label: "Imagem",
      icon: <Image />,
      fn: fnShowImage,
      initialState: false,
    },
    {
      name: "qrcode",
      label: "QrCode",
      icon: <QrCode />,
      fn: fnShowQrcode,
      initialState: false,
    },
  ];

  return <ToggleButtonGroupWithOptions options={options} />;
};

export default ToogleQRElement;
