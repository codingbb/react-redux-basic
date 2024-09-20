// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, selectCount } from "../counterSlice";

const Counter = ({ changeCount }) => {
  // 이제 setNumber를 이용해서 초기값을 바꿀 필요가 없다.
  // const [number, setNumber] = useState(0);
  // changeCount(number);

  const number = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter</h2>
      <button
        type="button"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <input type="text" readOnly value={number}></input>
      <button
        type="button"
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
    </div>
  );
};
export default Counter;
