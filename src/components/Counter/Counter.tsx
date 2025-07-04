import {
  decrement,
  increment,
  incrementbyamount,
  decrementbyamount,
} from "../../features/counter/counterSlice";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col gap-4 items-center mt-4">
      <span>Counter : {count}</span>
      <div className="flex gap-4 ">
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementbyamount(10))}
        >
          Add 10
        </button>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrementbyamount(10))}
        >
          Decrement 10
        </button>
      </div>
    </div>
  );
}
