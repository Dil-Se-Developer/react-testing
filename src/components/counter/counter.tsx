import { useState } from "react";
import { act } from "react-dom/test-utils";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() =>
          act(() => {
            setCount(count + 1);
          })
        }
      >
        Increment
      </button>
      <input
        type="number"
        name="amount"
        value={amount}
        onChange={(e) =>
          act(() => {
            setAmount(parseInt(e.target.value));
          })
        }
      />
      <button
        onClick={() =>
          act(() => {
            setCount(amount);
          })
        }
      >
        Set
      </button>
    </div>
  );
};
