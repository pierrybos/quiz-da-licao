import Head from "next/head";

export default ({
  show,
  showText,
  showImage,
  showQr,
  title,
  subtitle,
  link,
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
              }
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
      <div className="qrPlace">
        <div className="textSide">{title}</div>
        <div className="imageSide">{subtitle}</div>
        <div className="qrSide">{link}</div>
      </div>
    </>
  );
};
