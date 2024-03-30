import Qrplace from "./Qrplace";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

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

import { useEffect } from "react";
import logoImage from "../../public/v2/src/images/logo.png";

export default ({ show }) => {
  const dispatch = useDispatch();
  const channel = new BroadcastChannel("semanaSanta");
  const title = useSelector((state) => state.qrcode.quizTitle);
  const subtitle = useSelector((state) => state.qrcode.quizSubtitle);
  const link = useSelector((state) => state.qrcode.quizLink);

  const showImage = useSelector((state) => state.qrcode.quizShowImage);
  const showText = useSelector((state) => state.qrcode.quizShowText);
  const showQr = useSelector((state) => state.qrcode.quizShowQrcode);
  const textSize = useSelector((state) => state.qrcode.quizTextSize);
  const imageSize = useSelector((state) => state.qrcode.quizImageSize);
  const qrcodeSize = useSelector((state) => state.qrcode.quizQrcodeSize);
  const colorDark = useSelector((state) => state.qrcode.quizQrcodeColor);
  const textColor = useSelector((state) => state.qrcode.quizTextColor);
  const qrcodeColor = useSelector((state) => state.qrcode.quizQrcodeColor);

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

  useEffect(() => {
    channel.onmessage = (ev) => {
      if (methods[ev.data.id]) {
        if (methods[ev.data.id].noredux == true) {
          methods[ev.data.id].fn(ev.data.content);
        } else {
          dispatch(methods[ev.data.id].fn(ev.data.content));
        }
      } else {
        console.log("Método não encontrado:", ev.data);
      }
    };

    return () => {
      channel.close();
    };
  }, [channel]);
  return (
    <Qrplace
      show={show}
      showText={showText}
      showImage={showImage}
      showQr={showQr}
      title={title}
      subtitle={subtitle}
      link={link}
      textSize={textSize}
      img={logoImage}
      imageSize={imageSize}
      colorDark={colorDark}
      qrcodeSize={qrcodeSize}
      textColor={textColor}
      qrcodeColor={qrcodeColor}
    />
  );
};
