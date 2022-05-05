import { IAgreement } from "../types";

export interface AgreementState {
    agreement: null | IAgreement;
    isLoading: boolean;
    error: string;
}



