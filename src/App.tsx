import { FC } from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './index.css';
import UsersList from './components/users/UsersList';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import ExpiredPage from './pages/ExpiredPage/ExpiredPage';
import MainPage from './pages/MainPage/MainPage';
import AgreementForm from './components/steps/AgreementForm/AgreementForm';

export const App: FC = () => {
  return (
    <div id='root'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/link-expired" element={<ExpiredPage />} />
          <Route path="/:code" element={<AgreementForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

