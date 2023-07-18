import { useDispatch, useSelector} from "react-redux"

// import React from 'react'
type Props = {};
const Couter = (props: Props) => {
  const { count } = useSelector((state:any) => state);
  const dispatch = useDispatch();
  console.log(count);

  return (
    <div>
      Counter {count}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
      <button onClick={() => dispatch({ type: "INCREASE", payload: 10 })}>
        DECREMENT
      </button>
    </div>
  );
};

export default Couter;
