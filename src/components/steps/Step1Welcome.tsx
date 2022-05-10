import { Card, Grid } from '@mui/material';
import { useAppDispatch } from '../../store/redux';
import { incrementStep } from '../../store/steps/ActionCreators';
import { MuiGrid } from '../MuiGrid/MuiGrid';
import { FooterOneBtn } from '../Footers/FooterOneBtn/FooterOneBtn';
import "./styles.css";

export const Step1Welcome = () => {
    const dispatch = useAppDispatch();

    return (
        <>
            <MuiGrid appearance='grid-white'>
                <Grid item xs={12}>
                    <Card className="image-wrapper text-centered" >
                        <img src="/images/Logo_PS.svg" alt="Logo" />
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card className="content-wrapper text-centered">
                        <h2 className='text-primary'>Welcomes to your</h2>
                        <p className='p-regular'>Residential Exclusive Management Agency Agreement</p>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card className="image-wrapper text-centered" >
                        <img src="/images/step1_group1.svg" alt="Group" />
                    </Card>
                </Grid>
            </MuiGrid>
            <FooterOneBtn appearance='light-gray-box' onClick={() => dispatch(incrementStep())} />
        </>
    );
};
