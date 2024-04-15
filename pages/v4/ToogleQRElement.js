import { Title, Image, QrCode } from "@mui/icons-material";
import ToggleButtonGroupWithOptions from "./ToggleButtonGroupWithOptions";

const ToogleQRElement = ({ fnShowText, fnShowImage, fnShowQrcode }) => {
  const handleIconClick = (iconFunction) => {
    // Execute a função associada ao ícone
    iconFunction();
    // Adicione aqui qualquer outra lógica que você deseja executar quando o ícone é clicado
  };

  const options = [
    {
      name: "titulo",
      label: "Título",
      icon: <Title onClick={() => handleIconClick(fnShowText)} />,
      fn: fnShowText,
      initialState: true,
    },
    {
      name: "imagem",
      label: "Imagem",
      icon: <Image onClick={() => handleIconClick(fnShowImage)} />,
      fn: fnShowImage,
      initialState: false,
    },
    {
      name: "qrcode",
      label: "QrCode",
      icon: <QrCode onClick={() => handleIconClick(fnShowQrcode)} />,
      fn: fnShowQrcode,
      initialState: false,
    },
  ];

  return <ToggleButtonGroupWithOptions options={options} />;
};

export default ToogleQRElement;
