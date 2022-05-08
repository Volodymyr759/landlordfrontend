import { Card, Grid } from '@mui/material';
import { useAppDispatch } from '../../../store/redux';
import { incrementStep } from '../../../store/steps/ActionCreators';
import '../../../index.css';
import { Htag } from '../../HTag/HTag';
import { MuiGrid } from '../../MuiGrid/MuiGrid';
import { FooterOneBtn } from '../../Footers/FooterOneBtn/FooterOneBtn';

export const Step1Welcome = () => {
    const dispatch = useAppDispatch();

    return (
        <>
            <MuiGrid appearance='grid-white'>
                <Grid item xs={12}>
                    <Card style={{ 'backgroundColor': 'transparent', 'boxShadow': 'none', 'textAlign': 'center', 'margin': '58px 0' }}>
                        <img src="/images/Logo_PS.svg" alt="Logo" />
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card style={{ 'backgroundColor': 'transparent', 'boxShadow': 'none', 'textAlign': 'center', 'padding': '0 20px' }}>
                        <Htag appearance='h2-primary'>Welcomes to your</Htag>
                        <p className='p-regular'>Residential Exclusive Management Agency Agreement</p>
                        <p>Residential Exclusive Management Agency Agreement</p>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card style={{ 'backgroundColor': 'transparent', 'boxShadow': 'none', 'textAlign': 'center', 'margin': '58px 0' }}>
                        <img src="/images/step1_group1.svg" alt="Group" />
                    </Card>
                </Grid>
            </MuiGrid>
            <FooterOneBtn appearance='light-gray-box' onClick={() => dispatch(incrementStep())} />
        </>
    );
};
