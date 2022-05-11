import { FC } from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './index.css';
import ErrorPage from './pages/ErrorPage';
import ExpiredPage from './pages/ExpiredPage';
import MainPage from './pages/MainPage';
import { AgreementForm } from './components/steps/AgreementForm';
import { BASE_URL, ERROR_PAGE, LINK_EXPIRED_PAGE, START_PAGE } from './path';
import MainLayout from './components/layouts/MainLayout';
import StepLayout from './components/layouts/StepLayout';

export const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={BASE_URL} element={
            <MainLayout>
              <MainPage />
            </MainLayout>
          } />
          <Route path={ERROR_PAGE} element={
            <MainLayout>
              <ErrorPage />
            </MainLayout>
          } />
          <Route path={LINK_EXPIRED_PAGE} element={
            <MainLayout>
              <ExpiredPage />
            </MainLayout>
          } />
          <Route path={START_PAGE} element={
            <StepLayout>
              <AgreementForm />
            </StepLayout>
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

