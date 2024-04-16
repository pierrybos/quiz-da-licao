import { Title, Image, QrCode } from "@mui/icons-material";
import ButtonGroupWithOptions from "./ButtonGroupWithOptions";

const ToogleQRElement = ({
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

  return <ButtonGroupWithOptions options={options} modal={modalFn} />;
};

export default ToogleQRElement;
