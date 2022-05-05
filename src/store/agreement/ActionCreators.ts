import { getAgreementAxios } from "../../networking/agreement";
import { AppDispatch } from "../store";
import { agreementSlice } from './AgreementSlice';

export const getAgreement = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(agreementSlice.actions.setAgreementIsLoading(true));
        // const response = await getAgreementAxios();
        // dispatch(agreementSlice.actions.getAgreementSuccess(response.data));
        const response = getAgreementAxios();
        dispatch(agreementSlice.actions.getAgreementSuccess(response));
    } catch (e) {
        dispatch(agreementSlice.actions.getAgreementError('Something went wrong while retrieving the agreement.'));
    }
}