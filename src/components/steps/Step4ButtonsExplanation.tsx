import { Card, Grid } from '@mui/material';
import { useAppDispatch } from '../../store/redux';
import { incrementStep, decrementStep } from '../../store/steps/ActionCreators';
import { FooterOneBtn } from '../Footers/FooterOneBtn/FooterOneBtn';
import { Header } from '../Header/Header';
import { MuiGrid } from '../MuiGrid/MuiGrid';

export const Step4ButtonsExplanation = () => {
    const dispatch = useAppDispatch();

    return (
        <MuiGrid appearance='grid-light-gray'>
            <Header
                onGoBack={() => dispatch(decrementStep())}
                onPhone={() => console.log('onPhone is not implemented yet')}
            />
            <p className='p-gray'>Important Information</p>
            <Grid item xs={12}>
                <Card className="white-content-wrapper" style={{ 'minHeight': '600px' }} >
                    <p className='text-centered'>
                        <img src="/images/Info-icon.svg" alt="Info" />
                    </p>
                    <p className='p-small-blue text-centered'>
                        Please read this before completing the residential tenancy agreement (the Agreement).
                    </p>
                    <p className='p-regular'>
                        If the following information is correct in the lease agreement,
                        hit <img src='/images/agree_btn_small.svg' alt="Agree button" /> to continue
                    </p>
                    <p className='p-regular'>
                        If you need to edit then hit, hit <img src='/images/disagree_btn_small.svg' alt="Agree button" /> to
                        request a change.
                    </p>
                </Card>
            </Grid>
            <FooterOneBtn onClick={() => dispatch(incrementStep())} />
        </MuiGrid>
    );
};
