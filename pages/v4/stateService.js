import { useDispatch } from "react-redux";
import { useEffect } from "react";
import * as stylizationSlice from "../../store/stylizationSlice";
import * as booleansSlice from "../../store/booleansSlice";
import * as textoSlice from "../../store/textoSlice";
import * as qrcodeSlice from "../../store/qrcodeSlice";
import * as timerSlice from "../../store/timerSlice";

export const useAppState = () => {
  const dispatch = useDispatch();
  const channel = new BroadcastChannel("semanaSanta");

  const modules = {
    stylizationSlice,
    booleansSlice,
    textoSlice,
    qrcodeSlice,
    timerSlice,
  };
  const methods = {};

  // Itera sobre cada módulo
  Object.values(modules).forEach((module) => {
    // Itera sobre cada exportação do módulo
    Object.entries(module).forEach(([key, value]) => {
      // Verifica se é uma função
      if (typeof value === "function") {
        // Adiciona a função ao objeto methods
        methods[key] = { fn: value };
      }
    });
  });

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

export default useAppState;
