import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { Edit } from "@mui/icons-material";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import ToogleQRElement from "./ToogleQRElement";
import ControleVisitante from "./ControleVisitante";

import {
  setVisitantesTextSize,
  setVisitantesImageSize,
  setVisitantesQrcodeSize,
  setVisitantesColor,
  setVisitantesTextColor,
  setVisitantesTitle,
  setVisitantesSubtitle,
  setVisitantesLink,
  setVisitantesShowQrcode,
  setVisitantesShowImage,
  setVisitantesShowText,
} from "../../store/qrcodeSlice";

export default () => {
  const dispatch = useDispatch();
  const channel = new BroadcastChannel("semanaSanta");

  const [editComponent, setEditComponent] = useState(false);
  const handleOpen = () => setEditComponent(true);
  const handleClose = () => setEditComponent(false);
  const visitantesTitle = useSelector((state) => state.qrcode.visitantesTitle);
  const visitantesSubtitle = useSelector(
    (state) => state.qrcode.visitantesSubtitle
  );
  const visitantesTextSize = useSelector(
    (state) => state.qrcode.visitantesTextSize
  );
  const visitantesImageSize = useSelector(
    (state) => state.qrcode.visitantesImageSize
  );
  const visitantesQrcodeSize = useSelector(
    (state) => state.qrcode.visitantesQrcodeSize
  );
  const visitantesQrcodeColor = useSelector(
    (state) => state.qrcode.visitantesQrcodeColor
  );
  const visitantesTextColor = useSelector(
    (state) => state.qrcode.visitantesTextColor
  );
  const visitantesLink = useSelector((state) => state.qrcode.visitantesLink);

  const methods = {
    setVisitantesTitle: {
      fn: setVisitantesTitle,
    },
    setVisitantesSubtitle: {
      fn: setVisitantesSubtitle,
    },
    setVisitantesTextSize: {
      fn: setVisitantesTextSize,
    },
    setVisitantesImageSize: {
      fn: setVisitantesImageSize,
    },
    setVisitantesQrcodeSize: {
      fn: setVisitantesQrcodeSize,
    },
    setVisitantesColor: {
      fn: setVisitantesColor,
    },
    setVisitantesTextColor: {
      fn: setVisitantesTextColor,
    },
    setVisitantesLink: {
      fn: setVisitantesLink,
    },
    setVisitantesShowQrcode: {
      fn: setVisitantesShowQrcode,
    },
    setVisitantesShowImage: {
      fn: setVisitantesShowImage,
    },
    setVisitantesShowText: {
      fn: setVisitantesShowText,
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
              .visitantesControll {
                background: orange;
                top: 30%;
                left: 80%;
              }
              `}
          </style>
        </Head>
      </div>
      <div className="sideBar visitantesControll">
        <IconButton
          className="handle left"
          aria-label="Edit"
          onClick={handleOpen}
        >
          <Edit />
        </IconButton>
        <ToogleQRElement
          fnShowText={(e) => dispatchUpdate(e, "setVisitantesShowText")}
          fnShowImage={(e) => dispatchUpdate(e, "setVisitantesShowImage")}
          fnShowQrcode={(e) => dispatchUpdate(e, "setVisitantesShowQrcode")}
        />
      </div>
      <Modal
        open={editComponent}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ControleVisitante
          title={visitantesTitle}
          subtitle={visitantesSubtitle}
          textSize={visitantesTextSize}
          imageSize={visitantesImageSize}
          qrcodeSize={visitantesQrcodeSize}
          qrcodeColor={visitantesQrcodeColor}
          textColor={visitantesTextColor}
          link={visitantesLink}
          fnTextSize={(e) => dispatchUpdate(e, "setVisitantesTextSize")}
          fnImagemSize={(e) => dispatchUpdate(e, "setVisitantesImageSize")}
          fnQrcodeSize={(e) => dispatchUpdate(e, "setVisitantesQrcodeSize")}
          fnQrcodeColor={(e) => dispatchUpdate(e, "setVisitantesColor")}
          fnTextColor={(e) => dispatchUpdate(e, "setVisitantesTextColor")}
          fnTitle={(e) => dispatchUpdate(e, "setVisitantesTitle")}
          fnSubtitle={(e) => dispatchUpdate(e, "setVisitantesSubtitle")}
          fnLink={(e) => dispatchUpdate(e, "setVisitantesLink")}
          fnShowText={(e) => dispatchUpdate(e, "setVisitantesShowText")}
          fnShowImage={(e) => dispatchUpdate(e, "setVisitantesShowImage")}
          fnShowQrcode={(e) => dispatchUpdate(e, "setVisitantesShowQrcode")}
        />
      </Modal>
    </>
  );
};
