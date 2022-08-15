import { useEffect, useState } from 'react';
import { Card, Grid } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/redux';
import { incrementStep, decrementStep } from '../../store/steps/ActionCreators';
import { MuiGrid } from '../MuiGrid/MuiGrid';
import { FooterTwoBtn } from '../Footers/FooterTwoBtn/FooterTwoBtn';
import { Header } from '../Header/Header';
import { MuiStepper } from '../MuiStepper/MuiStepper';
import PhoneDialog from '../PhoneDialog/PhoneDialog';
import "./styles.css";

export const Step6LandlordAgencyInfo = () => {
    const dispatch = useAppDispatch();
    const { agreement } = useAppSelector(state => state.agreementReducer);
    const { stepNumber } = useAppSelector(state => state.stepReducer);

    const [openPhoneDialog, setOpenPhoneDialog] = useState<boolean>(false);

    useEffect(() => {
        window.scroll(0, 0);
    }, [])

    const principalItems = [
        { title: 'PRINCIPAL (“the Principal”) Name', text: agreement?.landlord.full_name },
        { title: 'Registered for GST', text: `${agreement?.landlord.gst === 1 ? 'YES' : 'NO'}` },
        { title: 'ABN / ACN', text: agreement?.landlord.acn_abn },
        { title: 'Address', text: agreement?.landlord.address },
        { title: 'Phone', text: agreement?.landlord.phone },
        { title: 'Mobile', text: agreement?.landlord.mobile },
        { title: 'Fax', text: agreement?.landlord.business_phone },
        { title: 'Email', text: agreement?.landlord.email },
    ]

    const licenseeItems = [
        { title: 'LICENSEE (“the Licensee”) Name', text: agreement?.license.name },
        { title: 'Registered for GST', text: `${agreement?.license.gst === 1 ? 'YES' : 'NO'}` },
        { title: 'ABN / ACN', text: agreement?.license.acn_abn },
        { title: 'Address', text: agreement?.license.address },
        { title: 'Phone', text: agreement?.license.phone },
        { title: 'Mobile', text: agreement?.license.mobile },
        { title: 'Fax', text: agreement?.license.fax },
        { title: 'Email', text: agreement?.license.email },
    ]

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
            <p className='p-gray'>PART 1: The particulars / Principal</p>
            <Grid item xs={12}>
                <Card className="white-content-wrapper text-centered" >
                    <p><img src="/images/identification-card_2.svg" alt="Identification Card" /></p>
                    {principalItems.map(item => (
                        <div key={item.title} >
                            <p className='p-small-blue'>{item.title}</p>
                            <p className='p-regular'>{item.text}</p>
                        </div>
                    ))}
                </Card>
            </Grid>
            <p className='p-gray'>PART 1: The particulars / Licensee</p>
            <Grid item xs={12}>
                <Card className="white-content-wrapper text-centered" >
                    <p><img src="/images/identification-card_2.svg" alt="Identification Card" /></p>
                    {licenseeItems.map(item => (
                        <div key={item.title} >
                            <p className='p-small-blue'>{item.title}</p>
                            <p className='p-regular'>{item.text}</p>
                        </div>
                    ))}
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
