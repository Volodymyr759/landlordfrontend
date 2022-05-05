import { useAppDispatch } from '../../../store/redux';
import { incrementStep } from '../../../store/steps/ActionCreators';

export const Step1Welcome = () => {
    const dispatch = useAppDispatch();

    return (
        <div>
            <h2>Welcomes to your</h2>
            <button
                onClick={() => dispatch(incrementStep())}
            >
                OK
            </button>
        </div>
    );
};
