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
        <ToogleElemento
          display={showRightPlace}
          fnDisplay={() =>
            dispatchUpdate(
              { target: { value: !showRightPlace } },
              "setShowRightPlace"
            )
          }
          quiz={showQuizRightPlace}
          fnQuiz={() =>
            dispatchUpdate(
              { target: { value: !showQuizRightPlace } },
              "setShowQuizRightPlace"
            )
          }
          visitantes={showVisitantesRightPlace}
          fnVisitantes={() =>
            dispatchUpdate(
              { target: { value: !showVisitantesRightPlace } },
              "setShowVisitantesRightPlace"
            )
          }
          timer={showTimerRightPlace}
          fnTimer={() =>
            dispatchUpdate(
              { target: { value: !showTimerRightPlace } },
              "setShowTimerRightPlace"
            )
          }
          modalFn={handleOpen}
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
          centerBackgroundColor={rightBackgroundColor}
          fnBackgroundColor={(e) =>
            dispatchUpdate(e, "setRightBackgroundColor")
          }
          displayed={showRightPlace}
          fnDisplayed={() =>
            dispatchUpdate(
              { target: { value: !showRightPlace } },
              "setShowRightPlace"
            )
          }
          quizDisplay={showQuizRightPlace}
          fnQuizDisplay={() =>
            dispatchUpdate(
              { target: { value: !showQuizRightPlace } },
              "setShowQuizRightPlace"
            )
          }
          visitantesDisplay={showVisitantesRightPlace}
          fnVisitantesDisplay={() =>
            dispatchUpdate(
              { target: { value: !showVisitantesRightPlace } },
              "setShowVisitantesRightPlace"
            )
          }
          timerDisplay={showTimerRightPlace}
          fnTimerDisplay={() =>
            dispatchUpdate(
              { target: { value: !showTimerRightPlace } },
              "setShowTimerRightPlace"
            )
          }
        />
      </Modal>
    </>
  );
};
