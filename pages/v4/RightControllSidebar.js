import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { Edit } from "@mui/icons-material";
import { useState } from "react";

import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";

import ToogleElemento from "./ToogleElemento";
import Controle from "./Controle";
import { useAppState } from "./stateService";

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
  const { dispatchUpdate } = useAppState(); // Use o hook personalizado

  const [editComponent, setEditComponent] = useState(false);
  const handleOpen = () => setEditComponent(true);
  const handleClose = () => setEditComponent(false);

  const showRightPlace = useSelector((state) => state.booleans.showRightPlace);
  const showQuizRightPlace = useSelector(
    (state) => state.booleans.showQuizRightPlace
  );

  const showVisitantesRightPlace = useSelector(
    (state) => state.booleans.showVisitantesRightPlace
  );
  const showTimerRightPlace = useSelector(
    (state) => state.booleans.showTimerRightPlace
  );

  const rightSideBarWidth = useSelector(
    (state) => state.stylization.rightSideBarWidth
  );
  const rightSideBarRight = useSelector(
    (state) => state.stylization.rightSideBarRight
  );

  const rightSideBarMarginTop = useSelector(
    (state) => state.stylization.rightSideBarMargin
  );
  const rightBackgroundColor = useSelector(
    (state) => state.stylization.rightBackgroundColor
  );

  return (
    <>
      <div>
        <Head>
          <style></style>
        </Head>
      </div>
      <div>
        <IconButton
          className="handle right"
          aria-label="Edit"
          onClick={handleOpen}
        >
          <Edit />
        </IconButton>
        <ToogleElemento
          display={showRightPlace}
          fnDisplay={(e) => dispatchUpdate(e, "setShowRightPlace")}
          quiz={showQuizRightPlace}
          fnQuiz={(e) => dispatchUpdate(e, "setShowQuizRightPlace")}
          visitantes={showVisitantesRightPlace}
          fnVisitantes={(e) => dispatchUpdate(e, "setShowVisitantesRightPlace")}
          timer={showTimerRightPlace}
          fnTimer={(e) => dispatchUpdate(e, "setShowTimerRightPlace")}
        />
      </div>
      <Modal
        open={editComponent}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Controle
          target="Direita"
          styles={style}
          sideBarWidth={rightSideBarWidth}
          sideBarLeftPosition={rightSideBarRight}
          fnSideBarLeftPosition={(e) =>
            dispatchUpdate(e, "setRightSideBarRight")
          }
          fnWidthArea={(e) => dispatchUpdate(e, "setRightSideBarWidth")}
          sideBarTopPosition={rightSideBarMarginTop}
          fnSideBarTopPosition={(e) =>
            dispatchUpdate(e, "setRightSideBarMarginTop")
          }
          displayed={showRightPlace}
          fnDisplayed={(e) => dispatchUpdate(e, "setShowRightPlace")}
          centerBackgroundColor={rightBackgroundColor}
          fnBackgroundColor={(e) =>
            dispatchUpdate(e, "setRightBackgroundColor")
          }
          quizDisplay={showQuizRightPlace}
          fnQuizDisplay={(e) => dispatchUpdate(e, "setShowQuizRightPlace")}
          visitantesDisplay={showVisitantesRightPlace}
          fnVisitantesDisplay={(e) =>
            dispatchUpdate(e, "setShowVisitantesRightPlace")
          }
          timerDisplay={showTimerRightPlace}
          fnTimerDisplay={(e) => dispatchUpdate(e, "setShowTimerRightPlace")}
        />
      </Modal>
    </>
  );
};
