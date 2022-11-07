import { useEffect, useState } from 'react';
import { Card, Grid } from '@mui/material';
import moment from 'moment';
import { useAppDispatch, useAppSelector } from '../../store/redux';
import { incrementStep, decrementStep } from '../../store/steps/ActionCreators';
import { FooterTwoBtn } from '../Footers/FooterTwoBtn/FooterTwoBtn';
import { Header } from '../Header/Header';
import { ListCard } from '../ListCard/ListCard';
import { MuiGrid } from '../MuiGrid/MuiGrid';
import { MuiStepper } from '../MuiStepper/MuiStepper';
import PhoneDialog from '../PhoneDialog/PhoneDialog';
import "./styles.css";

export const Step7RightsDuties = () => {
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

    const dutiesItems = [
        {
            content: <span className='p-regular-nomargin'>
                Sign tenancy agreement on behalf of the Principal</span>,
            icon: <div className="pink-ellipse-wrapper"><img src="/images/ellipse_16.svg" alt="Ellipse icon" /></div>
        },
        {
            content: <span className='p-regular-nomargin'>All parts of the agreement must be read before signing.</span>,
            icon: <div className="pink-ellipse-wrapper"><img src="/images/ellipse_16.svg" alt="Ellipse icon" /></div>
        },
        {
            content: <span className='p-regular-nomargin'>Submit tenants to Principal</span>,
            icon: <div className="pink-ellipse-wrapper"><img src="/images/ellipse_16.svg" alt="Ellipse icon" /></div>
        }
    ]

    const remunerationItems = [
        { text: 'Effecting Initial Leasing - a fee of:', sum: `$${agreement?.property_info.initial_leasing}`, note: '' },
        { text: 'Lease Renewal - a fee of:', sum: `$${agreement?.property_info.first_lease}`, note: '' },
        { text: 'Management Fee: An amount equal to', sum: '$220', note: '' },
        { text: 'Residential Tenancy Agreement Preparation fee: ', sum: `$${agreement?.property_info.resident_preparation_fee}`, note: '[exclusive of GST]' },
        { text: 'An Administration fee of:', sum: `$${agreement?.property_info.administration_fee_payable_monthly}`, note: '[exclusive of GST] payable monthly.' },
        { text: 'Lease re-letting fee:', sum: `$${agreement?.property_info.lease_re_letting_fee}`, note: '[exclusive of GST]' }
    ]

    const expencesItems = [
        { text: 'Advertising per leasing - at cost but not exceeding', sum: `$${agreement?.property_info.advertising_per_leasing}`, note: '' },
        { text: 'Office Expenses [Clause 1.2] as incurred but not exceeding', sum: `$${agreement?.property_info.office_expenses}`, note: '[Per month]' },
        { text: 'Government and other imposts [Clause 1.1] as charged.', sum: `$${agreement?.property_info.government_charged}`, note: '[exclusive of GST]' },
        { text: 'Other:', sum: '$220', note: '[Per year]' }
    ]

    const otherServicesItems = [
        { text: 'Inspection of Premises/Report Fee', sum: `$${agreement?.property_info.inspection_fee}`, note: '' },
        { text: 'Arranging Repairs or Maintenance', sum: `$${agreement?.property_info.arranging_maintenance}`, note: '' },
        { text: 'Negotiating Rent Variation', sum: `$${agreement?.property_info.negotiating_rent_variation}`, note: '' },
        { text: 'Service of Notice or Summons:', sum: `$${agreement?.property_info.service_of_notice}`, note: '' },
        { text: 'Appearing at Court/Tribunal', sum: `$${agreement?.property_info.appearing_at_court || 'N/A'}`, note: '' },
        { text: 'Applying for a Tribunal or other Order', sum: `$${agreement?.property_info.applying_for_tribunal}`, note: '' },
        { text: 'Preparation and Filing or Defence of Stay or Internal Appeal at NCAT', sum: `$${agreement?.property_info.preparation_of_stay}`, note: '[per hour]' },
        { text: 'Appearing at NCAT before the Appeal Panel', sum: `$${agreement?.property_info.appearing_before_panel}`, note: '[per hour]' },
    ]

    const tenancyItems = [
        {
            content: <span className='p-regular-nomargin'>its fixed term is to be not less
                than <b>{agreement?.property_info.fixed_term_no_less_weeks} weeks</b> and not more than <b>{agreement?.property_info.fixed_term_no_more_weeks} Week</b></span>,
            icon: <span>a.</span>
        },
        {
            content: <span className='p-regular-nomargin'>the rent is to be <b>{`$${agreement?.property_info.rent_amount}`}</b> payable in advance</span>,
            icon: <span>b.</span>
        },
        {
            content: <span className='p-regular-nomargin'>a rental bond in a sum equal to <b>12 weeks</b> rent to be paid</span>,
            icon: <span>c.</span>
        },
        {
            content: <span className='p-regular-nomargin'>the Premises are to be let <b>{moment(agreement?.property_info.premises_from).format('DD/MM/YYYY')}</b></span>,
            icon: <span>d.</span>
        }
    ]

    const outgoingsItems = [
        { title: 'Council Rates No.', text: agreement?.property_info.council_rates, icon: true },
        { title: 'Water/Sewerage charges No', text: agreement?.property_info.water_charges, icon: true },
        { title: 'Land Tax Assessment No.', text: `${agreement?.property_info.land_tax || 'N/A'}`, icon: true },
        { title: 'Insurance Premiums Policy Number & Company', text: `${agreement?.property_info.insurance_premiums_policy_no || 'N/A'}`, icon: true },
        { title: 'Strata Title/Community Title Levies Not', text: agreement?.property_info.strata_title_levies, icon: true },
        { title: 'Strata Managing Agent', text: agreement?.property_info.strata_agent, icon: false },
        { title: 'Address', text: agreement?.property_info.strata_address, icon: false },
        { title: 'Phone No.', text: agreement?.property_info.strata_phone, icon: false },
        { title: 'Fax', text: agreement?.property_info.strata_fax, icon: false },
        { title: 'Email', text: agreement?.property_info.strata_email, icon: false },
        { title: 'Other', text: `${agreement?.property_info.strata_other || 'N/A'}`, icon: false }
    ]

    const remittancesItems = [
        { text: 'Cheque to accompany Statement', value: agreement?.property_info.cheque_to_accompany_statement },
        { text: 'Pay to the credit', value: agreement?.property_info.pay_the_credit },
        { text: 'Bank', value: agreement?.property_info.bank },
        { text: 'Branch Address', value: agreement?.property_info.branch_address },
        { text: 'Branch (BSB) and Account No.', value: agreement?.property_info.account_no }
    ]

    return (
        <MuiGrid appearance='grid-light-gray'>
            <Header
                onGoBack={() => dispatch(decrementStep())}
                onPhone={onClickPhone}
            />
            <MuiStepper activeStep={stepNumber - 6} />
            <p className='p-gray'>PART 1: The particulars / Property</p>
            <Grid item xs={12}>
                <Card className="white-content-wrapper text-centered" >
                    <p><img src="/images/identification-card_house.svg" alt="Identification Card" /></p>
                    <p className='p-small-blue'>PROPERTY (“the Property)</p>
                    <p className='p-regular'>{agreement?.landlord.address}</p>
                </Card>
            </Grid>
            <p className='p-gray'>A: Grant of agency rights</p>
            <Grid item xs={12}>
                <Card className="white-content-wrapper" >
                    <p className='p-regular'>
                        The Principal grants to the Licensee exclusive rights to lease and manage the property as set out
                        in this Agreement in respect of the Premises from <b>{moment(agreement?.property_info.commencement_date).format('DD/MM/YYYY')}</b> until
                        this Agreement is terminated by not less than <b>{agreement?.property_info.termination_days}</b> days written notice given by the Principal or the Licensee
                        to the other. Any such termination shall not affect either party's rights accrued or obligations incurred prior to the termination.
                    </p>
                </Card>
            </Grid>
            <p className='p-gray'>B: Authority/duties of licensee</p>
            <Grid item xs={12}>
                <Card className="white-content-wrapper " >
                    <p className='p-regular'>
                        The Principal authorises the Licensee, on behalf of the Principal, from time to time to carry out the duties
                        as set out in Clause 4.1 (a-m inclusive) of Part 2 of this Agreement and for each tenancy to:
                    </p>
                    <ListCard items={dutiesItems} />
                </Card>
            </Grid>
            <p className='p-gray'>C: Licensee's remuneration [clauses 2.1 & 2.2]</p>
            <Grid item xs={12}>
                <Card className="white-content-wrapper" >
                    <Grid container >
                        {remunerationItems.map(item => (
                            <Grid item xs={6} key={item.text} className="blue-header-list-item">
                                <p className='p-small-blue-minmargin'>{item.text}</p>
                                <p className='p-bold-numeric'>{item.sum}</p>
                                {item.note.length > 0 &&
                                    <p className='p-gray-small p-gray-small-with-margin'>{item.note}</p>
                                }
                            </Grid>
                        ))}
                    </Grid>
                </Card>
            </Grid>
            <p className='p-gray'>D: Expences and charges [clause 2.3]</p>
            <Grid item xs={12}>
                <Card className="white-content-wrapper" >
                    <Grid container >
                        {expencesItems.map(item => (
                            <Grid item xs={6} key={item.text} className="blue-header-list-item">
                                <p className='p-small-blue-minmargin'>{item.text}</p>
                                <p className='p-bold-numeric'>{item.sum}</p>
                                {item.note.length > 0 &&
                                    <p className='p-gray-small p-gray-small-with-margin'>{item.note}</p>
                                }
                            </Grid>
                        ))}
                    </Grid>
                </Card>
            </Grid>
            <p className='p-gray'>E: Other Services</p>
            <Grid item xs={12}>
                <Card className="white-content-wrapper" >
                    <Grid container >
                        {otherServicesItems.map(item => (
                            <Grid item xs={6} key={item.text} className="blue-header-list-item">
                                <p className='p-small-blue-minmargin'>{item.text}</p>
                                <p className='p-bold-numeric'>{item.sum}</p>
                                {item.note.length > 0 &&
                                    <p className='p-gray-small p-gray-small-with-margin'>{item.note}</p>
                                }
                            </Grid>
                        ))}
                    </Grid>
                </Card>
            </Grid>
            <p className='p-gray'>F: Advertising and promotion [clause 3.2]</p>
            <Grid item xs={12}>
                <Card className="white-content-wrapper" >
                    <p className='p-small-blue-minmargin'>Manner of Advertising and Promotion:</p>
                    <p className='p-regular'>{agreement?.property_info.manner_of_advertising}</p>
                    <p className='p-small-blue-minmargin'>Signboard</p>
                    <p className='p-regular'>{`${agreement?.property_info.signboard || 'N/A'}`}</p>
                </Card>
            </Grid>
            <p className='p-gray'>G. Inspections [Clause 3.3]</p>
            <Grid item xs={12}>
                <Card className="white-content-wrapper" >
                    <p className='p-regular'>
                        The Principal acknowledges that all prospective tenants will be accompanied by the agent when viewing the premises.
                        The principal acknowledges that the agency may from time to time release keys to persons, such as but
                        not limited to, tradesman to quote or undertake work on the premises.
                    </p>
                </Card>
            </Grid>
            <p className='p-gray'>H: Limit on cost of repairs/maintenance [Clause 4.1(d)]</p>
            <Grid item xs={12}>
                <Card className="white-content-wrapper" >
                    <p className='p-regular'>
                        The agent is authorised to engage appropriately quali!ed tradespersons to effect repairs and maintenance in
                        accordance with the principals obligations to repair (if any) or as otherwise instructed. The agent is authorised
                        to expend the sum of <b>{`$${agreement?.property_info.authorised_maintenance_anyone_item}`}</b> for any one item without the prior approval of the principal.
                    </p>
                </Card>
            </Grid>
            <p className='p-gray'>I: Terms and conditions of tenancy [Clause 4.2]</p>
            <Grid item xs={12}>
                <Card className="white-content-wrapper" >
                    <ListCard items={tenancyItems} />
                </Card>
            </Grid>
            <p className='p-gray'>J: Principal´s outgoings ["the Principal's Outgoings"] [Clause 5.1]</p>
            <Grid item xs={12}>
                <Card className="white-content-wrapper" >
                    <Grid container >
                        {outgoingsItems.map(item => (
                            <Grid key={item.title} item xs={12} sm={6}>
                                <p className='p-small-blue-minmargin' style={{ position: 'relative' }}>
                                    {item.title}
                                    {item.icon &&
                                        <img src="/images/green_ellipse.svg" alt='Green Ellipse' style={{ position: 'absolute', top: '0', right: '4px' }} />
                                    }
                                </p>
                                <p className='p-regular'>{item.text}</p>
                            </Grid>
                        ))}
                        <p className='p-regular'>
                            The Principals shall furnish the agent with the By-laws if applicable within 7 days
                        </p>
                    </Grid>
                </Card>
            </Grid>
            <p className='p-gray'>K: Remittances</p>
            <Grid item xs={12}>
                <Card className="white-content-wrapper" >
                    {remittancesItems.map(item => (
                        <div key={item.text}>
                            <p className='p-small-blue-minmargin'>{item.text}</p>
                            <p className='p-regular'>{item.value}</p>
                        </div>
                    ))}
                </Card>
            </Grid>
            <p className='p-gray'>L: Disclosure of Rebates, Discounts and Commissions [Clause 12]</p>
            <Grid item xs={12}>
                <Card className="white-content-wrapper" >
                    <p className='p-regular'>
                        [If no rebates etc. are received write 'NIL' on each box] The Principal consents to the agent receiving
                        the rebates/discounts and commissions below.
                    </p>
                    <p className='p-small-blue-minmargin'>Name of Source of Rebate</p>
                    <p className='p-regular'>{agreement?.property_info.source_of_rebate}</p>
                    <p className='p-small-blue-minmargin'>Estimated Amount of Rebates, Discounts or Commissions</p>
                    <p className='p-regular'>{`$${agreement?.property_info.estimated_of_discounts}`}</p>
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
