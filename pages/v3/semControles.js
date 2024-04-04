import Qrcode from "../../src/components/Qrcode";
import Timer from "../../src/components/Timer";
import Head from "next/head";
import estilos from "../../src/components/estilos";
import TitleQuiz from "../../src/components/TitleQuiz";
import TitleVisitantes from "../../src/components/TitleVisitantes";
import { useSelector } from "react-redux";
import QrCodeVisitantes from "../../src/components/QrCodeVisitantes";

export default () => {
  const styles = estilos;

  const showLogoQuiz = useSelector((state) => state.booleans.showLogoQuiz);
  const showTextoQuiz = useSelector((state) => state.booleans.showTextoQuiz);
  const showQRCodeQuiz = useSelector((state) => state.booleans.showQRCodeQuiz);
  const showBothQr = useSelector((state) => state.booleans.showBothQr);
  const showQrVisitantesPlace = useSelector(
    (state) => state.booleans.showQrVisitantesPlace
  );
  const showQrQuizPlace = useSelector(
    (state) => state.booleans.showQrQuizPlace
  );
  const showLogoVisitantes = useSelector(
    (state) => state.booleans.showLogoVisitantes
  );
  const showQRCodeVisitantes = useSelector(
    (state) => state.booleans.showQRCodeVisitantes
  );
  const showTextoVisitantes = useSelector(
    (state) => state.booleans.showTextoVisitantes
  );
  const qrcodeStyle = {
    ...styles.sidebarItem,
    ...styles.qrcode,
  };

  const leftSideBarWidth = useSelector(
    (state) => state.stylization.leftSideBarWidth
  );

  const leftSideBarPosition = useSelector(
    (state) => state.stylization.leftSideBarPosition
  );

  const fontSizeTimerPlace = useSelector(
    (state) => state.stylization.fontSizeTimerPlace
  );

  const visitanteTextSize = useSelector(
    (state) => state.stylization.visitanteTextSize
  );
  const quizTextSize = useSelector((state) => state.stylization.quizTextSize);
  const quizLogoSize = useSelector((state) => state.stylization.quizLogoSize);
  const visitanteLogoSize = useSelector(
    (state) => state.stylization.visitanteLogoSize
  );

  const leftSideBarTopPosition = useSelector(
    (state) => state.stylization.leftSideBarTopPosition
  );
  //                 background-image: url("/v2/src/images/fundoSemanaSanta.png") !important;

  return (
    <>
      <div>
        <Head>
          <style>
            {`
              body {
                margin: 0 !important;
                padding: 0 !important;
                background-image: url("/fundo.png") !important;
                background-size: cover !important;
                background-position: center !important;
                background-attachment: fixed !important;
              }

              body,
              html {
                margin: 0 !important;
                padding: 0 !important;
                height: 100% !important;
                font-family: Arial, Helvetica, sans-serif !important;
                color: #1e3666 !important;
              }

              h3,
              p {
                margin: 0;
                padding: 0;
              }

              .leftSideBar {
                width: ${leftSideBarWidth}%;
                margin-left: ${leftSideBarPosition}%;
                margin-top: ${leftSideBarTopPosition}%;
              }
              .timerPlace {
                font-size: ${fontSizeTimerPlace}em;
              }
              .quizTitlePlace {
                font-size: ${quizTextSize}em;
              }
              .visitanteTitlePlace {
                font-size: ${visitanteTextSize}em;
              }

              .logoQuiz img {
                width: ${quizLogoSize}px; 
              }
              .logoVisitas img {
                width: ${visitanteLogoSize}px;
              }

          `}
          </style>
        </Head>
        {/* Conteúdo da página */}
      </div>

      <div style={styles.container}>
        <div className="leftSideBar" style={styles.leftSidebar}>
          <div
            className={showBothQr || showQrQuizPlace ? "visible" : "hidden"}
            style={styles.sidebarItem}
          >
            <div className="quizTitlePlace">
              <div className={showTextoQuiz ? "visible" : "hidden"}>
                <TitleQuiz />
              </div>
            </div>
            <div className="logoQuiz">
              <div className={showLogoQuiz ? "visible" : "hidden"}>
                <img src="v2/src/images/logo.png" alt="Logo" />
              </div>
            </div>
            <div className={qrcodeStyle}>
              <div className={showQRCodeQuiz ? "visible" : "hidden"}>
                <Qrcode />
              </div>
            </div>
          </div>
          <div
            className={
              showBothQr || showQrVisitantesPlace ? "visible" : "hidden"
            }
          >
            <div className="visitanteTitlePlace">
              <div className={showTextoVisitantes ? "visible" : "hidden"}>
                <TitleVisitantes />
              </div>
            </div>
            <div className="logoVisitas">
              <div className={showLogoVisitantes ? "visible" : "hidden"}>
                <img
                  src="v2/src/images/interessados-recepcao.png"
                  style={{ maxWidth: "100%" }}
                  alt="Logo"
                />
              </div>
            </div>
            <div className={qrcodeStyle}>
              <div className={showQRCodeVisitantes ? "visible" : "hidden"}>
                <QrCodeVisitantes />
              </div>
            </div>
          </div>
          <div className="timerPlace" style={styles.sidebarItem}>
            <Timer />
          </div>
        </div>
        <div style={styles.content}>{/* Seu conteúdo principal aqui */}</div>
      </div>
    </>
  );
};
