"use client";

import React, { useState } from "react";
import { useAppSelector } from "@/store";
import { useDispatch } from "react-redux";
import { addOne, substractOne } from "@/store/counter/counterSlice";
interface Props {
  value?: number;
}
const CartCounter = ({ value = 0 }: Props) => {
  // const [counter, setCounter] = useState(value);
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button
          onClick={() => dispatch(substractOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          - 1
        </button>
        <button
          onClick={() => dispatch(addOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          + 1
        </button>
      </div>
    </>
  );
};

export default CartCounter;
