import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ERROR_PAGE, LINK_EXPIRED_PAGE } from '../../path';
import { useAppSelector } from '../../store/redux';
import { Step1Welcome } from './Step1Welcome';
import { Step2BasicInfo } from './Step2BasicInfo';
import { Step3ContentExplanation } from './Step3ContentExplanation';
import { Step4ButtonsExplanation } from './Step4ButtonsExplanation';
import { Step5LandlordAgencyInfo } from './Step5LandlordAgencyInfo';
import { Step6RightsDuties } from './Step6RightsDuties';
import { Step7TermsConditions } from './Step7TermsConditions';
import { Step8InspectionReport } from './Step8InspectionReport';
import { Step9Signature } from './Step9Signature';
import { Step10Congrats } from './Step10Congrats';

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
        case 6:
            return (<Step6RightsDuties />)
        case 7:
            return (<Step7TermsConditions />)
        case 8:
            return (<Step8InspectionReport />)
        case 9:
            return (<Step9Signature />)
        default:
            return (<Step10Congrats />);
    }
};

export default AgreementForm;