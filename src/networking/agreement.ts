import axios, {AxiosPromise} from 'axios';
import { IAgreement } from '../store/types';
import {mockAgreement} from './mockAgreement';

// export function getAgreementAxios(): AxiosPromise<IAgreement> {
//     return axios.get('https://somewhere')
// }

export function getAgreementAxios(): IAgreement {
    return mockAgreement;
}