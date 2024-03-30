import Head from "next/head";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { Edit } from "@mui/icons-material";
import { useState } from "react";

import {
  setShowQuizCenterPlace,
  setShowVisitantesCenterPlace,
  setShowTimerCenterPlace,
  setShowCenterPlace,
} from "../../store/booleansSlice";

import {
  setCenterSideBarWidth,
  setCenterSideBarMarginTop,
  setCenterBackgroundColor,
  setCenterSideBarLeft,
} from "../../store/stylizationSlice";

import ToogleElemento from "./ToogleElemento";
import Controle from "./Controle";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default () => {
  const dispatch = useDispatch();
  const channel = new BroadcastChannel("semanaSanta");

  const [editComponent, setEditComponent] = useState(false);
  const handleOpen = () => setEditComponent(true);
  const handleClose = () => setEditComponent(false);
  const showQuizCenterPlace = useSelector(
    (state) => state.booleans.showQuizCenterPlace
  );
  const centerSideBarMarginTop = useSelector(
    (state) => state.stylization.centerSideBarMarginTop
  );

  const centerSideBarWidth = useSelector(
    (state) => state.stylization.centerSideBarWidth
  );

  const showVisitantesCenterPlace = useSelector(
    (state) => state.booleans.showVisitantesCenterPlace
  );
  const showTimerCenterPlace = useSelector(
    (state) => state.booleans.showTimerCenterPlace
  );
  const showCenterPlace = useSelector((state) => {
    return state.booleans.showCenterPlace;
  });

  const centerBackgroundColor = useSelector(
    (state) => state.stylization.centerBackgroundColor
  );

  const centerSideBarLeft = useSelector(
    (state) => state.stylization.centerSideBarLeft
  );

  const [formats, setFormats] = useState(() => []);

  const handleFormat = (event, newFormats) => {
    dispatch(setShowQuizCenterPlace(newFormats.indexOf("quiz") !== -1));
    dispatch(
      setShowVisitantesCenterPlace(newFormats.indexOf("visitantes") !== -1)
    );
    dispatch(setShowCenterPlace(newFormats.indexOf("display") !== -1));
    dispatch(setShowTimerCenterPlace(newFormats.indexOf("timer") !== -1));
    setFormats(newFormats);
  };

  const methods = {
    setCenterSideBarWidth: {
      fn: setCenterSideBarWidth,
    },
    setCenterSideBarMarginTop: {
      fn: setCenterSideBarMarginTop,
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

  function dispatchUpdate(ev, methodName) {
    {
      console.log("dispatchUpdate");
      console.log(methodName);
      console.log(ev.target.value);
      console.log(ev.target);
      console.log(methods);
      console.log(methods[methodName]);
      dispatch(methods[methodName].fn(ev.target.value));
      const message = {
        id: methodName,
        content: ev.target.value,
      };
      channel.postMessage(message);
    }
  }

  return (
    <>
      <div>
        <Head>
          <style>
            {`
              .centerSideBar {
                position: absolute;
                height: min-100px; /* Ajuste conforme necessário */
                width: min-100px; /* Ajuste conforme necessário */
                padding: 30px; 
              }

              .handle {
                
                position: absolute;
                width: 10px;
                height: 10px;
                top: 0;
                background-color: rgba(0, 0, 0, 0.3);
                z-index: 2;
              }

              .handle.left { left: -5px; }

              .centerSideBar {
                left: 50%;
                transform: translateX(-50%);
                background-color: red; /* Altere a cor conforme desejado */
              }
            `}
          </style>
        </Head>
      </div>
      <div className="centerSideBar">
        <IconButton
          className="handle left"
          aria-label="Edit"
          onClick={handleOpen}
        >
          <Edit />
        </IconButton>
        <ToogleElemento
          display={showCenterPlace}
          fnDisplay={(e) => dispatchUpdate(e, "setShowCenterPlace")}
          quiz={showQuizCenterPlace}
          fnQuiz={(e) => dispatchUpdate(e, "setShowQuizCenterPlace")}
          visitantes={showVisitantesCenterPlace}
          fnVisitantes={(e) =>
            dispatchUpdate(e, "setShowVisitantesCenterPlace")
          }
          timer={showTimerCenterPlace}
          fnTimer={(e) => dispatchUpdate(e, "setShowTimerCenterPlace")}
        />
      </div>
      <Modal
        open={editComponent}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Controle
          target="Central"
          styles={style}
          sideBarWidth={centerSideBarWidth}
          sideBarLeftPosition={centerSideBarLeft}
          fnSideBarLeftPosition={(e) =>
            dispatchUpdate(e, "setCenterSideBarLeft")
          }
          fnWidthArea={(e) => dispatchUpdate(e, "setCenterSideBarWidth")}
          sideBarTopPosition={centerSideBarMarginTop}
          fnSideBarTopPosition={(e) =>
            dispatchUpdate(e, "setCenterSideBarMarginTop")
          }
          displayed={showCenterPlace}
          fnDisplayed={(e) => dispatchUpdate(e, "setShowCenterPlace")}
          centerBackgroundColor={centerBackgroundColor}
          fnBackgroundColor={(e) =>
            dispatchUpdate(e, "setCenterBackgroundColor")
          }
          quizDisplay={showQuizCenterPlace}
          fnQuizDisplay={(e) => dispatchUpdate(e, "setShowQuizCenterPlace")}
          visitantesDisplay={showVisitantesCenterPlace}
          fnVisitantesDisplay={(e) =>
            dispatchUpdate(e, "setShowVisitantesCenterPlace")
          }
          timerDisplay={showTimerCenterPlace}
          fnTimerDisplay={(e) => dispatchUpdate(e, "setShowTimerCenterPlace")}
        />
      </Modal>
    </>
  );
};
