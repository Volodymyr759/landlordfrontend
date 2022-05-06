import { Button, Card, Grid } from '@mui/material';
import { useAppDispatch } from '../../../store/redux';
import { incrementStep } from '../../../store/steps/ActionCreators';
import '../../../index.css';

export const Step1Welcome = () => {
    const dispatch = useAppDispatch();

    return (
        <>
            <Grid
                container
                style={{ 'backgroundColor': 'white' }}
            >
                <Grid item xs={12}>
                    <Card style={{ 'backgroundColor': 'transparent', 'boxShadow': 'none', 'textAlign': 'center', 'margin': '58px 0' }}>
                        <img src="/images/Logo_PS.svg" alt="Logo" />
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card style={{ 'backgroundColor': 'transparent', 'boxShadow': 'none', 'textAlign': 'center', 'padding': '0 20px' }}>
                        <h2 className='h2-primary'>Welcomes to your</h2>
                        <p className='p-regular'>Residential Exclusive Management Agency Agreement</p>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card style={{ 'backgroundColor': 'transparent', 'boxShadow': 'none', 'textAlign': 'center', 'margin': '58px 0' }}>
                        <img src="/images/step1_group1.svg" alt="Group" />
                    </Card>
                </Grid>

            </Grid >
            <Grid container style={{'backgroundColor': '#E5E5E5'}}>
                <Grid item xs={12}>
                    <Card style={{ 'backgroundColor': 'transparent', 'boxShadow': 'none', 'textAlign': 'center', 'margin': '20px 0' }}>
                        <Button
                            variant="contained"
                            color="primary"
                            className="btn-primary"
                            style={{ 'width': '170px', 'height': '39px' }}
                            onClick={() => dispatch(incrementStep())}
                        >
                            OK
                        </Button>
                    </Card>
                </Grid>
            </Grid >
        </>
    );
};
