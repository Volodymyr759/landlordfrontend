import { IUser } from '../types';

export interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
}
