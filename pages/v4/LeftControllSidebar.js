import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { Edit } from "@mui/icons-material";
import { useState } from "react";

import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";

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
} from "../../store/booleansSlice";

export default () => {
  const dispatch = useDispatch();
  const channel = new BroadcastChannel("semanaSanta");

  const [editComponent, setEditComponent] = useState(false);
  const handleOpen = () => setEditComponent(true);
  const handleClose = () => setEditComponent(false);

  const showLeftPlace = useSelector((state) => state.booleans.showLeftPlace);
  const showQuizLeftPlace = useSelector(
    (state) => state.booleans.showQuizLeftPlace
  );

  const showVisitantesLeftPlace = useSelector(
    (state) => state.booleans.showVisitantesLeftPlace
  );
  const showTimerLeftPlace = useSelector(
    (state) => state.booleans.showTimerLeftPlace
  );

  const leftSideBarWidth = useSelector(
    (state) => state.stylization.leftSideBarWidth
  );
  const leftSideBarLeft = useSelector(
    (state) => state.stylization.leftSideBarLeft
  );

  const leftSideBarMarginTop = useSelector(
    (state) => state.stylization.leftSideBarMargin
  );
  const leftBackgroundColor = useSelector(
    (state) => state.stylization.leftBackgroundColor
  );

  const methods = {
    setLeftSideBarWidth: {
      fn: setLeftSideBarWidth,
    },
    setLeftSideBarMarginTop: {
      fn: setLeftSideBarMarginTop,
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
.leftSideBar {
  left: 0;
  background-color: blue; /* Altere a cor conforme desejado */
}
              `}
          </style>
        </Head>
      </div>
      <div className="sideBar leftSideBar">
        <IconButton
          className="handle left"
          aria-label="Edit"
          onClick={handleOpen}
        >
          <Edit />
        </IconButton>
        <ToogleElemento
          display={showLeftPlace}
          fnDisplay={(e) => dispatchUpdate(e, "setShowLeftPlace")}
          quiz={showQuizLeftPlace}
          fnQuiz={(e) => dispatchUpdate(e, "setShowQuizLeftPlace")}
          visitantes={showVisitantesLeftPlace}
          fnVisitantes={(e) => dispatchUpdate(e, "setShowVisitantesLeftPlace")}
          timer={showTimerLeftPlace}
          fnTimer={(e) => dispatchUpdate(e, "setShowTimerLeftPlace")}
        />
      </div>
      <Modal
        open={editComponent}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Controle
          target="Esquerda"
          styles={style}
          sideBarWidth={leftSideBarWidth}
          sideBarLeftPosition={leftSideBarLeft}
          fnSideBarLeftPosition={(e) => dispatchUpdate(e, "setLeftSideBarLeft")}
          fnWidthArea={(e) => dispatchUpdate(e, "setLeftSideBarWidth")}
          sideBarTopPosition={leftSideBarMarginTop}
          fnSideBarTopPosition={(e) =>
            dispatchUpdate(e, "setLeftSideBarMarginTop")
          }
          displayed={showLeftPlace}
          fnDisplayed={(e) => dispatchUpdate(e, "setShowLeftPlace")}
          centerBackgroundColor={leftBackgroundColor}
          fnBackgroundColor={(e) => dispatchUpdate(e, "setLeftBackgroundColor")}
          quizDisplay={showQuizLeftPlace}
          fnQuizDisplay={(e) => dispatchUpdate(e, "setShowQuizLeftPlace")}
          visitantesDisplay={showVisitantesLeftPlace}
          fnVisitantesDisplay={(e) =>
            dispatchUpdate(e, "setShowVisitantesLeftPlace")
          }
          timerDisplay={showTimerLeftPlace}
          fnTimerDisplay={(e) => dispatchUpdate(e, "setShowTimerLeftPlace")}
        />
      </Modal>
    </>
  );
};
