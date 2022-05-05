import { useEffect } from 'react';
import { getAgreementAxios } from '../../../networking/agreement';
import { getAgreement } from '../../../store/agreement/ActionCreators';
import { useAppDispatch, useAppSelector } from '../../../store/redux';
import { incrementStep } from '../../../store/steps/ActionCreators';

const Step2BasicInfo = () => {
    const dispatch = useAppDispatch();
    const { agreement, isLoading, error } = useAppSelector(state => state.agreementReducer);

    useEffect(() => {
        dispatch(getAgreement());
    }, [])

    setTimeout(() => {
        console.log('agreement', agreement);
    }, 3000);

    return (
        <>
            {isLoading && <h1>Loading data...</h1>}
            {error && <h1>{error}</h1>}
            {
                agreement &&
                <>
                    <p>Hi {agreement.land_lord.full_name}, your Residential Exclusive Management Agency Agreement for</p>
                    <h2 color='pink'>
                        {agreement.land_lord.property.address} {agreement.land_lord.property.city}, 
                        {agreement.land_lord.property.state}, {agreement.land_lord.property.post_code}
                    </h2>
                    <p>Is ready to sign</p>
                    <p>If you need help click</p>
                    image
                    <p> to give me a call</p>
                    <p>Regards, {agreement.agency_manager.full_name} @{agreement.agency.alias}</p>
                    <button
                        onClick={() => dispatch(incrementStep())}
                    >
                        OK
                    </button>
                </>
            }

        </>
    );
};

export default Step2BasicInfo;