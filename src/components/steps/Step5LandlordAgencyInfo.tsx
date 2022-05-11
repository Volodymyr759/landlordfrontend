import { useState } from 'react';
import { Card, Grid, Snackbar } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/redux';
import { incrementStep, decrementStep } from '../../store/steps/ActionCreators';
import { MuiGrid } from '../MuiGrid/MuiGrid';
import { FooterTwoBtn } from '../Footers/FooterTwoBtn/FooterTwoBtn';
import { Header } from '../Header/Header';
import { MuiStepper } from '../MuiStepper/MuiStepper';
import "./styles.css";

export const Step5LandlordAgencyInfo = () => {
    const dispatch = useAppDispatch();
    const { agreement } = useAppSelector(state => state.agreementReducer);
    const { stepNumber } = useAppSelector(state => state.stepReducer);
    const [open, setOpen] = useState<boolean>(false);

    const principalItems = [
        { title: 'PRINCIPAL (“the Principal”) Name', text: `${agreement?.land_lord.full_name}` },
        { title: 'Registered for GST', text: `YES` },
        { title: 'ABN', text: `333939394039` },
        { title: 'ACN', text: `3339393940` },
        { title: 'Address', text: `${agreement?.land_lord.notice_address}` },
        { title: 'Phone', text: `${agreement?.land_lord.phone}` },
        { title: 'Mobile', text: `${agreement?.land_lord.phone}` },
        { title: 'Fax', text: `${agreement?.land_lord.phone}` },
        { title: 'Email', text: `${agreement?.land_lord.email}` },
    ]

    const licenseeItems = [
        { title: 'LICENSEE (“the Licensee”) Name', text: `${agreement?.agency.alias}` },
        { title: 'Registered for GST', text: `YES` },
        { title: 'ABN', text: `${agreement?.agency.abn}` },
        { title: 'ACN', text: `${agreement?.agency.acn}` },
        { title: 'Address', text: `${agreement?.agency.address}, ${agreement?.agency.city}, ${agreement?.agency.state} ${agreement?.agency.postcode}` },
        { title: 'Phone', text: `${agreement?.agency.phone_number}` },
        { title: 'Mobile', text: `${agreement?.agency.phone_number}` },
        { title: 'Fax', text: `${agreement?.agency.phone_number}` },
        { title: 'Email', text: `${agreement?.agency.email}` },
    ]

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    }

    return (
        <MuiGrid appearance='grid-light-gray'>
            <Header
                onGoBack={() => dispatch(decrementStep())}
                onPhone={() => setOpen(true)}
            />
            <Snackbar open={open} message='onPhone function is not implemented yet' autoHideDuration={5000} onClose={handleClose} />
            <MuiStepper activeStep={stepNumber - 5} />
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
                onAgree={() => {
                    console.log('onAgre function is not implemented yet');
                    dispatch(incrementStep());
                }}
                onDisagree={() => {
                    console.log('onDisagree function is not implemented yet');
                    dispatch(incrementStep());
                }}
            />
        </MuiGrid>
    );
};
