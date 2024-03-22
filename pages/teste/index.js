import { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, incrementOuter } from "../../store/counterSlice";

export default () => {
  const dispatch = useDispatch();
  const initial = useSelector((state) => state.counter.count);
  const final = useSelector((state) => state.counter.outer);

  const methods = {
    increment: increment,
    incrementOuter: incrementOuter,
  };

  const channel = new BroadcastChannel("semanaSanta");

  const startTimer = useCallback((delay) => {
    setTimeout(() => {
      setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }, delay);
  }, []);

  useEffect(() => {
    channel.onmessage = (ev) => {
      console.log(ev.data);
      if (methods[ev.data]) {
        dispatch(methods[ev.data]());
      } else {
        console.log("Método não encontrado:", ev.data);
      }
    };

    return () => {
      channel.close();
    };
  }, [channel, startTimer]);

  return (
    <>
      <p>Valor inicial é {initial}</p>
      <p>Valor final é {final}</p>
      <button onClick={() => channel.postMessage("increment")}>
        Incrementar
      </button>
      <button onClick={() => channel.postMessage("incrementOuter")}>
        Incrementar Final
      </button>
    </>
  );
};
