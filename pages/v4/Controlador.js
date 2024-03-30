import Head from "next/head";
import LeftControllSidebar from "./LeftControllSidebar";
import CenterControllSidebar from "./CenterControllSidebar";
import RightControllSidebar from "./RightControllSidebar";
import QuizControll from "./QuizControll";
import VisitantesControll from "./VisitantesControll";

export default () => {
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
              .sideBar {
                position: absolute;
                height: min-100px; /* Ajuste conforme necessário */
                width: min-100px; /* Ajuste conforme necessário */
                padding: 30px; 

              `}
          </style>
        </Head>
      </div>
      <div className="container">
        <div>
          <LeftControllSidebar />
          <CenterControllSidebar />
          <RightControllSidebar />
        </div>
        <div>
          <QuizControll />
          <VisitantesControll />
        </div>
      </div>
    </>
  );
};
