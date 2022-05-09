import { Card, Grid } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/redux';
import { incrementStep, decrementStep } from '../../store/steps/ActionCreators';
import { FooterOneBtn } from '../Footers/FooterOneBtn/FooterOneBtn';
import { Header } from '../Header/Header';
import { MuiGrid } from '../MuiGrid/MuiGrid';

export const Step5LandlordAgencyInfo = () => {
    const dispatch = useAppDispatch();
    const { agreement } = useAppSelector(state => state.agreementReducer);

    return (
        <MuiGrid appearance='grid-light-gray'>
            <Header
                onGoBack={() => dispatch(decrementStep())}
                onPhone={() => console.log('onPhone is not implemented yet')}
            />
            <p className='p-gray'>PART 1: The particulars / Principal</p>
            <Grid item xs={12}>
                <Card className="white-content-wrapper text-centered" >
                    <p><img src="/images/identification-card _2.svg" alt="Identification Card" /></p>
                    <p className='p-small-blue'>PRINCIPAL (“the Principal”) Name</p>
                    <p className='p-regular'>{agreement?.land_lord.full_name}</p>
                    <p className='p-small-blue'>Registered for GST</p>
                    <p className='p-regular'>YES</p>
                    <p className='p-small-blue'>ABN</p>
                    <p className='p-regular'>333939394039</p>
                    <p className='p-small-blue'>ACN</p>
                    <p className='p-regular'>3339393940</p>
                    <p className='p-small-blue'>Address</p>
                    <p className='p-regular'>{agreement?.land_lord.notice_address}</p>
                    <p className='p-small-blue'>Phone</p>
                    <p className='p-regular'>{agreement?.land_lord.phone}</p>
                    <p className='p-small-blue'>Mobile</p>
                    <p className='p-regular'>{agreement?.land_lord.phone}</p>
                    <p className='p-small-blue'>Fax</p>
                    <p className='p-regular'>{agreement?.land_lord.phone}</p>
                    <p className='p-small-blue'>Email</p>
                    <p className='p-regular'>{agreement?.land_lord.email}</p>
                </Card>
            </Grid>
            <p className='p-gray'>PART 1: The particulars / Licensee</p>
            <Grid item xs={12}>
                <Card className="white-content-wrapper text-centered" >
                    <p><img src="/images/identification-card _2.svg" alt="Identification Card" /></p>
                    <p className='p-small-blue'>LICENSEE (“the Licensee) Name</p>
                    <p className='p-regular'>{agreement?.agency.alias}</p>
                    <p className='p-small-blue'>Registered for GST</p>
                    <p className='p-regular'>YES</p>
                    <p className='p-small-blue'>ABN</p>
                    <p className='p-regular'>{agreement?.agency.abn}</p>
                    <p className='p-small-blue'>ACN</p>
                    <p className='p-regular'>{agreement?.agency.acn}</p>
                    <p className='p-small-blue'>Address</p>
                    <p className='p-regular'>{agreement?.agency.address}, {agreement?.agency.city}, {agreement?.agency.state} {agreement?.agency.postcode} </p>
                    <p className='p-small-blue'>Phone</p>
                    <p className='p-regular'>{agreement?.agency.phone_number}</p>
                    <p className='p-small-blue'>Mobile</p>
                    <p className='p-regular'>{agreement?.agency.phone_number}</p>
                    <p className='p-small-blue'>Fax</p>
                    <p className='p-regular'>{agreement?.agency.phone_number}</p>
                    <p className='p-small-blue'>Email</p>
                    <p className='p-regular'>{agreement?.agency.email}</p>
                </Card>
            </Grid>
            <FooterOneBtn onClick={() => dispatch(incrementStep())} />
        </MuiGrid>
    );
};
