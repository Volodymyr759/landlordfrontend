import { Card, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../path';
import { useAppDispatch, useAppSelector } from '../../store/redux';
import { setDefault } from '../../store/steps/ActionCreators';
import { FooterOneBtn } from '../Footers/FooterOneBtn/FooterOneBtn';
import { MuiGrid } from '../MuiGrid/MuiGrid';
import "./styles.css";

export const Step10Congrats = () => {
    const dispatch = useAppDispatch();
    const { agreement } = useAppSelector(state => state.agreementReducer);
    const navigate = useNavigate();

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
                        <h2 className='text-primary'>
                            Congratulations your Residential Exclusive Management Agency Agreement is signed and complete
                        </h2>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card className="image-wrapper text-centered" >
                        <img src="/images/group_6_1.svg" alt="Group" />
                    </Card>
                </Grid>
            </MuiGrid>
            <FooterOneBtn appearance='light-gray-box' onClick={() => {
                console.log('For now sets step=1 and redirects to main page.')
                dispatch(setDefault())
                navigate(BASE_URL);
            }}
            />
        </>
    );
};
