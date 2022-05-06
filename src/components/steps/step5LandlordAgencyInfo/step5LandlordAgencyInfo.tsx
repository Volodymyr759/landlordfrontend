import { useAppDispatch } from '../../../store/redux';
import { incrementStep } from '../../../store/steps/ActionCreators';

const Step5LandlordAgencyInfo = () => {
    const dispatch = useAppDispatch();

    return (
        <>
            <p>
                Please read this before completing the residential tenancy agreement (the Agreement).
            </p>
            <p>
                This agreement consists of two parts: Part 1 | The Particulars; Part 2 | The Terms and Conditions
            </p>
            <p>
                All parts of the agreement must be read before signing.
            </p>
            <p>
                The Property and Stock Act 2002 and the Property and Stock Agents Regulation 2014 require all agreements to be in writing and contain prescribed terms1
            </p>
            <button
                onClick={() => dispatch(incrementStep())}
            >
                OK
            </button>
        </>
    );
};

export default Step5LandlordAgencyInfo;