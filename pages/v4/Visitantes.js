import Qrplace from "./Qrplace";
import { useSelector } from "react-redux";
import { useAppState } from "./stateService";

import logoImage from "../../public/v2/src/images/logo-visitas.png";

export default ({ show }) => {
  const { dispatchUpdate } = useAppState(); // Use o hook personalizado
  const title = useSelector((state) => state.qrcode.visitantesTitle);
  const subtitle = useSelector((state) => state.qrcode.visitantesSubtitle);
  const link = useSelector((state) => state.qrcode.visitantesLink);

  const showImage = useSelector((state) => state.qrcode.visitantesShowImage);
  const showText = useSelector((state) => state.qrcode.visitantesShowText);
  const showQr = useSelector((state) => state.qrcode.visitantesShowQrcode);
  const textSize = useSelector((state) => state.qrcode.visitantesTextSize);
  const imageSize = useSelector((state) => state.qrcode.visitantesImageSize);
  const qrcodeSize = useSelector((state) => state.qrcode.visitantesQrcodeSize);
  const colorDark = useSelector((state) => state.qrcode.visitantesQrcodeColor);
  const textColor = useSelector((state) => state.qrcode.visitantesTextColor);
  const qrcodeColor = useSelector(
    (state) => state.qrcode.visitantesQrcodeColor
  );

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
