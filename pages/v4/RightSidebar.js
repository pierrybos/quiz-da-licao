import Head from "next/head";
import { useSelector } from "react-redux";

import Quiz from "./Quiz";
import Visitantes from "./Visitantes";
import Timer from "./Timer";
import { useAppState } from "./stateService";

export default () => {
  const { dispatchUpdate } = useAppState(); // Use o hook personalizado

  const rightSideBarMarginTop = useSelector(
    (state) => state.stylization.rightSideBarMarginTop
  );

  const rightBackgroundColor = useSelector(
    (state) => state.stylization.rightBackgroundColor
  );

  const rightSideBarWidth = useSelector(
    (state) => state.stylization.rightSideBarWidth
  );

  const rightSideBarRight = useSelector(
    (state) => state.stylization.rightSideBarRight
  );
  const showRightPlace = useSelector((state) => state.booleans.showRightPlace);
  const showQuizRightPlace = useSelector(
    (state) => state.booleans.showQuizRightPlace
  );
  const showTimerRightPlace = useSelector(
    (state) => state.booleans.showTimerRightPlace
  );
  const showVisitantesRightPlace = useSelector(
    (state) => state.booleans.showVisitantesRightPlace
  );

  return (
    <>
      <div>
        <Head>
          <style>
            {`
 .rightSideBar {
   visibility: ${showRightPlace ? "visible" : "hidden"};
  position: absolute;
  top: ${rightSideBarMarginTop}%;
  padding: 30px;
    border-radius: 50px;
  min-height: 100px; /* Ajuste conforme necessário */
  min-width: ${rightSideBarWidth}%; /* Ajuste conforme necessário */
  background-color: rgba(${rightBackgroundColor.r}, ${
              rightBackgroundColor.g
            }, ${rightBackgroundColor.b}, ${rightBackgroundColor.a}); 
  right: ${rightSideBarRight}%;
}

              `}
          </style>
        </Head>
      </div>
      <div className="rightSideBar">
        <Quiz show={showQuizRightPlace} />
        <Visitantes show={showVisitantesRightPlace} />
        <Timer show={showTimerRightPlace} />
      </div>
    </>
  );
};
