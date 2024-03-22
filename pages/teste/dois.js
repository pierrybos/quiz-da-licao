import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../store/counterSlice";

export default () => {
  const dispatch = useDispatch();
  const initial = useSelector((state) => state.counter.count);
  return (
    <>
      <p>Valor inicial é {initial}</p>
      <button onClick={() => dispatch(increment())}>Incrementar</button>
    </>
  );
};
