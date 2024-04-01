import Head from "next/head";
import { useSelector } from "react-redux";

import Quiz from "./Quiz";
import Visitantes from "./Visitantes";

import { useAppState } from "./stateService";

export default () => {
  const { dispatchUpdate } = useAppState(); // Use o hook personalizado
  const leftSideBarMarginTop = useSelector(
    (state) => state.stylization.leftSideBarMarginTop
  );

  const leftBackgroundColor = useSelector(
    (state) => state.stylization.leftBackgroundColor
  );

  const leftSideBarWidth = useSelector(
    (state) => state.stylization.leftSideBarWidth
  );

  const leftSideBarLeft = useSelector(
    (state) => state.stylization.leftSideBarLeft
  );
  const showLeftPlace = useSelector((state) => state.booleans.showLeftPlace);
  const showQuizLeftPlace = useSelector(
    (state) => state.booleans.showQuizLeftPlace
  );
  const showVisitantesLeftPlace = useSelector(
    (state) => state.booleans.showVisitantesLeftPlace
  );

  return (
    <>
      <div>
        <Head>
          <style>
            {`
.leftSideBar {
  visibility: ${showLeftPlace ? "visible" : "hidden"};
  position: absolute;
  top: ${leftSideBarMarginTop}%;
  padding: 30px;
  min-height: 100px; /* Ajuste conforme necessário */
  min-width: ${leftSideBarWidth}%; /* Ajuste conforme necessário */
  background-color: rgba(${leftBackgroundColor.r}, ${leftBackgroundColor.g}, ${
              leftBackgroundColor.b
            }, ${leftBackgroundColor.a}); 
  left: ${leftSideBarLeft}%;
}
              `}
          </style>
        </Head>
      </div>
      <div className="leftSideBar">
        <Quiz show={showQuizLeftPlace} />
        <Visitantes show={showVisitantesLeftPlace} />
      </div>
    </>
  );
};
