import Head from "next/head";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { Edit } from "@mui/icons-material";
import { useState } from "react";
import { useAppState } from "./stateService";

import {
  setShowQuizCenterPlace,
  setShowVisitantesCenterPlace,
  setShowTimerCenterPlace,
  setShowCenterPlace,
} from "../../store/booleansSlice";

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
  const { dispatchUpdate } = useAppState(); // Use o hook personalizado

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

  return (
    <>
      <div>
        <Head>
          <style></style>
        </Head>
      </div>
      <div>
        <ToogleElemento
          display={showCenterPlace}
          fnDisplay={() =>
            dispatchUpdate(
              { target: { value: !showCenterPlace } },
              "setShowCenterPlace"
            )
          }
          quiz={showQuizCenterPlace}
          fnQuiz={() =>
            dispatchUpdate(
              { target: { value: !showQuizCenterPlace } },
              "setShowQuizCenterPlace"
            )
          }
          visitantes={showVisitantesCenterPlace}
          fnVisitantes={() =>
            dispatchUpdate(
              { target: { value: !showVisitantesCenterPlace } },
              "setShowVisitantesCenterPlace"
            )
          }
          timer={showTimerCenterPlace}
          fnTimer={() =>
            dispatchUpdate(
              { target: { value: !showTimerCenterPlace } },
              "setShowTimerCenterPlace"
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
          centerBackgroundColor={centerBackgroundColor}
          fnBackgroundColor={(e) =>
            dispatchUpdate(e, "setCenterBackgroundColor")
          }
          displayed={showCenterPlace}
          fnDisplayed={() =>
            dispatchUpdate(
              { target: { value: !showCenterPlace } },
              "setShowCenterPlace"
            )
          }
          quizDisplay={showQuizCenterPlace}
          fnQuizDisplay={() =>
            dispatchUpdate(
              { target: { value: !showQuizCenterPlace } },
              "setShowQuizCenterPlace"
            )
          }
          visitantesDisplay={showVisitantesCenterPlace}
          fnVisitantesDisplay={() =>
            dispatchUpdate(
              { target: { value: !showVisitantesCenterPlace } },
              "setShowVisitantesCenterPlace"
            )
          }
          timerDisplay={showTimerCenterPlace}
          fnTimerDisplay={() =>
            dispatchUpdate(
              { target: { value: !showTimerCenterPlace } },
              "setShowTimerCenterPlace"
            )
          }
        />
      </Modal>
    </>
  );
};
