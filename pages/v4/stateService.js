import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  setQuizQrSize,
  setVisitanteColor,
  setVisitanteQrSize,
  setVisitanteTextSize,
  setFontSizeTimerPlace,
  setLeftSideBarWidth,
  setLeftSideBarPosition,
  setLeftSideBarTopPosition,
  setVisitanteLogoSize,
  setQuizLogoSize,
  setCenterSideBarWidth,
  setCenterSideBarMarginTop,
  setCenterBackgroundColor,
  setCenterSideBarLeft,
  setLeftBackgroundColor,
  setLeftSideBarMarginTop,
  setLeftSideBarLeft,
  setRightBackgroundColor,
  setRightSideBarMarginTop,
  setRightSideBarRight,
  setRightSideBarWidth,
  setBackgroundImage,
} from "../../store/stylizationSlice";
import {
  setShowLogoQuiz,
  setShowBothQr,
  setShowLogoVisitantes,
  setShowTextoQuiz,
  setShowQRCodeQuiz,
  setShowQRCodeVisitantes,
  setShowTextoVisitantes,
  setDisplayPlaceQuiz,
  setDisplayPlaceVisitantes,
  setHidePlaceQuiz,
  setHidePlaceVisitantes,
  setShowFullScreen,
  displayShowFullScreen,
  hideShowFullScreen,
  setShowQuizCenterPlace,
  setShowVisitantesCenterPlace,
  setShowTimerCenterPlace,
  setShowCenterPlace,
  setShowQuizLeftPlace,
  setShowLeftPlace,
  setShowTimerLeftPlace,
  setShowVisitantesLeftPlace,
  setShowQuizRightPlace,
  setShowRightPlace,
  setShowTimerRightPlace,
  setShowVisitantesRightPlace,
} from "../../store/booleansSlice";

import {
  setTitleUrlQuiz,
  setTitleUrlVisitas,
  setTitleCounterTimeRemainA,
  setTitleCounterTimeRemainB,
  setTitleCounterTimeOffA,
  setTitleCounterTimeOffB,
  setSubTitleUrlQuiz,
  setSubTitleUrlVisitas,
} from "../../store/textoSlice";

import {
  setQuizTitle,
  setQuizSubtitle,
  setQuizTextSize,
  setQuizImageSize,
  setQuizQrcodeSize,
  setQuizColor,
  setQuizTextColor,
  setQuizLink,
  setVisitantesTitle,
  setVisitantesSubtitle,
  setVisitantesTextSize,
  setVisitantesImageSize,
  setVisitantesQrcodeSize,
  setVisitantesColor,
  setVisitantesTextColor,
  setVisitantesLink,
  setQuizShowText,
  setQuizShowQrcode,
  setQuizShowImage,
  setVisitantesShowText,
  setVisitantesShowQrcode,
  setVisitantesShowImage,
} from "../../store/qrcodeSlice";

import {
  setLimitTime,
  setShowTimer,
  setAudioEnable,
  setTimerTextSize,
  setTimerTextColor,
  setTimerTitle,
  setTimerSubtitle,
  setTimerTitleRemain,
  setTimerSubtitleRemain,
} from "../../store/timerSlice";

export const useAppState = () => {
  const dispatch = useDispatch();
  const channel = new BroadcastChannel("semanaSanta");

  const methods = {
    setQuizQrSize: {
      fn: setQuizQrSize,
    },
    setLimitTime: { fn: setLimitTime },
    setVisitanteColor: {
      fn: setVisitanteColor,
    },
    setTimerTitle: { fn: setTimerTitle },
    setTimerSubtitle: { fn: setTimerSubtitle },
    setTimerTitleRemain: { fn: setTimerTitleRemain },
    setTimerSubtitleRemain: { fn: setTimerSubtitleRemain },
    setTimerTextColor: {
      fn: setTimerTextColor,
    },
    setVisitanteQrSize: {
      fn: setVisitanteQrSize,
    },
    setBackgroundImage: {
      fn: setBackgroundImage,
    },
    setTimerTextSize: {
      fn: setTimerTextSize,
    },
    setVisitanteTextSize: {
      fn: setVisitanteTextSize,
    },
    setFontSizeTimerPlace: {
      fn: setFontSizeTimerPlace,
    },
    setLeftSideBarWidth: {
      fn: setLeftSideBarWidth,
    },
    setLeftSideBarPosition: {
      fn: setLeftSideBarPosition,
    },
    setLeftSideBarTopPosition: {
      fn: setLeftSideBarTopPosition,
    },
    setVisitanteLogoSize: {
      fn: setVisitanteLogoSize,
    },
    setQuizLogoSize: {
      fn: setQuizLogoSize,
    },
    setCenterSideBarWidth: {
      fn: setCenterSideBarWidth,
    },
    setCenterSideBarMarginTop: {
      fn: setCenterSideBarMarginTop,
    },
    setCenterBackgroundColor: {
      fn: setCenterBackgroundColor,
    },
    setCenterSideBarLeft: {
      fn: setCenterSideBarLeft,
    },
    setLeftBackgroundColor: {
      fn: setLeftBackgroundColor,
    },
    setLeftSideBarMarginTop: {
      fn: setLeftSideBarMarginTop,
    },
    setLeftSideBarLeft: {
      fn: setLeftSideBarLeft,
    },
    setRightBackgroundColor: {
      fn: setRightBackgroundColor,
    },
    setRightSideBarMarginTop: {
      fn: setRightSideBarMarginTop,
    },
    setRightSideBarRight: {
      fn: setRightSideBarRight,
    },
    setRightSideBarWidth: {
      fn: setRightSideBarWidth,
    },
    setShowTimer: {
      fn: setShowTimer,
    },
    setShowLogoQuiz: {
      fn: setShowLogoQuiz,
    },
    setShowBothQr: {
      fn: setShowBothQr,
    },
    setShowLogoVisitantes: {
      fn: setShowLogoVisitantes,
    },
    setShowTextoQuiz: {
      fn: setShowTextoQuiz,
    },
    setAudioEnable: {
      fn: setAudioEnable,
    },
    setShowQRCodeQuiz: {
      fn: setShowQRCodeQuiz,
    },
    setShowQRCodeVisitantes: {
      fn: setShowQRCodeVisitantes,
    },
    setShowTextoVisitantes: {
      fn: setShowTextoVisitantes,
    },
    setDisplayPlaceQuiz: {
      fn: setDisplayPlaceQuiz,
    },
    setDisplayPlaceVisitantes: {
      fn: setDisplayPlaceVisitantes,
    },
    setHidePlaceQuiz: {
      fn: setHidePlaceQuiz,
    },
    setHidePlaceVisitantes: {
      fn: setHidePlaceVisitantes,
    },
    setShowFullScreen: {
      fn: setShowFullScreen,
    },
    displayShowFullScreen: {
      fn: displayShowFullScreen,
    },
    hideShowFullScreen: {
      fn: hideShowFullScreen,
    },
    setShowQuizCenterPlace: {
      fn: setShowQuizCenterPlace,
    },
    setShowVisitantesCenterPlace: {
      fn: setShowVisitantesCenterPlace,
    },
    setShowTimerCenterPlace: {
      fn: setShowTimerCenterPlace,
    },
    setShowCenterPlace: {
      fn: setShowCenterPlace,
    },
    setShowQuizLeftPlace: {
      fn: setShowQuizLeftPlace,
    },
    setShowLeftPlace: {
      fn: setShowLeftPlace,
    },
    setShowTimerLeftPlace: {
      fn: setShowTimerLeftPlace,
    },
    setShowVisitantesLeftPlace: {
      fn: setShowVisitantesLeftPlace,
    },
    setShowQuizRightPlace: {
      fn: setShowQuizRightPlace,
    },
    setShowRightPlace: {
      fn: setShowRightPlace,
    },
    setShowTimerRightPlace: {
      fn: setShowTimerRightPlace,
    },
    setShowVisitantesRightPlace: {
      fn: setShowVisitantesRightPlace,
    },
    setTitleUrlQuiz: {
      fn: setTitleUrlQuiz,
    },
    setTitleUrlVisitas: {
      fn: setTitleUrlVisitas,
    },
    setTitleCounterTimeRemainA: {
      fn: setTitleCounterTimeRemainA,
    },
    setTitleCounterTimeRemainB: {
      fn: setTitleCounterTimeRemainB,
    },
    setTitleCounterTimeOffA: {
      fn: setTitleCounterTimeOffA,
    },
    setTitleCounterTimeOffB: {
      fn: setTitleCounterTimeOffB,
    },
    setSubTitleUrlQuiz: {
      fn: setSubTitleUrlQuiz,
    },
    setSubTitleUrlVisitas: {
      fn: setSubTitleUrlVisitas,
    },
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
    setQuizShowText: {
      fn: setQuizShowText,
    },
    setQuizShowQrcode: {
      fn: setQuizShowQrcode,
    },
    setQuizShowImage: {
      fn: setQuizShowImage,
    },
    setVisitantesShowText: {
      fn: setVisitantesShowText,
    },
    setVisitantesShowQrcode: {
      fn: setVisitantesShowQrcode,
    },
    setVisitantesShowImage: {
      fn: setVisitantesShowImage,
    },
  };

  useEffect(() => {
    channel.onmessage = (ev) => {
      if (methods[ev.data.id]) {
        dispatch(methods[ev.data.id].fn(ev.data.content));
      } else {
        console.log("Método não encontrado:", ev.data);
      }
    };

    return () => {
      channel.close();
    };
  }, [channel]);

  const dispatchUpdate = (ev, methodName) => {
    dispatch(methods[methodName].fn(ev.target.value));
    const message = {
      id: methodName,
      content: ev.target.value,
    };
    channel.postMessage(message);
  };

  return {
    dispatchUpdate,
  };
};
