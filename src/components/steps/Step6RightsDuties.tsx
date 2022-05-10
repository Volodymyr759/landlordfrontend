import { Card, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/redux';
import { incrementStep, decrementStep } from '../../store/steps/ActionCreators';
import { FooterTwoBtn } from '../Footers/FooterTwoBtn/FooterTwoBtn';
import { Header } from '../Header/Header';
import { MuiGrid } from '../MuiGrid/MuiGrid';
import "./styles.css";

export const Step6RightsDuties = () => {
    const dispatch = useAppDispatch();
    const { agreement } = useAppSelector(state => state.agreementReducer);

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

    return (
        <MuiGrid appearance='grid-light-gray'>
            <Header
                onGoBack={() => dispatch(decrementStep())}
                onPhone={() => console.log('onPhone is not implemented yet')}
            />
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
                    <p className='p-regular'>
                        Not iplemented yet
                    </p>
                </Card>
            </Grid>
            <p className='p-gray'>D: Expences and charges [clause 2.3]</p>
            <Grid item xs={12}>
                <Card className="white-content-wrapper" >
                    <p className='p-regular'>
                        Not iplemented yet
                    </p>
                </Card>
            </Grid>
            <p className='p-gray'>E: Other Services</p>
            <Grid item xs={12}>
                <Card className="white-content-wrapper" >
                    <p className='p-regular'>
                        Not iplemented yet
                    </p>
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
                <Card className="white-content-wrapper " >
                    <List>
                        {tenancyItems.map(item => (
                            <ListItem
                                key={item.text}
                                alignItems="flex-start"
                            >
                                <ListItemIcon style={{ 'minWidth': '20px', 'alignItems': 'self-start', 'paddingTop': '4px', 'marginTop': '0' }}>
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
                    <p className='p-regular'>
                        Not iplemented yet. Make green ellipses
                    </p>
                </Card>
            </Grid>
            <p className='p-gray'>K: Remittances</p>
            <Grid item xs={12}>
                <Card className="white-content-wrapper" >
                    {/* todo: replace by List */}
                    <p className='p-small-blue-minmargin'>Cheque to accompany Statement</p>
                    <p className='p-regular'>23433</p>
                    <p className='p-small-blue-minmargin'>Pay to the credit</p>
                    <p className='p-regular'>54223</p>
                    <p className='p-small-blue-minmargin'>Bank</p>
                    <p className='p-regular'>54223</p>
                    <p className='p-small-blue-minmargin'>Branch Address</p>
                    <p className='p-regular'>54223</p>
                    <p className='p-small-blue-minmargin'>Branch (BSB) and Account No.</p>
                    <p className='p-regular'>54223 insurance company</p>
                </Card>
            </Grid>
            <p className='p-gray'>J: Principal´s outgoings ["the Principal's Outgoings"] [Clause 5.1]</p>
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
