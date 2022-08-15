import { useEffect, useState } from 'react';
import { Card, Grid } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/redux';
import { incrementStep, decrementStep } from '../../store/steps/ActionCreators';
import { FooterOneBtn } from '../Footers/FooterOneBtn/FooterOneBtn';
import { Header } from '../Header/Header';
import { ListCard } from '../ListCard/ListCard';
import { MuiGrid } from '../MuiGrid/MuiGrid';
import PhoneDialog from '../PhoneDialog/PhoneDialog';
import "./styles.css";

export const Step3ContentExplanation = () => {
    const dispatch = useAppDispatch();

    const { agreement } = useAppSelector(state => state.agreementReducer);
    
    const [openPhoneDialog, setOpenPhoneDialog] = useState<boolean>(false);

    useEffect(() => {
        window.scroll(0, 0);
    }, [])
    
    const onClickPhone = () => {
        setOpenPhoneDialog(true);
    };

    const onClosePhoneDialog = () => {
        setOpenPhoneDialog(false);
    };

    const itemsToAgree = [
        {
            content: <span className='p-regular-nomargin'>
                This agreement consists of two parts: Part 1 | The Particulars; Part 2 | The Terms and Conditions</span>,
            icon: <span>1.</span>
        },
        {
            content: <span className='p-regular-nomargin'>All parts of the agreement must be read before signing.</span>,
            icon: <span>2.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                The Property and Stock Act 2002 and the Property and Stock Agents Regulation 2014 require all agreements
                to be in writing and contain prescribed terms</span>,
            icon: <span>3.</span>
        }
    ]

    return (
        <MuiGrid appearance='grid-light-gray'>
            <Header
                onGoBack={() => dispatch(decrementStep())}
                onPhone={onClickPhone}
            />
            <p className='p-gray'>
                Important Information
            </p>
            <Grid item xs={12}>
                <Card className="white-content-wrapper" style={{ 'minHeight': '600px' }} >
                    <p className='text-centered'>
                        <img src="/images/Info-icon.svg" alt="Info" />
                    </p>
                    <p className='p-small-blue text-centered'>
                        Please read this before completing the Residential Exclusive Management Agency Agreement.
                    </p>
                    <ListCard items={itemsToAgree} />
                </Card>
            </Grid>
            <FooterOneBtn btnText='OK' onClick={() => dispatch(incrementStep())} />
            <PhoneDialog
                isOpen={openPhoneDialog}
                firstName={agreement?.manager.first_name}
                lastName={agreement?.manager.last_name}
                phoneNumber={agreement?.manager.phone_number}
                onClose={onClosePhoneDialog}
            />
        </MuiGrid>
    );
};
