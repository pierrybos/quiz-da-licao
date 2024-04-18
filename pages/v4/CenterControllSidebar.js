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
          fnDisplay={(e) => dispatchUpdate(e, "setShowCenterPlace")}
          quiz={showQuizCenterPlace}
          fnQuiz={(e) => dispatchUpdate(e, "setShowQuizCenterPlace")}
          visitantes={showVisitantesCenterPlace}
          fnVisitantes={(e) =>
            dispatchUpdate(e, "setShowVisitantesCenterPlace")
          }
          timer={showTimerCenterPlace}
          fnTimer={(e) => dispatchUpdate(e, "setShowTimerCenterPlace")}
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
