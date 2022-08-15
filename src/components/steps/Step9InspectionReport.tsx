import { useState, useEffect } from 'react';
import { Card, Grid } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/redux';
import { incrementStep, decrementStep } from '../../store/steps/ActionCreators';
import { FooterTwoBtn } from '../Footers/FooterTwoBtn/FooterTwoBtn';
import { Header } from '../Header/Header';
import { MuiGrid } from '../MuiGrid/MuiGrid';
import { MuiStepper } from '../MuiStepper/MuiStepper';
import PhoneDialog from '../PhoneDialog/PhoneDialog';
import "./styles.css";

export const Step9InspectionReport = () => {
    const dispatch = useAppDispatch();
    const { agreement } = useAppSelector(state => state.agreementReducer);
    const { stepNumber } = useAppSelector(state => state.stepReducer);

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
            <MuiStepper activeStep={stepNumber - 6} />
            <p className='p-gray'>Propery inspection report</p>
            <Grid item xs={12}>
                <Card className="white-content-wrapper" >
                    <p className='text-centered'><img src="/images/check-2_1.svg" alt="Identification Card" /></p>
                </Card>
            </Grid>
            <p className='p-gray'>Description of property</p>
            <Grid item xs={12}>
                <Card className="white-content-wrapper" >
                    <p className='p-regular'>
                        {agreement?.inspection.description_of_property}
                    </p>
                </Card>
            </Grid>
            <p className='p-gray'>Smoke Alarms (Residential)</p>
            <Grid item xs={12}>
                <Card className="white-content-wrapper" >
                    <p className='p-regular'>
                        {agreement?.inspection.smoke_alarms}
                    </p>
                </Card>
            </Grid>
            <p className='p-gray'>Condition of interior</p>
            <Grid item xs={12}>
                <Card className="white-content-wrapper" >
                    <p className='p-regular'>
                        {agreement?.inspection.condition_of_interior}
                    </p>
                </Card>
            </Grid>
            <p className='p-gray'>Fitting, Fixtures</p>
            <Grid item xs={12}>
                <Card className="white-content-wrapper" >
                    <p className='p-regular'>
                        {agreement?.inspection.fitting}
                    </p>
                </Card>
            </Grid>
            <p className='p-gray'>Condition of exterior</p>
            <Grid item xs={12}>
                <Card className="white-content-wrapper" >
                    <p className='p-regular'>
                        {agreement?.inspection.condition_of_exterior}
                    </p>
                </Card>
            </Grid>
            <FooterTwoBtn
                onAgree={() => { dispatch(incrementStep()) }}
                onDisagree={onClickPhone}
            />
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
