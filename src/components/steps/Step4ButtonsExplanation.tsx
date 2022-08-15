import { useEffect, useState } from 'react';
import { Card, Grid } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/redux';
import { incrementStep, decrementStep } from '../../store/steps/ActionCreators';
import { FooterOneBtn } from '../Footers/FooterOneBtn/FooterOneBtn';
import { Header } from '../Header/Header';
import { MuiGrid } from '../MuiGrid/MuiGrid';
import PhoneDialog from '../PhoneDialog/PhoneDialog';
import "./styles.css";

export const Step4ButtonsExplanation = () => {
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

    return (
        <MuiGrid appearance='grid-light-gray'>
            <Header
                onGoBack={() => dispatch(decrementStep())}
                onPhone={onClickPhone}
            />
            <p className='p-gray'>Important Information</p>
            <Grid item xs={12}>
                <Card className="white-content-wrapper" style={{ 'minHeight': '600px' }} >
                    <p className='text-centered'>
                        <img src="/images/Info-icon.svg" alt="Info" />
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
