import { Card, Grid } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/redux';
import { incrementStep, decrementStep } from '../../store/steps/ActionCreators';
import { FooterTwoBtn } from '../Footers/FooterTwoBtn/FooterTwoBtn';
import { Header } from '../Header/Header';
import { MuiGrid } from '../MuiGrid/MuiGrid';
import { MuiStepper } from '../MuiStepper/MuiStepper';
import "./styles.css";

export const Step7TermsConditions = () => {
    const dispatch = useAppDispatch();
    const { agreement } = useAppSelector(state => state.agreementReducer);
    const { stepNumber } = useAppSelector(state => state.stepReducer);

    return (
        <MuiGrid appearance='grid-light-gray'>
            <Header
                onGoBack={() => dispatch(decrementStep())}
                onPhone={() => console.log('onPhone is not implemented yet')}
            />
            <MuiStepper activeStep={stepNumber - 5} />
            <p className='p-gray'>PART 2 | Terms and conditions of residential exlusive management agency agreement</p>
            <Grid item xs={12}>
                <Card className="white-content-wrapper text-centered" >
                    <p><img src="/images/terms-and-conditions_1.svg" alt="Identification Card" /></p>
                    <p className='p-regular'>Not implemented yet</p>
                </Card>
            </Grid>
            <FooterTwoBtn
                onAgree={() => {
                    console.log('onAgre function is not implemented yet');
                    dispatch(incrementStep());
                }}
                onDisagree={() => {
                    console.log('onDisagree function is not implemented yet');
                    dispatch(incrementStep());
                }}
            />
        </MuiGrid>
    );
};
