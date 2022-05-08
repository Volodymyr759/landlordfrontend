import { Card, Grid } from '@mui/material';
import { useAppDispatch } from '../../../store/redux';
import { incrementStep } from '../../../store/steps/ActionCreators';
import '../../../index.css';
import { Htag } from '../../HTag/HTag';
import { MuiButton } from '../../MuiButton/MuiButton';
import { MuiGrid } from '../../MuiGrid/MuiGrid';

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
            <MuiGrid appearance='grid-light-gray'>
                <Grid item xs={12}>
                    <Card style={{ 'backgroundColor': 'transparent', 'boxShadow': 'none', 'textAlign': 'center', 'margin': '20px 0' }}>
                        <MuiButton
                            appearance="btn-primary"
                            onClick={() => dispatch(incrementStep())}
                        >
                            OK
                        </MuiButton>
                    </Card>
                </Grid>
            </MuiGrid>
        </>
    );
};
