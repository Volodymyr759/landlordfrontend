import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/redux';
import { getUsers } from '../../store/users/ActionCreators';

const UsersList = () => {
    const dispatch = useAppDispatch();
    const { users, isLoading, error } = useAppSelector(state => state.userReducer);

    useEffect(() => {
        dispatch(getUsers());
    }, [])

    return (
        <div>
            {isLoading && <h1>Loading data...</h1>}
            {error && <h1>{error}</h1>}
            {users && users.map(user =>
                <p key={user.id}>
                    {user.id}, {user.name}, {user.email},
                </p>
            )}
        </div>
    );
};

export default UsersList;