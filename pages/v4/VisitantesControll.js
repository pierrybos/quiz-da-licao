import Head from "next/head";
import { useSelector } from "react-redux";
import { Edit } from "@mui/icons-material";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import ToogleQRElement from "./ToogleQRElement";
import ControleVisitante from "./ControleVisitante";
import { useAppState } from "./stateService";

export default () => {
  const { dispatchUpdate } = useAppState(); // Use o hook personalizado

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

  const showImage = useSelector((state) => state.qrcode.visitantesShowImage);
  const showQrcode = useSelector((state) => state.qrcode.visitantesShowQrcode);
  const showText = useSelector((state) => state.qrcode.visitantesShowText);

  return (
    <>
      <div></div>
      <div className="visitantesControll">
        <ToogleQRElement
          fnShowText={() =>
            dispatchUpdate(
              { target: { value: !showText } },
              "setVisitantesShowText"
            )
          }
          fnShowImage={() =>
            dispatchUpdate(
              { target: { value: !showImage } },
              "setVisitantesShowImage"
            )
          }
          fnShowQrcode={() =>
            dispatchUpdate(
              { target: { value: !showQrcode } },
              "setVisitantesShowQrcode"
            )
          }
          modalFn={handleOpen}
          showImage={showImage}
          showQrcode={showQrcode}
          showText={showText}
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
          fnShowText={() =>
            dispatchUpdate(
              { target: { value: !showText } },
              "setVisitantesShowText"
            )
          }
          fnShowImage={() =>
            dispatchUpdate(
              { target: { value: !showImage } },
              "setVisitantesShowImage"
            )
          }
          fnShowQrcode={() =>
            dispatchUpdate(
              { target: { value: !showQrcode } },
              "setVisitantesShowQrcode"
            )
          }
          showImage={showImage}
          showQrcode={showQrcode}
          showText={showText}
        />
      </Modal>
    </>
  );
};
