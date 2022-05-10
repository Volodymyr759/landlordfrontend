import { Card, Grid } from '@mui/material';
import { useAppDispatch } from '../../store/redux';
import { incrementStep, decrementStep } from '../../store/steps/ActionCreators';
import { FooterOneBtn } from '../Footers/FooterOneBtn/FooterOneBtn';
import { Header } from '../Header/Header';
import { MuiGrid } from '../MuiGrid/MuiGrid';
import "./styles.css";

export const Step3ContentExplanation = () => {
    const dispatch = useAppDispatch();

    return (
        <MuiGrid appearance='grid-light-gray'>
            <Header
                onGoBack={() => dispatch(decrementStep())}
                onPhone={() => console.log('onPhone is not implemented yet')}
            />
            <p className='p-gray'>
                Important Information
            </p>
            <Grid item xs={12}>
                <Card className="white-content-wrapper" style={{'minHeight': '600px'}} >
                    <p className='text-centered'>
                        <img src="/images/Info-icon.svg" alt="Info" />
                    </p>
                    <p className='p-small-blue text-centered'>
                        Please read this before completing the residential tenancy agreement (the Agreement).
                    </p>
                    <p className='p-regular'>1. This agreement consists of two parts: Part 1 | The Particulars; Part 2 | The Terms and Conditions</p>
                    <p className='p-regular'>2. All parts of the agreement must be read before signing.</p>
                    <p className='p-regular'>3. The Property and Stock Act 2002 and the Property and Stock Agents Regulation 2014
                        require all agreements to be in writing and contain prescribed terms1</p>
                </Card>
            </Grid>
            <FooterOneBtn onClick={() => dispatch(incrementStep())} />
        </MuiGrid>
    );
};
