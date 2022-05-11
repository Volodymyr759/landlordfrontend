import { combineReducers, configureStore } from "@reduxjs/toolkit";
import agreementReducer from './agreement/AgreementSlice';
import stepReducer from './steps/StepSlice';

const rootReducer = combineReducers({
    agreementReducer,
    stepReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']