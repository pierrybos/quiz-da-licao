import {
  Visibility,
  VisibilityOff,
  VisibilityOffRounded,
} from "@mui/icons-material";
import { setCenterBackgroundColor } from "../../store/stylizationSlice";

import FormQrControll from "./FormQrControll";

export default ({
  textSize,
  fnTextSize,
  imageSize,
  fnImagemSize,
  qrcodeSize,
  fnQrcodeSize,
  qrcodeColor,
  fnQrcodeColor,
  textColor,
  fnTextColor,
  title,
  fnTitle,
  subtitle,
  fnSubtitle,
  link,
  fnLink,
  fnShowText,
  fnShowImage,
  fnShowQrcode,
  showImage,
  showQrcode,
  showText,
}) => {
  return (
    <FormQrControll
      textSize={textSize}
      fnTextSize={fnTextSize}
      imageSize={imageSize}
      fnImagemSize={fnImagemSize}
      qrcodeSize={qrcodeSize}
      fnQrcodeSize={fnQrcodeSize}
      qrcodeColor={qrcodeColor}
      fnQrcodeColor={fnQrcodeColor}
      textColor={textColor}
      fnTextColor={fnTextColor}
      title={title}
      fnTitle={fnTitle}
      subtitle={subtitle}
      fnSubtitle={fnSubtitle}
      link={link}
      fnLink={fnLink}
      fnShowText={fnShowText}
      fnShowImage={fnShowImage}
      fnShowQrcode={fnShowQrcode}
      showImage={showImage}
      showQrcode={showQrcode}
      showText={showText}
    />
  );
};
