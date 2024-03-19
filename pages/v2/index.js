import React from "react";
import Timer from "./components/Timer";
import estilos from "./css/styles";
import styles from "./css/v2.module.css";

import logo from "../../public/v2/src/images/logo.png";
import Head from "next/head";
//import logoQuiz from "../../public/v2/src/images/logo-minha-es.png";
//import logoRecepcao from "../../public/v2/src/images/interessados-recepcao.png";

const SemanaSantaPage = () => {
  const styles = estilos;

  const qrcodeStyle = {
    ...styles.sidebarItem,
    ...styles.qrcode,
  };

  const logoStyle = {
    ...styles.sidebarItem,
    ...styles.logo,
  };
  return (
    <>
      <div>
        <Head>
          <style>
            {`
              body {
                margin: 0 !important;
                padding: 0 !important;
                background-image: url("/v2/src/images/fundoSemanaSanta.png") !important;
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

          `}
          </style>
        </Head>
        {/* Conteúdo da página */}
      </div>
      <div style={styles.container}>
        <div style={styles.leftSidebar}>
          <div style={styles.sidebarItem}>
            <h3>Acesse o Quiz pelo QRCode</h3>
            <p>Use a câmera do seu celular</p>
          </div>
          <div className={logoStyle}>
            <img src="v2/src/images/logo.png" alt="Logo" />
          </div>
          <div className={qrcodeStyle}>
            <img src="v2/src/images/qrcode.png" alt="QR Code" />
          </div>
          <div style={styles.sidebarItem}>
            <Timer />
          </div>
        </div>
        <div style={styles.content}>{/* Seu conteúdo principal aqui */}</div>
      </div>
    </>
  );
};

export default SemanaSantaPage;
