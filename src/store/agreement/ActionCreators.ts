import { getAgreementAxios, uploadImageAxios } from "../../networking/agreement";
import { AppDispatch } from "../store";
import { IImageData } from "../types";
import { agreementSlice } from './AgreementSlice';


export const getAgreement = (code: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(agreementSlice.actions.setAgreementIsLoading(true));
        const response = await getAgreementAxios(code);
        dispatch(agreementSlice.actions.getAgreement(response));
    } catch (e: any) {
        dispatch(agreementSlice.actions.setAgreementError(e.message));
    } finally {
        dispatch(agreementSlice.actions.setAgreementIsLoading(false));
    }
}

export const uploadImage = (imageData: IImageData) => async (dispatch: AppDispatch) => {
    try {
        dispatch(agreementSlice.actions.setAgreementIsLoading(true));
        const res = await uploadImageAxios(imageData);
        dispatch(agreementSlice.actions.setVerificationImageUrl(res.data));
        console.log('res.data.full_url: ', res.data.full_url);
    } catch (e: any) {
        dispatch(agreementSlice.actions.setAgreementError(e.message));
    } finally {
        dispatch(agreementSlice.actions.setAgreementIsLoading(false));
    }
}

export const clearError = () => async (dispatch: AppDispatch) => {
    dispatch(agreementSlice.actions.setAgreementError(null));
}