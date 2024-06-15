import Head from "next/head";
import { useEffect, useState } from "react";

import { Grid, Typography } from "@mui/material";

import LeftControllSidebar from "./LeftControllSidebar";
import CenterControllSidebar from "./CenterControllSidebar";
import RightControllSidebar from "./RightControllSidebar";
import QuizControll from "./QuizControll";
import VisitantesControll from "./VisitantesControll";
import TimerControll from "./TimerControll";
import ExportButton from "./ExportButton";
import ImageBackground from "./ImagemBackground";
import ImportButton from "./ImportButton";
import BodyControll from "./BodyControll";
import { useSearchParams } from "next/navigation";
import { useAppState } from "./stateService";

export default () => {
  const searchParams = useSearchParams();
  const { dispatchUpdate } = useAppState(); // Use o hook personalizado

  function afterRender() {
    if (searchParams.get("quiz")) {
      dispatchUpdate(
        {
          target: {
            value:
              "https://es.minhaes.org/quizgeral/1/" + searchParams.get("quiz"),
          },
        },
        "setQuizLink"
      );
    }

    if (searchParams.get("visitas")) {
      dispatchUpdate(
        {
          target: {
            value:
              "https://minhaes.org/interessados-recepcao/interessados-recepcao.php?key=" +
              searchParams.get("visitas"),
          },
        },
        "setVisitantesLink"
      );
    }

    if (searchParams.get("time")) {
      dispatchUpdate(
        {
          target: {
            value: searchParams.get("time"),
          },
        },
        "setLimitTime"
      );
    }
  }

  useEffect(() => {
    afterRender();
  }, [searchParams]);

  return (
    <>
      <div>
        <Head>
          <style>
            {`
              body {
                margin: 0 !important;
                padding: 0 !important;
                background-color: #cdcdcd !important;
                background-size: cover !important;
                background-position: center !important;
                background-attachment: fixed !important;
              }
              .container {
                  position: relative;
                  width: 100%;
                  height: 100vh;  
              }
              .sidebarContainer {
                border: 1px solid #ccc; /* Adiciona borda para distinguir visualmente */
                border-radius: 5px; /* Arredonda as bordas */
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adiciona sombra */
                padding: 20px;
                background-color: rgba(225, 225, 225, 0.8);                
                margin-bottom: 20px; /* Adiciona espaçamento entre os itens */
              }
              `}
          </style>
        </Head>
      </div>
      <div className="container">
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <div className="sidebarContainer">
              <Typography variant="h6" gutterBottom>
                Esquerda
              </Typography>
              <LeftControllSidebar />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="sidebarContainer">
              <Typography variant="h6" gutterBottom>
                Centro
              </Typography>
              <CenterControllSidebar />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="sidebarContainer">
              <Typography variant="h6" gutterBottom>
                Direita
              </Typography>
              <RightControllSidebar />
            </div>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={4}>
            <div className="sidebarContainer">
              <Typography variant="h6" gutterBottom>
                Quiz
              </Typography>
              <QuizControll />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="sidebarContainer">
              <Typography variant="h6" gutterBottom>
                Timer
              </Typography>
              <TimerControll />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="sidebarContainer">
              <Typography variant="h6" gutterBottom>
                Visitantes
              </Typography>
              <VisitantesControll />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="sidebarContainer">
              <Typography variant="h6" gutterBottom>
                Geral
              </Typography>
              <BodyControll />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="sidebarContainer">
              <Typography variant="h6" gutterBottom>
                Imagem de fundo
              </Typography>
              <ImageBackground />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="sidebarContainer">
              <Typography variant="h6" gutterBottom>
                Backup
              </Typography>
              <ImportButton />
              <ExportButton />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
