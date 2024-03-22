import { useSelector } from "react-redux";
import { useQRCode } from "next-qrcode";

const QrCodeVisitantes = () => {
  const { Canvas } = useQRCode();

  const urlVisitas = useSelector((state) => state.url.urlVisitas);
  const colorDark = useSelector((state) => state.stylization.visitanteColor);
  const colorLight = useSelector(
    (state) => state.stylization.visitanteColorLight
  );
  const quizSize = useSelector((state) => state.stylization.visitanteQrSize);

  return (
    <div className="qrcode">
      <Canvas
        text={urlVisitas || "Informe o Link"}
        options={{
          errorCorrectionLevel: "M",
          margin: 3,
          scale: 4,
          width: quizSize,
          color: {
            dark: colorDark,
            light: `${colorLight}00`,
          },
        }}
      />
    </div>
  );
};

export default QrCodeVisitantes;
