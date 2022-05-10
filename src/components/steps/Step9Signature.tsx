import { Card, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/redux';
import { incrementStep, decrementStep } from '../../store/steps/ActionCreators';
import { FooterTwoBtn } from '../Footers/FooterTwoBtn/FooterTwoBtn';
import { Header } from '../Header/Header';
import { MuiGrid } from '../MuiGrid/MuiGrid';
import "./styles.css";

export const Step9Signature = () => {
    const dispatch = useAppDispatch();
    const { agreement } = useAppSelector(state => state.agreementReducer);

    return (
        <MuiGrid appearance='grid-light-gray'>
            <Header
                onGoBack={() => dispatch(decrementStep())}
                onPhone={() => console.log('onPhone is not implemented yet')}
            />
            <p className='p-gray'>Signature</p>
            <Grid item xs={12}>
                <Card className="white-content-wrapper text-centered" >
                    <img src="/images/digital-signature_1.svg" alt="Info" />
                    <p className='p-primary'>
                        You’re now ready to sign your Residential Exclusive Management Agency Agreement
                    </p>
                    <p className='p-regular'>
                        The licensee and the principal/s acknowledge and confirm that before signing this agreement the licensee and
                        the principal/s have read and understood and agree to the terms and conditions in part 2 of this agreement and
                        the principal acknowledges being served with a copy of the same.
                    </p>
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
