import { getUsersAxios } from "../../networking/users";
import { AppDispatch } from "../store";
import { userSlice } from './UserSlice';


export const getUsers = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.setUsersIsLoading(true));
        const response = await getUsersAxios();
        dispatch(userSlice.actions.getUsersSuccess(response.data));
    } catch (e) {
        dispatch(userSlice.actions.getUsersError('Something went wrong while retrieving users.'));
    }
}