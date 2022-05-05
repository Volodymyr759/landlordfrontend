import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../store/redux';
import { Step1Welcome } from '../Step1Welcome/Step1Welcome';
import Step2BasicInfo from '../Step2BasicInfo/Step2BasicInfo';

const AgreementForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { stepNumber } = useAppSelector(state => state.stepReducer);

    const userCode = location.pathname.substring(1, location.pathname.length)

    useEffect(() => {
        if (userCode === 'WRONGCODE') {
            navigate("/error");
            return;
        }
        if (userCode === 'EXPIREDCODE') {
            navigate("/link-expired");
            return;
        }
    }, [userCode])

    switch (stepNumber) {
        case 1:
            return (<Step1Welcome />)
        case 2:
            return (<Step2BasicInfo />)
        default:
            return (
                <div>
                    {/* <h1>Agreement form</h1>
                    <p> Code is: {userCode}</p> */}
                </div>

            );
    }
};

export default AgreementForm;