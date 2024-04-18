import { Title, Image, QrCode } from "@mui/icons-material";
import ButtonGroupWithOptions from "./ButtonGroupWithOptions";

const ToogleQRElement = ({
  showText,
  showImage,
  showQrcode,
  fnShowText,
  fnShowImage,
  fnShowQrcode,
  modalFn,
}) => {
  const handleIconClick = (iconFunction) => {
    // Execute a função associada ao ícone
    iconFunction();
    // Adicione aqui qualquer outra lógica que você deseja executar quando o ícone é clicado
  };

  const options = [
    {
      name: "titulo",
      label: "Título",
      icon: <Title />,
      fn: fnShowText,
      initialState: showText,
    },
    {
      name: "imagem",
      label: "Imagem",
      icon: <Image />,
      fn: fnShowImage,
      initialState: showImage,
    },
    {
      name: "qrcode",
      label: "QrCode",
      icon: <QrCode />,
      fn: fnShowQrcode,
      initialState: showQrcode,
    },
  ];

  return <ButtonGroupWithOptions options={options} modal={modalFn} />;
};

export default ToogleQRElement;
