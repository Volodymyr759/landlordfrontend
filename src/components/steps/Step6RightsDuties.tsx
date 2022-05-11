import { Card, Grid, List, ListItem, ListItemIcon } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/redux';
import { incrementStep, decrementStep } from '../../store/steps/ActionCreators';
import { FooterTwoBtn } from '../Footers/FooterTwoBtn/FooterTwoBtn';
import { Header } from '../Header/Header';
import { MuiGrid } from '../MuiGrid/MuiGrid';
import { MuiStepper } from '../MuiStepper/MuiStepper';
import "./styles.css";

export const Step6RightsDuties = () => {
    const dispatch = useAppDispatch();
    const { agreement } = useAppSelector(state => state.agreementReducer);
    const { stepNumber } = useAppSelector(state => state.stepReducer);

    const dutiesItems = [
        { text: 'Sign tenancy agreement on behalf of the Principal' },
        { text: 'Select tenants' },
        { text: 'Submit tenants to Principal' }
    ]

    const tenancyItems = [
        { text: 'its fixed term is to be not less than 48 weeks and not more than 96 Week', icon: <span>a.</span> },
        { text: 'the rent is to be $600 per week payable in advance', icon: <span>b.</span> },
        { text: 'a rental bond in a sum equal to 12 weeks rent to be paid', icon: <span>c.</span> },
        { text: 'the Premises are to be let 12/05/2021', icon: <span>d.</span> }
    ]

    const remunerationItems = [
        { text: 'Effecting Initial Leasing - a fee of:', sum: '$150', note: '' },
        { text: 'Lease Renewal - a fee of:', sum: '$230', note: '' },
        { text: 'Management Fee: An amount equal to', sum: '$220', note: '' },
        { text: 'Residential Tenancy Agreement Preparation fee: ', sum: '$180', note: '[exclusive of GST]' },
        { text: 'An Administration fee of:', sum: '$150', note: '[exclusive of GST] payable monthly.' },
        { text: 'Lease re-letting fee:', sum: '$170', note: '[exclusive of GST]' }
    ]

    const expencesItems = [
        { text: 'Advertising per leasing - at cost but not exceeding', sum: '$150', note: '' },
        { text: 'Office Expenses [Clause 1.2] as incurred but not exceeding', sum: '$230', note: '[Per month]' },
        { text: 'Government and other imposts [Clause 1.1] as charged.', sum: '$180', note: '[exclusive of GST]' },
        { text: 'Other:', sum: '$220', note: '[Per year]' }
    ]

    const otherServicesItems = [
        { text: 'Inspection of Premises/Report Fee', sum: '$150', note: '' },
        { text: 'Arranging Repairs or Maintenance', sum: '$230', note: '' },
        { text: 'Negotiating Rent Variation', sum: 'N/A', note: '' },
        { text: 'Service of Notice or Summons:', sum: '$220', note: '' },
        { text: 'Appearing at Court/Tribunal', sum: '$180', note: '' },
        { text: 'Applying for a Tribunal or other Order', sum: '$230', note: '' },
        { text: 'Preparation and Filing or Defence of Stay or Internal Appeal at NCAT', sum: '$180', note: '[per hour]' },
        { text: 'Appearing at NCAT before the Appeal Panel', sum: '$220', note: '[per hour]' },
    ]

    const remittancesItems = [
        { text: 'Cheque to accompany Statement', value: '23433' },
        { text: 'Pay to the credit', value: '54223' },
        { text: 'Bank', value: '54223' },
        { text: 'Branch Address', value: '54223' },
        { text: 'Branch (BSB) and Account No.', value: '54223 insurance company' }
    ]

    const outgoingsItems = [
        { title: 'Council Rates No.', text: '23433', icon: true },
        { title: 'Water/Sewerage charges No', text: '54223', icon: true },
        { title: 'Land Tax  Assessment No.', text: '54223', icon: true },
        { title: 'Insurance Premiums Policy Number & Company', text: '54223', icon: true },
        { title: 'Strata Title/Community Title Levies Not', text: '32543543', icon: true },
        { title: 'Strata Managing Agentt', text: 'John Smith', icon: false },
        { title: 'Address', text: '34 Fake Address, NSW', icon: false },
        { title: 'Phone No.', text: '0414 334 889', icon: false },
        { title: 'Fax', text: '0414 334 889', icon: false },
        { title: 'Email', text: 'johnsmith@strata.com', icon: false },
        { title: 'Other', text: 'N/A', icon: false }
    ]

    return (
        <MuiGrid appearance='grid-light-gray'>
            <Header
                onGoBack={() => dispatch(decrementStep())}
                onPhone={() => console.log('onPhone is not implemented yet')}
            />
            <MuiStepper activeStep={stepNumber - 5} />
            <p className='p-gray'>PART 1: The particulars / Property</p>
            <Grid item xs={12}>
                <Card className="white-content-wrapper text-centered" >
                    <p><img src="/images/identification-card_house.svg" alt="Identification Card" /></p>
                    <p className='p-small-blue'>PROPERTY (“the Property)</p>
                    <p className='p-regular'>{agreement?.land_lord.notice_address}</p>
                </Card>
            </Grid>
            <p className='p-gray'>A: Grant of agency rights</p>
            <Grid item xs={12}>
                <Card className="white-content-wrapper" >
                    <p className='p-regular'>
                        The Principal grants to the Licensee exclusive rights to lease and manage the property as set out
                        in this Agreement in respect of the Premises from <b>12/05/2021</b> until this Agreement is terminated
                        by not less than <b>12/05/2022</b> days written notice given by the Principal or the Licensee to the other.
                        Any such termination shall not affect either party's rights accrued or obligations incurred prior
                        to the termination.
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
                    <List>
                        {
                            dutiesItems.map(item => (
                                <ListItem
                                    key={item.text}
                                >
                                    <ListItemIcon style={{ 'minWidth': '20px' }}>
                                        <img src="/images/ellipse_16.svg" alt="Ellipse icon" />
                                    </ListItemIcon>
                                    <span className='p-regular-nomargin'>{item.text}</span>
                                </ListItem>
                            ))
                        }
                    </List>
                </Card>
            </Grid>
            <p className='p-gray'>C: Licensee's renumaration [clauses 2.1 & 2.2]</p>
            <Grid item xs={12}>
                <Card className="white-content-wrapper" >
                    <Grid container >
                        {remunerationItems.map(item => (
                            <Grid item xs={6} key={item.text} style={{ 'margin': '7px 0' }} >
                                <p className='p-small-blue-minmargin'>{item.text}</p>
                                <p className='p-bold-numeric'>{item.sum}</p>
                                {item.note.length > 0 &&
                                    <p className='p-gray-small' style={{ 'margin': '4px 16px' }}>{item.note}</p>
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
                            <Grid item xs={6} key={item.text} style={{ 'margin': '7px 0' }} >
                                <p className='p-small-blue-minmargin'>{item.text}</p>
                                <p className='p-bold-numeric'>{item.sum}</p>
                                {item.note.length > 0 &&
                                    <p className='p-gray-small' style={{ 'margin': '4px 16px' }}>{item.note}</p>
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
                            <Grid item xs={6} key={item.text} style={{ 'margin': '7px 0' }} >
                                <p className='p-small-blue-minmargin'>{item.text}</p>
                                <p className='p-bold-numeric'>{item.sum}</p>
                                {item.note.length > 0 &&
                                    <p className='p-gray-small' style={{ 'margin': '4px 16px' }}>{item.note}</p>
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
                    <p className='p-regular'>John Smith</p>
                    <p className='p-small-blue-minmargin'>Signboard</p>
                    <p className='p-regular'>N/A</p>
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
                        to expend the sum of <b>$550</b> for any one item without the prior approval of the principal.
                    </p>
                </Card>
            </Grid>
            <p className='p-gray'>I: Terms and conditions of tenancy [Clause 4.2]</p>
            <Grid item xs={12}>
                <Card className="white-content-wrapper" >
                    <List>
                        {tenancyItems.map(item => (
                            <ListItem
                                key={item.text}
                                alignItems="flex-start"
                            >
                                <ListItemIcon className='list-item'>
                                    {item.icon}
                                </ListItemIcon>
                                <span className='p-regular-nomargin'>{item.text}</span>
                            </ListItem>
                        ))}
                    </List>
                </Card>
            </Grid>
            <p className='p-gray'>J: Principal´s outgoings ["the Principal's Outgoings"] [Clause 5.1]</p>
            <Grid item xs={12}>
                <Card className="white-content-wrapper" >
                    <Grid container >
                        {outgoingsItems.map(item => (
                            <Grid key={item.title} item xs={12} sm={6}>
                                <p className='p-small-blue-minmargin' style={{ 'position': 'relative' }}>
                                    {item.title}
                                    {item.icon &&
                                        <img src="/images/green_ellipse.svg" alt='Green Ellipse' style={{ 'position': 'absolute', 'top': '0', 'right': '4px' }} />
                                    }
                                </p>
                                <p className='p-regular'>John Smith</p>
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
            <p className='p-gray'>L: Principal´s outgoings ["the Principal's Outgoings"] [Clause 5.1]</p>
            <Grid item xs={12}>
                <Card className="white-content-wrapper" >
                    <p className='p-regular'>
                        [If no rebates etc. are received write 'NIL' on each box] The Principal consents to the agent receiving
                        the rebates/discounts and commissions below.
                    </p>
                    <p className='p-small-blue-minmargin'>Name of Source of Rebate</p>
                    <p className='p-regular'>John Smith</p>
                    <p className='p-small-blue-minmargin'>Estimated Amount of Rebates, Discounts or Commissions</p>
                    <p className='p-regular'>$1,500</p>
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
