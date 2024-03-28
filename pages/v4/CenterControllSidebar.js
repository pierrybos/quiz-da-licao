import Head from "next/head";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useDispatch, useSelector } from "react-redux";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionGroup from "@mui/joy/AccordionGroup";
import AccordionSummary from "@mui/joy/AccordionSummary";

import {
  TextField,
  Button,
  Switch,
  Toolbar,
  AppBar,
  Container,
  Grid,
  FormControl,
  FormControlLabel,
  InputLabel,
  InputAdornment,
  Input,
  Stack,
  ToggleButtonGroup,
  ToggleButton,
  Slider,
} from "@mui/material";
import {
  Edit,
  Visibility,
  VisibilityOff,
  VisibilityOffRounded,
} from "@mui/icons-material";
import { useEffect, useState } from "react";

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
  const dispatch = useDispatch();

  const [editComponent, setEditComponent] = useState(false);
  const handleOpen = () => setEditComponent(true);
  const handleClose = () => setEditComponent(false);
  const [hasQuiz, setHasQuiz] = useState(false);
  const [hasVisitantes, setHasVisitantes] = useState(false);
  const [isDisplay, setIsDisplay] = useState(false);
  const showQuizCenterPlace = useSelector(
    (state) => state.booleans.showQuizCenterPlace
  );
  const leftSideBarWidth = useSelector(
    (state) => state.stylization.leftSideBarWidth
  );
  const fontSizeTimerPlace = useSelector(
    (state) => state.stylization.fontSizeTimerPlace
  );
  const leftSideBarPosition = useSelector(
    (state) => state.stylization.leftSideBarPosition
  );
  const leftSideBarTopPosition = useSelector(
    (state) => state.stylization.leftSideBarTopPosition
  );
  const urlQuiz = useSelector((state) => state.url.urlQuiz);

  const showVisitantesCenterPlace = useSelector(
    (state) => state.booleans.showVisitantesCenterPlace
  );
  const showTimerCenterPlace = useSelector(
    (state) => state.booleans.showTimerCenterPlace
  );
  const showCenterPlace = useSelector((state) => {
    return state.booleans.showCenterPlace;
  });
  const subTitleUrlQuiz = useSelector((state) => state.texto.subTitleUrlQuiz);

  const [formats, setFormats] = useState(() => []);
  const titleUrlQuiz = useSelector((state) => state.texto.titleUrlQuiz);

  const handleFormat = (event, newFormats) => {
    dispatch(setShowQuizCenterPlace(newFormats.indexOf("quiz") !== -1));
    dispatch(
      setShowVisitantesCenterPlace(newFormats.indexOf("visitantes") !== -1)
    );
    dispatch(setShowCenterPlace(newFormats.indexOf("display") !== -1));
    dispatch(setShowTimerCenterPlace(newFormats.indexOf("timer") !== -1));
    setFormats(newFormats);
  };

  useEffect(() => {
    let arrOptions = [];
    if (showQuizCenterPlace) {
      arrOptions.push("quiz");
    }
    if (showVisitantesCenterPlace) {
      arrOptions.push("visitantes");
    }
    if (showCenterPlace) {
      arrOptions.push("display");
    }
    if (showTimerCenterPlace) {
      arrOptions.push("timer");
    }
    setFormats(arrOptions);
  }, [
    showQuizCenterPlace,
    showVisitantesCenterPlace,
    showCenterPlace,
    showTimerCenterPlace,
  ]);

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
        <pre>variavel passada aqui: {JSON.stringify(showCenterPlace)}</pre>
      </div>
      <Modal
        open={editComponent}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <label>Tamanho da área esquerda</label>
              <Slider
                value={leftSideBarWidth}
                onChange={(e) => dispatchUpdate(e, "setLeftSideBarWidth")}
                min={1}
                max={100}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <label>Tamanho do texto do timer</label>
              <Slider
                value={fontSizeTimerPlace}
                onChange={(e) => dispatchUpdate(e, "setFontSizeTimerPlace")}
                min={0.1}
                step={0.1}
                max={20}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <label>Posição da área à esquerda</label>
              <Slider
                value={leftSideBarPosition}
                onChange={(e) => dispatchUpdate(e, "setLeftSideBarPosition")}
                min={0}
                max={100}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <label>Posição da área ao topo</label>
              <Slider
                value={leftSideBarTopPosition}
                onChange={(e) => dispatchUpdate(e, "setLeftSideBarTopPosition")}
                min={0}
                max={100}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Link do Quiz"
                variant="outlined"
                value={urlQuiz}
                onChange={(e) => dispatchUpdate(e, "setUrlQuiz")}
              />
              <TextField
                fullWidth
                label="Titulo do Quiz"
                variant="outlined"
                value={titleUrlQuiz}
                onChange={(e) => dispatchUpdate(e, "setTitleUrlQuiz")}
              />
              <TextField
                fullWidth
                label="Subtítulo do Quiz"
                variant="outlined"
                value={subTitleUrlQuiz}
                onChange={(e) => dispatchUpdate(e, "setSubTitleUrlQuiz")}
              />
            </Grid>
          </Grid>
          <AccordionGroup size="lg" variant="soft">
            <Accordion>
              <AccordionSummary>Quiz</AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <label>Tamanho da área esquerda</label>
                    <Slider
                      value={leftSideBarWidth}
                      onChange={(e) => dispatchUpdate(e, "setLeftSideBarWidth")}
                      min={1}
                      max={100}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <label>Tamanho do texto do timer</label>
                    <Slider
                      value={fontSizeTimerPlace}
                      onChange={(e) =>
                        dispatchUpdate(e, "setFontSizeTimerPlace")
                      }
                      min={0.1}
                      step={0.1}
                      max={20}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <label>Posição da área à esquerda</label>
                    <Slider
                      value={leftSideBarPosition}
                      onChange={(e) =>
                        dispatchUpdate(e, "setLeftSideBarPosition")
                      }
                      min={0}
                      max={100}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <label>Posição da área ao topo</label>
                    <Slider
                      value={leftSideBarTopPosition}
                      onChange={(e) =>
                        dispatchUpdate(e, "setLeftSideBarTopPosition")
                      }
                      min={0}
                      max={100}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Link do Quiz"
                      variant="outlined"
                      value={urlQuiz}
                      onChange={(e) => dispatchUpdate(e, "setUrlQuiz")}
                    />
                    <TextField
                      fullWidth
                      label="Titulo do Quiz"
                      variant="outlined"
                      value={titleUrlQuiz}
                      onChange={(e) => dispatchUpdate(e, "setTitleUrlQuiz")}
                    />
                    <TextField
                      fullWidth
                      label="Subtítulo do Quiz"
                      variant="outlined"
                      value={subTitleUrlQuiz}
                      onChange={(e) => dispatchUpdate(e, "setSubTitleUrlQuiz")}
                    />
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary>Visitantes</AccordionSummary>
              <AccordionDetails></AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary>Timer</AccordionSummary>
              <AccordionDetails></AccordionDetails>
            </Accordion>
          </AccordionGroup>
        </Box>
      </Modal>
    </>
  );
};
