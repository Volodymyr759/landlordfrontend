import axios, {AxiosPromise} from 'axios';
import { IUser } from '../store/types';

export function getUsersAxios(): AxiosPromise<IUser[]> {
    return axios.get('https://jsonplaceholder.typicode.com/users')
}
