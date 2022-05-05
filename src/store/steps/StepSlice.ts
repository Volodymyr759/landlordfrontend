import { createSlice } from "@reduxjs/toolkit";
import { StepState } from "./types";

export const initialState: StepState = {
    stepNumber: 1,
}

export const stepSlice = createSlice({
    name: 'step',
    initialState,
    reducers: {
        increment(state) {
            state.stepNumber += 1;
        },
        decrement(state) {
            state.stepNumber -= 1;
        }
    }
})

export default stepSlice.reducer;