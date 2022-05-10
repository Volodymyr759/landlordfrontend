import { AppDispatch } from "../store";
import { stepSlice } from './StepSlice';

export const incrementStep = () => (dispatch: AppDispatch) => {
    dispatch(stepSlice.actions.increment());
}

export const decrementStep = () => (dispatch: AppDispatch) => {
    dispatch(stepSlice.actions.decrement());
}

export const setDefault = () => (dispatch: AppDispatch) => {
    dispatch(stepSlice.actions.setDefault());
}