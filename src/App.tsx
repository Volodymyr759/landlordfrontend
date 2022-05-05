import { FC } from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.css';
import UsersList from './components/users/UsersList';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import ExpiredPage from './pages/ExpiredPage/ExpiredPage';
import MainPage from './pages/MainPage/MainPage';

export const App: FC = () => {
  return (
    <div id='root'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="error" element={<ErrorPage />} />
          <Route path="link-expired" element={<ExpiredPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

