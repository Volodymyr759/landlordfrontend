import axios, { AxiosError } from 'axios';
import { ErrorStatus, IAgreement, IImageData, IAvatar } from '../store/types';
import { mockAgreement } from './mockAgreement';

export async function getAgreementAxios(code: string) {
    try {
        // todo: comment out next 3 if-block's when backend is ready
        if (code === 'EXPIREDCODE') {
            throw new Error(ErrorStatus[403])
        }
        if (code === 'WRONGCODE') {
            throw new Error(ErrorStatus[404])
        }
        if (code === 'ACTUALCODE') {
            return mockAgreement;
        }
        const res = await axios.get<IAgreement>('/get-agreement/' + code)
        return res.data;
    } catch (error) {
        // todo: uncomment next 6 lines when backend is ready
        // const errStatus = (error as AxiosError)?.response?.status;
        // if (errStatus) {
        //     throw new Error(ErrorStatus[errStatus]);
        // } else {
        //     throw new Error(ErrorStatus[500]);
        // }
        throw new Error((error as AxiosError)?.message);
    }
}

export async function uploadImageAxios(imageData: IImageData) {
    let formData: FormData = new FormData();
    formData.append('file', imageData.image);
    return await axios.post<IAvatar>(process.env.REACT_APP_FILE_UPLOAD_URL || '', formData, { // todo: add to end of endpoint value `${imageData.landlordId}`
        headers: { 'X-CLIENT-ID': process.env.REACT_APP_MICRO_SERVICES_FILESYSTEM_CLIENT_ID || '' }
    })
}
