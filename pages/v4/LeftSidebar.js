import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setLeftSideBarWidth,
  setLeftSideBarMarginTop,
  setLeftBackgroundColor,
  setLeftSideBarLeft,
} from "../../store/stylizationSlice";
import {
  setShowQuizLeftPlace,
  setShowVisitantesLeftPlace,
  setShowTimerLeftPlace,
  setShowLeftPlace,
  setShowQuizRightPlace,
} from "../../store/booleansSlice";
import Quiz from "./Quiz";
import Visitantes from "./Visitantes";

export default () => {
  const dispatch = useDispatch();
  const channel = new BroadcastChannel("semanaSanta");
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

  const methods = {
    setLeftSideBarMarginTop: {
      fn: setLeftSideBarMarginTop,
    },
    setLeftSideBarWidth: {
      fn: setLeftSideBarWidth,
    },
    setLeftBackgroundColor: {
      fn: setLeftBackgroundColor,
    },
    setLeftSideBarLeft: {
      fn: setLeftSideBarLeft,
    },
    setShowLeftPlace: {
      fn: setShowLeftPlace,
    },
    setShowQuizLeftPlace: {
      fn: setShowQuizLeftPlace,
    },
    setShowVisitantesLeftPlace: {
      fn: setShowVisitantesLeftPlace,
    },
    setShowTimerLeftPlace: {
      fn: setShowTimerLeftPlace,
    },
  };

  useEffect(() => {
    channel.onmessage = (ev) => {
      if (methods[ev.data.id]) {
        if (methods[ev.data.id].noredux == true) {
          methods[ev.data.id].fn(ev.data.content);
        } else {
          dispatch(methods[ev.data.id].fn(ev.data.content));
        }
      } else {
        console.log("Método não encontrado:", ev.data);
      }
    };

    return () => {
      channel.close();
    };
  }, [channel]);
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
        <Visitantes show={setShowVisitantesLeftPlace} />
      </div>
    </>
  );
};
