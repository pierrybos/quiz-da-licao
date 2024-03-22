// actions.js
import { ActionTypes } from "./ActionTypes";

export const setUrlVisitas = function (url) {
  console.log("inside ? setUrlVisitas ", url);
  return {
    type: ActionTypes.SET_URL_VISITAS,
    payload: url,
  };
};

// Ação para definir se a tela está em modo de tela cheia
export const setIsFullScreen = (isFullScreen) => ({
  type: ActionTypes.SET_IS_FULL_SCREEN,
  payload: isFullScreen,
});

// Ação para definir se o conteúdo deve ser alinhado ao centro
export const setAlignToCenter = (alignToCenter) => ({
  type: ActionTypes.SET_ALIGN_TO_CENTER,
  payload: alignToCenter,
});

// Ação para definir se o áudio está habilitado
export const setAudioEnable = (audioEnable) => ({
  type: ActionTypes.SET_AUDIO_ENABLE,
  payload: audioEnable,
});

// Ação para definir se o som de 1 minuto deve ser reproduzido
export const setPlay1Min = (play1Min) => ({
  type: ActionTypes.SET_PLAY_1_MIN,
  payload: play1Min,
});

// Ação para definir se o som de 5 minutos deve ser reproduzido
export const setPlay5Min = (play5Min) => ({
  type: ActionTypes.SET_PLAY_5_MIN,
  payload: play5Min,
});

// Ação para definir se o arquivo de 1 minuto deve ser reproduzido
export const setFile1Min = (file1Min) => ({
  type: ActionTypes.SET_FILE_1_MIN,
  payload: file1Min,
});

// Ação para definir se o arquivo de 5 minutos deve ser reproduzido
export const setFile5Min = (file5Min) => ({
  type: ActionTypes.SET_FILE_5_MIN,
  payload: file5Min,
});

// Ação para definir a URL do quiz
export const setUrlQuiz = (url) => ({
  type: ActionTypes.SET_URL_QUIZ,
  payload: url,
});

// Ação para definir se o relógio deve ser exibido
export const setShowClock = (show) => ({
  type: ActionTypes.SET_SHOW_CLOCK,
  payload: show,
});

// Ação para definir se o QR Code deve ser exibido
export const setShowQrCode = (show) => ({
  type: ActionTypes.SET_SHOW_QR_CODE,
  payload: show,
});

// Ação para definir se as visitas devem ser exibidas
export const setShowVisitas = (show) => ({
  type: ActionTypes.SET_SHOW_VISITAS,
  payload: show,
});
