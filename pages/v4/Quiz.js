import Qrplace from "./Qrplace";
import { useSelector } from "react-redux";

import { useAppState } from "./stateService";

import logoImage from "../../public/v2/src/images/logo.png";

export default ({ show }) => {
  const { dispatchUpdate } = useAppState(); // Use o hook personalizado

  const title = useSelector((state) => state.qrcode.quizTitle);
  const subtitle = useSelector((state) => state.qrcode.quizSubtitle);
  const link = useSelector((state) => state.qrcode.quizLink);

  const showImage = useSelector((state) => state.qrcode.quizShowImage);
  const showText = useSelector((state) => state.qrcode.quizShowText);
  const showQr = useSelector((state) => state.qrcode.quizShowQrcode);
  const textSize = useSelector((state) => state.qrcode.quizTextSize);
  const imageSize = useSelector((state) => state.qrcode.quizImageSize);
  const qrcodeSize = useSelector((state) => state.qrcode.quizQrcodeSize);
  const colorDark = useSelector((state) => state.qrcode.quizQrcodeColor);
  const textColor = useSelector((state) => state.qrcode.quizTextColor);
  const qrcodeColor = useSelector((state) => state.qrcode.quizQrcodeColor);

  return (
    <Qrplace
      show={show}
      showText={showText}
      showImage={showImage}
      showQr={showQr}
      title={title}
      subtitle={subtitle}
      link={link}
      textSize={textSize}
      img={logoImage}
      imageSize={imageSize}
      colorDark={colorDark}
      qrcodeSize={qrcodeSize}
      textColor={textColor}
      qrcodeColor={qrcodeColor}
    />
  );
};
