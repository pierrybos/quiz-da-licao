import { useSelector } from "react-redux";
import { useQRCode } from "next-qrcode";

const Qrcode = () => {
  const { Canvas } = useQRCode();

  const urlQuiz = useSelector((state) => state.url.urlQuiz);
  const colorDark = useSelector((state) => state.stylization.quizColor);
  const colorLight = useSelector((state) => state.stylization.quizColorLight);
  const quizSize = useSelector((state) => state.stylization.quizQrSize);

  return (
    <div className="qrcode">
      <Canvas
        text={urlQuiz || "Informe o Link"}
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

export default Qrcode;
