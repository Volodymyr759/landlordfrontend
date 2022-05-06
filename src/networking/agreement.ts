import axios, { AxiosPromise } from 'axios';
import { IAgreement } from '../store/types';
import { mockAgreement } from './mockAgreement';

// export function getAgreementAxios(code: string): AxiosPromise<IAgreement> {
//     return axios.get('https://somewhere' + `/${code}`)
// }

export function getAgreementAxios(code: string): IAgreement {
    return mockAgreement;
}