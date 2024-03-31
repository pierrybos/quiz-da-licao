import Qrplace from "./Qrplace";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

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

import { useEffect } from "react";
import logoImage from "../../public/v2/src/images/logo-visitas.png";

export default ({ show }) => {
  const dispatch = useDispatch();
  const channel = new BroadcastChannel("semanaSanta");
  const title = useSelector((state) => state.qrcode.visitantesTitle);
  const subtitle = useSelector((state) => state.qrcode.visitantesSubtitle);
  const link = useSelector((state) => state.qrcode.visitantesLink);

  const showImage = useSelector((state) => state.qrcode.visitantesShowImage);
  const showText = useSelector((state) => state.qrcode.visitantesShowText);
  const showQr = useSelector((state) => state.qrcode.visitantesShowQrcode);
  const textSize = useSelector((state) => state.qrcode.visitantesTextSize);
  const imageSize = useSelector((state) => state.qrcode.visitantesImageSize);
  const qrcodeSize = useSelector((state) => state.qrcode.visitantesQrcodeSize);
  const colorDark = useSelector((state) => state.qrcode.visitantesQrcodeColor);
  const textColor = useSelector((state) => state.qrcode.visitantesTextColor);
  const qrcodeColor = useSelector(
    (state) => state.qrcode.visitantesQrcodeColor
  );

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
