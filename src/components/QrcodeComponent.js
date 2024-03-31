import { useQRCode } from "next-qrcode";

export default ({ url, colorDark, colorLight, quizSize }) => {
  const { Canvas } = useQRCode();

  function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
  }

  return (
    <div className="qrcode">
      {}
      <Canvas
        text={url || "Informe o Link"}
        options={{
          errorCorrectionLevel: "M",
          margin: 3,
          scale: 4,
          width: quizSize,
          color: {
            dark: rgbToHex(colorDark.r, colorDark.g, colorDark.b),
            light: `${colorLight ? colorLight : "#FFFFFF"}00`,
          },
        }}
      />
    </div>
  );
};
