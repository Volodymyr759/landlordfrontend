import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAgreement, IAvatar } from "../../store/types";
import { AgreementState } from "./types";

export const initialState: AgreementState = {
    agreement: null,
    isLoading: false,
    error: null
}

export const agreementSlice = createSlice({
    name: 'agreement',
    initialState,
    reducers: {
        setAgreementIsLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
        getAgreement(state, action: PayloadAction<IAgreement>) {
            state.agreement = action.payload;
        },
        setAgreementError(state, action: PayloadAction<string | null>) {
            state.error = action.payload;
        },
        setVerificationImageUrl(state, action: PayloadAction<IAvatar>) {
            if (state.agreement) {
                state.agreement.landlord.verification_photo = action.payload
            }
        }
    }
})

export default agreementSlice.reducer;