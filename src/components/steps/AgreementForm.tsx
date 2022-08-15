import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/redux';
import { Step1Welcome } from './Step1Welcome';
import { Step2BasicInfo } from './Step2BasicInfo';
import { Step3ContentExplanation } from './Step3ContentExplanation';
import { Step4ButtonsExplanation } from './Step4ButtonsExplanation';
import { Step5IdVerification } from './Step5IdVerification';
import { Step6LandlordAgencyInfo } from './Step6LandlordAgencyInfo';
import { Step7RightsDuties } from './Step7RightsDuties';
import { Step8TermsConditions } from './Step8TermsConditions';
import { Step9InspectionReport } from './Step9InspectionReport';
import { Step10Signature } from './Step10Signature';
import { Step11Congrats } from './Step11Congrats';
import { getAgreement } from '../../store/agreement/ActionCreators';
import ErrorPage from '../../pages/ErrorPage';
import { ErrorStatus } from '../../store/types';
import MainLayout from '../layouts/MainLayout';
import ExpiredPage from '../../pages/ExpiredPage';
import { Card, CircularProgress } from '@mui/material';

export const AgreementForm = () => {
    const location = useLocation();
    const dispatch = useAppDispatch();
    const { error, isLoading } = useAppSelector(state => state.agreementReducer);
    const { stepNumber } = useAppSelector(state => state.stepReducer);

    useEffect(() => {
        dispatch(getAgreement(location.pathname.substring(1, location.pathname.length)));
    }, [])

    if (isLoading) {
        return (
            <Card className="white-content-wrapper text-centered" >
                <CircularProgress />
            </Card>
        )
    }

    if (error) {
        try {
            if (error === ErrorStatus[403]) {
                return (
                    <MainLayout>
                        <ExpiredPage />
                    </MainLayout>
                )
            }
            if (error === ErrorStatus[404]) {
                return (
                    <MainLayout>
                        <ErrorPage status={ErrorStatus['Not Found'].toString()} message={ErrorStatus[404]} />
                    </MainLayout>
                )
            }
        } catch {
            return (
                <MainLayout>
                    <ErrorPage />
                </MainLayout>
            )
        }
    }

    switch (stepNumber) {
        case 1:
            return (<Step1Welcome />)
        case 2:
            return (<Step2BasicInfo />)
        case 3:
            return (<Step3ContentExplanation />)
        case 4:
            return (<Step4ButtonsExplanation />)
        case 5:
            return (<Step5IdVerification />)
        case 6:
            return (<Step6LandlordAgencyInfo />)
        case 7:
            return (<Step7RightsDuties />)
        case 8:
            return (<Step8TermsConditions />)
        case 9:
            return (<Step9InspectionReport />)
        case 10:
            return (<Step10Signature />)
        default:
            return (<Step11Congrats />);
    }
};
