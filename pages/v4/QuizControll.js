import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { Edit } from "@mui/icons-material";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import ControleQuiz from "./ControleQuiz";
import ToogleQRElement from "./ToogleQRElement";
import { useAppState } from "./stateService";

export default () => {
  const { dispatchUpdate } = useAppState(); // Use o hook personalizado

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
  const showImage = useSelector((state) => state.qrcode.quizShowImage);
  const showQrcode = useSelector((state) => state.qrcode.quizShowQrcode);
  const showText = useSelector((state) => state.qrcode.quizShowText);

  return (
    <>
      <div>
        <Head>
          <style></style>
        </Head>
      </div>
      <div>
        <ToogleQRElement
          fnShowText={() =>
            dispatchUpdate({ target: { value: !showText } }, "setQuizShowText")
          }
          fnShowImage={() =>
            dispatchUpdate(
              { target: { value: !showImage } },
              "setQuizShowImage"
            )
          }
          fnShowQrcode={() =>
            dispatchUpdate(
              { target: { value: !showQrcode } },
              "setQuizShowQrcode"
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
          fnTextColor={(e) => dispatchUpdate(e, "setQuizTextColor")}
          fnTitle={(e) => dispatchUpdate(e, "setQuizTitle")}
          fnSubtitle={(e) => dispatchUpdate(e, "setQuizSubtitle")}
          fnLink={(e) => dispatchUpdate(e, "setQuizLink")}
          fnShowText={() =>
            dispatchUpdate({ target: { value: showText } }, "setQuizShowText")
          }
          fnShowImage={() =>
            dispatchUpdate({ target: { value: showImage } }, "setQuizShowImage")
          }
          fnShowQrcode={() =>
            dispatchUpdate(
              { target: { value: showQrcode } },
              "setQuizShowQrcode"
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
