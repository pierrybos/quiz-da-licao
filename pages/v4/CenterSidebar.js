import Head from "next/head";
import { useSelector } from "react-redux";

import Quiz from "./Quiz";
import Visitantes from "./Visitantes";
import Timer from "./Timer";
import { useAppState } from "./stateService";

export default () => {
  const { dispatchUpdate } = useAppState(); // Use o hook personalizado

  const centerSideBarMarginTop = useSelector(
    (state) => state.stylization.centerSideBarMarginTop
  );

  const centerBackgroundColor = useSelector(
    (state) => state.stylization.centerBackgroundColor
  );

  const centerSideBarWidth = useSelector(
    (state) => state.stylization.centerSideBarWidth
  );

  const centerSideBarLeft = useSelector(
    (state) => state.stylization.centerSideBarLeft
  );
  const showCenterPlace = useSelector(
    (state) => state.booleans.showCenterPlace
  );

  const showQuizCenterPlace = useSelector(
    (state) => state.booleans.showQuizCenterPlace
  );

  const showVisitantesCenterPlace = useSelector(
    (state) => state.booleans.showVisitantesCenterPlace
  );

  const showTimerCenterPlace = useSelector(
    (state) => state.booleans.showTimerCenterPlace
  );

  return (
    <>
      <div>
        <Head>
          <style>
            {`
.centerSideBar {
  visibility: ${showCenterPlace ? "visible" : "hidden"};
  position: absolute;
  top: ${centerSideBarMarginTop}%;
  padding: 30px;
    border-radius: 50px;
  min-height: 100px; /* Ajuste conforme necessário */
  min-width: ${centerSideBarWidth}%; /* Ajuste conforme necessário */
  background-color: rgba(${centerBackgroundColor.r}, ${
              centerBackgroundColor.g
            }, ${centerBackgroundColor.b}, ${centerBackgroundColor.a}); 
  left: ${centerSideBarLeft - centerSideBarWidth / 2}%;
}
              `}
          </style>
        </Head>
      </div>
      <div className="centerSideBar">
        <Quiz show={showQuizCenterPlace} />
        <Visitantes show={showVisitantesCenterPlace} />
        <Timer show={showTimerCenterPlace} />
      </div>
    </>
  );
};
