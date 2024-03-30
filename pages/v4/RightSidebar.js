import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setRightSideBarWidth,
  setRightSideBarMarginTop,
  setRightBackgroundColor,
  setRightSideBarRight,
} from "../../store/stylizationSlice";
import {
  setShowQuizRightPlace,
  setShowVisitantesRightPlace,
  setShowTimerRightPlace,
  setShowRightPlace,
} from "../../store/booleansSlice";

export default () => {
  const dispatch = useDispatch();
  const channel = new BroadcastChannel("semanaSanta");
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

  const methods = {
    setRightSideBarMarginTop: {
      fn: setRightSideBarMarginTop,
    },
    setRightSideBarWidth: {
      fn: setRightSideBarWidth,
    },
    setRightBackgroundColor: {
      fn: setRightBackgroundColor,
    },
    setRightSideBarRight: {
      fn: setRightSideBarRight,
    },
    setShowRightPlace: {
      fn: setShowRightPlace,
    },
    setShowQuizRightPlace: {
      fn: setShowQuizRightPlace,
    },
    setShowVisitantesRightPlace: {
      fn: setShowVisitantesRightPlace,
    },
    setShowTimerRightPlace: {
      fn: setShowTimerRightPlace,
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
 .rightSideBar {
   visibility: ${showRightPlace ? "visible" : "hidden"};
  position: relative;
  top: ${rightSideBarMarginTop}%;
  height: 100px; /* Ajuste conforme necessário */
  width: ${rightSideBarWidth}%; /* Ajuste conforme necessário */
  background-color: rgba(${rightBackgroundColor.r}, ${
              rightBackgroundColor.g
            }, ${rightBackgroundColor.b}, ${rightBackgroundColor.a}); 
  right: ${rightSideBarRight - rightSideBarWidth / 2}%;
}

              `}
          </style>
        </Head>
      </div>
      <div className="rightSideBar"></div>
    </>
  );
};
