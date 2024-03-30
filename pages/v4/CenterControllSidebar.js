import Head from "next/head";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useDispatch, useSelector } from "react-redux";


import { Edit, Visibility, VisibilityOff, VisibilityOffRounded } from "@mui/icons-material";
import { useState } from "react";

import {
  setShowQuizCenterPlace,
  setShowVisitantesCenterPlace,
  setShowTimerCenterPlace,
  setShowCenterPlace,
} from "../../store/booleansSlice";

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
  const [formats, setFormats] = useState(() => ['bold', 'italic']);
  const dispatch = useDispatch();


  const [editComponent, setEditComponent] = useState(false);
  const handleOpen = () => setEditComponent(true);
  const handleClose = () => setEditComponent(false);
  const [hasQuiz, setHasQuiz] = useState(false);
  const [hasVisitantes, setHasVisitantes] = useState(false);
  const [isDisplay, setIsDisplay] = useState(false);
  const showQuizCenterPlace = useSelector((state) => state.booleans.showQuizCenterPlace);
  const showVisitantesCenterPlace = useSelector((state) => state.booleans.showVisitantesCenterPlace);
  const showTimerCenterPlace = useSelector((state) => state.booleans.showTimerCenterPlace);
  const showCenterPlace = useSelector((state) => { return state.booleans.showCenterPlace});

  
  
  const handleFormat = (
    event,
    newFormats
  ) => {

    dispatch(setShowQuizCenterPlace(newFormats.indexOf('quiz') !== -1));
    dispatch(setShowVisitantesCenterPlace(newFormats.indexOf('visitantes') !== -1));
    dispatch(setShowCenterPlace(newFormats.indexOf('display') !== -1));
    dispatch(setShowTimerCenterPlace(newFormats.indexOf('timer') !== -1));
    setFormats(newFormats);
  };

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
        <ToggleButtonGroup
      value={formats}
      onChange={handleFormat}
      aria-label="text formatting"
    >
      <ToggleButton value="Quiz" aria-label="Quiz">
        Quiz
      </ToggleButton>
      <ToggleButton value="Visitantes" aria-label="Visitantes">
        Visitantes
      </ToggleButton>
      <ToggleButton value="underlined" aria-label="Timer">
        Timer
      </ToggleButton>
      <ToggleButton value="display" aria-label="display">
        {showCenterPlace && <VisibilityIcon />}
        {!showCenterPlace && <VisibilityOffIcon />}
      </ToggleButton>
    </ToggleButtonGroup>
    <pre>variavel passada aqui: {JSON.stringify(showCenterPlace) }</pre>
      </div>
      <Modal
        open={editComponent}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            
          </Typography>
        </Box>
      </Modal>
    </>
  );
};
