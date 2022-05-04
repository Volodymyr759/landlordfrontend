import { FC, useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './store/redux';
import { getUsers } from './store/users/ActionCreators';

export const App: FC = () => {
  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector(state => state.userReducer);

  useEffect(() => {
    dispatch(getUsers());
  }, [])

  return (
    <div id='root'>
      {isLoading && <h1>Loading data...</h1>}
      {error && <h1>{error}</h1>}
      {users && users.map(user =>
        <p key={user.id}>
          {user.id}, {user.name}, {user.email},
        </p>
      )}
    </div>
  );
}

