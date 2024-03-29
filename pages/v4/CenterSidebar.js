import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setCenterSideBarWidth,
  setCenterSideBarMarginTop,
  setCenterBackgroundColor,
  setCenterSideBarLeft,
} from "../../store/stylizationSlice";
import {
  setShowQuizCenterPlace,
  setShowVisitantesCenterPlace,
  setShowTimerCenterPlace,
  setShowCenterPlace,
} from "../../store/booleansSlice";

export default () => {
  const dispatch = useDispatch();
  const channel = new BroadcastChannel("semanaSanta");
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

  const methods = {
    setCenterSideBarMarginTop: {
      fn: setCenterSideBarMarginTop,
    },
    setCenterSideBarWidth: {
      fn: setCenterSideBarWidth,
    },
    setCenterBackgroundColor: {
      fn: setCenterBackgroundColor,
    },
    setCenterSideBarLeft: {
      fn: setCenterSideBarLeft,
    },
    setShowCenterPlace: {
      fn: setShowCenterPlace,
    },
    setShowQuizCenterPlace: {
      fn: setShowQuizCenterPlace,
    },
    setShowVisitantesCenterPlace: {
      fn: setShowVisitantesCenterPlace,
    },
    setShowTimerCenterPlace: {
      fn: setShowTimerCenterPlace,
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
.centerSideBar {
  visibility: ${showCenterPlace ? "visible" : "hidden"};
  position: relative;
  top: ${centerSideBarMarginTop}%;
  height: 100px; /* Ajuste conforme necessário */
  width: ${centerSideBarWidth}%; /* Ajuste conforme necessário */
  background-color: rgba(${centerBackgroundColor.r}, ${
              centerBackgroundColor.g
            }, ${centerBackgroundColor.b}, ${centerBackgroundColor.a}); 
  left: ${centerSideBarLeft - centerSideBarWidth / 2}%;
}
              `}
          </style>
        </Head>
      </div>
      <div className="centerSideBar"></div>
    </>
  );
};
