import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { Edit } from "@mui/icons-material";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import ToogleQRElement from "./ToogleQRElement";
import ControleQuiz from "./ControleQuiz";

import {
  setQuizTextSize,
  setQuizImageSize,
  setQuizQrcodeSize,
  setQuizColor,
  setQuizTextColor,
  setQuizTitle,
  setQuizSubtitle,
  setQuizLink,
  setQuizShowQrcode,
  setQuizShowImage,
  setQuizShowText,
} from "../../store/qrcodeSlice";

export default () => {
  const dispatch = useDispatch();
  const channel = new BroadcastChannel("semanaSanta");

  const [editComponent, setEditComponent] = useState(false);
  const handleOpen = () => setEditComponent(true);
  const handleClose = () => setEditComponent(false);
  const quizTitle = useSelector((state) => state.qrcode.quizTitle);
  const quizSubtitle = useSelector((state) => state.qrcode.quizSubtitle);
  const quizTextSize = useSelector((state) => state.qrcode.quizTextSize);
  const quizImageSize = useSelector((state) => state.qrcode.quizImageSize);
  const quizQrcodeSize = useSelector((state) => state.qrcode.quizQrcodeSize);
  const quizQrcodeColor = useSelector((state) => state.qrcode.quizQrcodeColor);
  const quizTextColor = useSelector((state) => state.qrcode.quizTextColor);
  const quizLink = useSelector((state) => state.qrcode.quizLink);

  const methods = {
    setQuizTitle: {
      fn: setQuizTitle,
    },
    setQuizSubtitle: {
      fn: setQuizSubtitle,
    },
    setQuizTextSize: {
      fn: setQuizTextSize,
    },
    setQuizImageSize: {
      fn: setQuizImageSize,
    },
    setQuizQrcodeSize: {
      fn: setQuizQrcodeSize,
    },
    setQuizColor: {
      fn: setQuizColor,
    },
    setQuizTextColor: {
      fn: setQuizTextColor,
    },
    setQuizLink: {
      fn: setQuizLink,
    },
    setQuizShowQrcode: {
      fn: setQuizShowQrcode,
    },
    setQuizShowImage: {
      fn: setQuizShowImage,
    },
    setQuizShowText: {
      fn: setQuizShowText,
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
              .sideBar {
                position: absolute;
                height: min-100px; /* Ajuste conforme necessário */
                width: min-100px; /* Ajuste conforme necessário */
                padding: 30px; 
              }
              .quizControll {
                background: orange;
                top: 30%;
                left: 20%;
              }
              `}
          </style>
        </Head>
      </div>
      <div className="sideBar quizControll">
        <IconButton
          className="handle left"
          aria-label="Edit"
          onClick={handleOpen}
        >
          <Edit />
        </IconButton>
        <ToogleQRElement
          fnShowText={(e) => dispatchUpdate(e, "setQuizShowText")}
          fnShowImage={(e) => dispatchUpdate(e, "setQuizShowImage")}
          fnShowQrcode={(e) => dispatchUpdate(e, "setQuizShowQrcode")}
        />
      </div>
      <Modal
        open={editComponent}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ControleQuiz
          title={quizTitle}
          subtitle={quizSubtitle}
          textSize={quizTextSize}
          imageSize={quizImageSize}
          qrcodeSize={quizQrcodeSize}
          qrcodeColor={quizQrcodeColor}
          textColor={quizTextColor}
          link={quizLink}
          fnTextSize={(e) => dispatchUpdate(e, "setQuizTextSize")}
          fnImagemSize={(e) => dispatchUpdate(e, "setQuizImageSize")}
          fnQrcodeSize={(e) => dispatchUpdate(e, "setQuizQrcodeSize")}
          fnQrcodeColor={(e) => dispatchUpdate(e, "setQuizColor")}
          fnTextoColor={(e) => dispatchUpdate(e, "setQuizTextColor")}
          fnTitle={(e) => dispatchUpdate(e, "setQuizTitle")}
          fnSubtitle={(e) => dispatchUpdate(e, "setQuizSubtitle")}
          fnLink={(e) => dispatchUpdate(e, "setQuizLink")}
          fnShowText={(e) => dispatchUpdate(e, "setQuizShowText")}
          fnShowImage={(e) => dispatchUpdate(e, "setQuizShowImage")}
          fnShowQrcode={(e) => dispatchUpdate(e, "setQuizShowQrcode")}
        />
      </Modal>
    </>
  );
};
