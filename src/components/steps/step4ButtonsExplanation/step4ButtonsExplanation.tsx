import { useAppDispatch } from '../../../store/redux';
import { incrementStep } from '../../../store/steps/ActionCreators';

const Step4ButtonsExplanation = () => {
    const dispatch = useAppDispatch();

    return (
        <>
            <p>
                Please read this before completing the residential tenancy agreement (the Agreement).
            </p>
            <p>
                If the following information is correct in the lease agreement,  hit
                to continue
            </p>
            <p>
                If you need to edit then hit, to request a change.
            </p>
            <button
                onClick={() => dispatch(incrementStep())}
            >
                OK
            </button>
        </>
    );
};

export default Step4ButtonsExplanation;