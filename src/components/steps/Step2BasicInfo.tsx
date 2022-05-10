import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, Grid } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { ERROR_PAGE } from '../../path';
import { getAgreement } from '../../store/agreement/ActionCreators';
import { useAppDispatch, useAppSelector } from '../../store/redux';
import { incrementStep, decrementStep } from '../../store/steps/ActionCreators';
import { FooterOneBtn } from '../Footers/FooterOneBtn/FooterOneBtn';
import { Header } from '../Header/Header';
import { MuiGrid } from '../MuiGrid/MuiGrid';
import "./styles.css";

export const Step2BasicInfo = () => {
    const dispatch = useAppDispatch();
    const { agreement, isLoading, error } = useAppSelector(state => state.agreementReducer);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getAgreement(location.pathname.substring(1, location.pathname.length)));
    }, [])

    if (error) {
        navigate(ERROR_PAGE)
    }

    return (
        <MuiGrid appearance='grid-light-gray'>
            <Header
                onGoBack={() => dispatch(decrementStep())}
                onPhone={() => console.log('onPhone is not implemented yet')}
            />
            <Grid item xs={12}>
                {isLoading &&
                    <Card className="white-content-wrapper text-centered" >
                        <CircularProgress />
                    </Card>
                }
                {agreement &&
                    <Card className="white-content-wrapper text-centered" >
                        <img src="/images/Info-icon.svg" alt="Info" />
                        <p className='p-regular'>
                            Hi {agreement.land_lord.full_name}, your Residential Exclusive Management Agency Agreement for
                        </p>
                        <hr style={{ 'width': '100%', 'color': '#E7E8E9', 'fontSize': '1px' }} />
                        <p className='p-primary'>
                            {agreement.land_lord.property.address}, {agreement.land_lord.property.city}
                        </p>
                        <p className='p-primary'>
                            {agreement.land_lord.property.state} {agreement.land_lord.property.post_code}
                        </p>
                        <hr />
                        <p className='p-bold-small'>Is ready to sign</p>
                        <Card className="dark-gray-content-wrapper text-centered">
                            <p className='p-regular'>If you need help click</p>
                            <img src="/images/Phone.svg" alt="Phone" />
                            <p className='p-regular'>to give me a call</p>
                            <p className='p-regular'>Regards, {agreement.agency_manager.full_name}</p>
                            <p className='p-bold'>@{agreement.agency.alias}</p>
                        </Card>
                        <p className='p-gray-small'>By clicking “Get Started” you agree to our</p>
                        <p className='p-gray-small-bold'>terms and conditions</p>
                    </Card>
                }
            </Grid>
            <FooterOneBtn onClick={() => dispatch(incrementStep())} />
        </MuiGrid>
    );
};
