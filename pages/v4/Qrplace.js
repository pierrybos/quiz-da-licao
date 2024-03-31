import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Head from "next/head";
import Image from "next/image";
import Qrcode from "../../src/components/Qrcode";
import QrcodeComponent from "../../src/components/QrcodeComponent";
import TextComponent from "./TextComponent";

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
              .textSide * { margin: 0; } 

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
      <div
        className="qrPlace"
        style={{ display: `${show ? "block" : "none"}` }}
      >
        <TextComponent
          title={title}
          showText={showText}
          textSize={textSize}
          textColor={textColor}
          subtitle={subtitle}
        />
        <div
          className="imageSide"
          style={{
            display: `${showImage ? "block" : "none"}`,
          }}
        >
          <Image src={img} width={imageSize} />
        </div>
        <div
          className="qrSide"
          style={{
            display: `${showQr ? "block" : "none"}`,
          }}
        >
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
