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
import { useAppState } from "./stateService";

export default () => {
  const { dispatchUpdate } = useAppState(); // Use o hook personalizado

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

  return (
    <>
      <div>
        <Head></Head>
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
