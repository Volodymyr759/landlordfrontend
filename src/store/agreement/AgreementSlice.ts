import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAgreement } from "../../store/types";
import { AgreementState } from "./types";

export const initialState: AgreementState = {
    agreement: null,
    isLoading: false,
    error: ''
}

export const agreementSlice = createSlice({
    name: 'agreement',
    initialState,
    reducers: {
        setAgreementIsLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
            state.agreement = null;
            state.error = '';
        },
        getAgreementSuccess(state, action: PayloadAction<IAgreement>) {
            state.isLoading = false;
            state.agreement = action.payload;
            state.error = '';
        },
        getAgreementError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default agreementSlice.reducer;