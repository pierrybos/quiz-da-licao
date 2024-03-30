import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Head from "next/head";
import Image from "next/image";
import Qrcode from "../../src/components/Qrcode";
import QrcodeComponent from "../../src/components/QrcodeComponent";

export default ({
  show,
  showText,
  showImage,
  showQr,
  title,
  subtitle,
  link,
  textSize,
  img,
  imageSize,
  qrcodeSize,
  colorDark,
  quizSize,
  textColor,
  qrcodeColor,
}) => {
  return (
    <>
      <div>
        <Head>
          <style>
            {`
              .qrPlace{
                display: ${show ? "block !important" : "none !important"};
              }
              .textSide{
                display: ${showText ? "block !important" : "none !important"};
                font-size: ${textSize}em;
                color: rgba(${textColor.r},${textColor.g},${textColor.b},${
              textColor.a
            });
              }
              .textSide * { margin: 0; } 
              .imageSide{
                display: ${showImage ? "block !important" : "none !important"};
              }
              .qrSide{
                display: ${showQr ? "block !important" : "none !important"};
              }
              `}
          </style>
        </Head>
      </div>
      {/*
      @TODO: add image
      @TODO: add qrcode
      @TODO: add text
      @TODO: add link
      @TODO: add title
      @TODO: add subtitle
      @TODO: add styles based the redux variabels
      @TODO: make timer and visitantes files
      */}
      <div className="qrPlace">
        <div className="textSide">
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <div className="imageSide">
          <Image src={img} width={imageSize} />
        </div>
        <div className="qrSide">
          <QrcodeComponent
            url={link}
            colorDark={qrcodeColor}
            quizSize={qrcodeSize}
          />
        </div>
      </div>
    </>
  );
};
