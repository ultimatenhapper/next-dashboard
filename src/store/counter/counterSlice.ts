import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
  isReady: boolean;
}

// Define the initial state using that type
const initialState: CounterState = {
  count: 5,
  isReady: false,
};

export const counterSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    initCounterState(state, action: PayloadAction<number>) {
      if (state.isReady) return;
      state.count = action.payload;
      state.isReady = true;
    },
    addOne: (state) => {
      state.count += 1;
    },
    substractOne: (state) => {
      if (state.count === 0) return;
      state.count -= 1;
    },
    resetCounter: (state, action: PayloadAction<number>) => {
      if (action.payload < 0) action.payload = 0;
      state.count = action.payload;
    },
  },
});

export const { addOne, substractOne, resetCounter } = counterSlice.actions;

export default counterSlice.reducer;
