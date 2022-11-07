import { useEffect, useState } from 'react';
import { Card, Grid } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/redux';
import { incrementStep, decrementStep } from '../../store/steps/ActionCreators';
import { FooterOneBtn } from '../Footers/FooterOneBtn/FooterOneBtn';
import { Header } from '../Header/Header';
import { MuiGrid } from '../MuiGrid/MuiGrid';
import PhoneDialog from '../PhoneDialog/PhoneDialog';
import "./styles.css";

export const Step2BasicInfo = () => {
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
            <Grid item xs={12}>
                {agreement &&
                    <Card className="white-content-wrapper text-centered" >
                        <img src="/images/Info-icon.svg" alt="Info" />
                        <p className='p-regular'>
                            Hi {agreement.landlord.full_name}, your Residential Exclusive Management Agency Agreement for
                        </p>
                        <hr className='h-divider'/>
                        <p className='p-primary'>
                            {agreement.property.address}, {agreement.property.city}
                        </p>
                        <p className='p-primary'>
                            {agreement.property.state} {agreement.property.post_code}
                        </p>
                        <hr />
                        <p className='p-bold-small'>Is ready to sign</p>
                        <Card className="dark-gray-content-wrapper text-centered">
                            <p className='p-regular'>If you need help click</p>
                            <a href={`tel:${agreement?.manager.phone_number}`}>
                                <img src="/images/Phone.svg" alt="Phone" />
                            </a>
                            <p className='p-regular'>to give me a call</p>
                            <p className='p-regular'>Regards, {agreement.manager.full_name}</p>
                            <p className='p-bold'>@{agreement.agency.alias}</p>
                        </Card>
                        <p className='p-gray-small'>By clicking “Get Started” you agree to our</p>
                        <p className='p-gray-small-bold'>terms and conditions</p>
                    </Card>
                }
            </Grid>
            <FooterOneBtn btnText='Get Started' onClick={() => dispatch(incrementStep())} />
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
