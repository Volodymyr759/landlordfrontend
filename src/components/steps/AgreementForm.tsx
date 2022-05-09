import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ERROR_PAGE, LINK_EXPIRED_PAGE } from '../../path';
import { useAppSelector } from '../../store/redux';
import { Step1Welcome } from './Step1Welcome';
import { Step2BasicInfo } from './Step2BasicInfo';
import { Step3ContentExplanation } from './Step3ContentExplanation';
import { Step4ButtonsExplanation } from './Step4ButtonsExplanation';
import { Step5LandlordAgencyInfo } from './Step5LandlordAgencyInfo';

const AgreementForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { stepNumber } = useAppSelector(state => state.stepReducer);

    const userCode = location.pathname.substring(1, location.pathname.length)

    useEffect(() => {
        if (userCode === 'WRONGCODE') {
            navigate(ERROR_PAGE);
            return;
        }
        if (userCode === 'EXPIREDCODE') {
            navigate(LINK_EXPIRED_PAGE);
            return;
        }
    }, [userCode])

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
            return (<Step5LandlordAgencyInfo />)
        default:
            return (
                <div>
                    <h1>Last step</h1>
                </div>
            );
    }
};

export default AgreementForm;