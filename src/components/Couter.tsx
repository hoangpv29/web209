import { CouterContext } from "@/context/Counter";
import { useContext } from "react";

// import React from 'react'
type Props = {};
const Couter = (props: Props) => {
  const { state, dishpatch } = useContext(CouterContext);
  console.log(state);

  return (
    <div>
      Counter {state.count}
      <button onClick={() => dishpatch({ type: "INCREMENT" })}>INCREMENT</button>
      <button onClick={() => dishpatch({ type: "DECREMENT" })}>DECREMENT</button>
      <button onClick={() => dishpatch({ type: "INCREASE", payload: 10 })}>
        DECREMENT
      </button>
    </div>
  );
};

export default Couter;
