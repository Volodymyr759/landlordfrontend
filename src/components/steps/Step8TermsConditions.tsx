import { useEffect, useState } from 'react';
import { Card, Grid } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/redux';
import { incrementStep, decrementStep } from '../../store/steps/ActionCreators';
import { FooterTwoBtn } from '../Footers/FooterTwoBtn/FooterTwoBtn';
import { Header } from '../Header/Header';
import { MuiGrid } from '../MuiGrid/MuiGrid';
import { ListCard } from '../ListCard/ListCard';
import { MuiStepper } from '../MuiStepper/MuiStepper';
import PhoneDialog from '../PhoneDialog/PhoneDialog';
import "./styles.css";

export const Step8TermsConditions = () => {
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

    const definitionsItems = [
        {
            content: <span className='p-regular-nomargin'>
                "Government and other imposts" includes State and Federal Taxes and any tax in the nature of goods and services tax
                and any other taxes or charges debited by banks or financial institutions against the account of the Licensee
                in relation to the letting or management of the Premises.
            </span>,
            icon: <span>1.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                "O ce Expenses" means bank charges, postage, and phone call charges, statutory fees and travel and out-of-pocket
                expenses related to the letting or management of the Premises.
            </span>,
            icon: <span>2.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                Words importing one gender include the other and singular only include the plural and vice versa.
            </span>,
            icon: <span>3.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                The word "Licensee" and the word "Agent" where appearing mean the same and may be used interchangeably in this Agreement.
            </span>,
            icon: <span>4.</span>
        }
    ]

    const remunerationSubItems1 = [
        {
            content: <span className='p-regular-nomargin'>
                during the Exclusive Agency Period the Principal enters into an Agreement to Lease or
                a Tenancy Agreement for the letting of the Property, or of an interest in the Property,
                to any person (including a co-owner), whether or not that person was introduced to the Principal
                or to the Property by the Licensee.
            </span>,
            icon: <span>a.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                after termination of this Agreement, a tenant found or chosen by the Licensee during
                the currency of this Agreement, pays a holding deposit, signs a Lease or Tenancy Agreement
                or pays rent or enters into possession of the premises, whichever occurs first.
            </span>,
            icon: <span>b.</span>
        }
    ]

    const remunerationSubItems2 = [
        {
            content: <span className='p-regular-nomargin'>
                immediately upon the Lessee entering into an Agreement to Lease of the Property; or
            </span>,
            icon: <span>a.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                the Lessee procures any other person to execute an Agreement to Lease or a Lease of the Property;
            </span>,
            icon: <span>b.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                pays rent for the Property, or
            </span>,
            icon: <span>c.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                procures any other person to pay rent of the Property in any capacity, or
            </span>,
            icon: <span>d.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                if the Principal permits the Lessee to enter into possession of the Property or
                the Lessee procures any other person to enter into possession of the Property.
            </span>,
            icon: <span>e.</span>
        }
    ]

    const remunerationItems = [
        {
            content: <span className='p-regular-nomargin'>
                Licensee's Remuneration - For services performed under this agreement the Licensee shall be entitled to
                the remuneration set out in Item C of the Particulars ("the Remuneration") and in relation to each letting
                of the Premises the Licensee will become entitled to the remuneration if:
                <ListCard items={remunerationSubItems1} />
            </span>,
            icon: <span>1.</span>
        },
        {
            content: <div>
                <span className='p-regular-nomargin'>
                    When Remuneration is Due and Payable - The leasing fee is due and payable by the Principal to the Licensee
                    upon the happening of any of the following events:
                    <ListCard items={remunerationSubItems2} />
                </span>
                <span className='p-regular-nomargin'>
                    The Management and Administration Fee will be due and payable on the date of the monthly statement
                    referred to in clause 6.1 which includes those fees and the Licensee is authorised to deduct those
                    fees from monies received on behalf of the Principal.
                </span>
            </div>,
            icon: <span>2.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                Expenses and Charges and Other Services - The Licensee is entitled to reimbursement for the expenses and
                charges and fees on other services set out in Item D of the Particulars as and when they are incurred by
                the Licensee. Such services and amounts cannot be varied except with the agreement in writing of the Principal.
            </span>,
            icon: <span>3.</span>
        }
    ]

    const otherServicesItems = [
        {
            content: <span className='p-regular-nomargin'>
                Other Services - If required, the Licensee will carry out any of the services set out in Item E of
                the Particulars for the fee set out in that term.
            </span>,
            icon: <span>1.</span>,
        },
        {
            content: <span className='p-regular-nomargin'>
                The Licensee is authorised to advertise or promote from time to time the availability of the Premises
                for letting as set out in Item F of the Particulars and is entitled to reimbursement for the cost as and when the same is incurred.
            </span>,
            icon: <span>2.</span>,
        },
        {
            content: <span className='p-regular-nomargin'>
                Inspections - Any prospective tenant is entitled to inspect the Premises in the circumstances
                set out in Item G of the Particulars.
            </span>,
            icon: <span>3.</span>
        }
    ]

    const authoritySubItems1 = [
        {
            content: <span className='p-regular-nomargin'>
                Obtaining references from prospective tenants, arranging inspections of the property by prospective
                tenants and choosing a tenant,
            </span>,
            icon: <span>a.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                Entering into and signing a residential tenancy agreement
                (specifying the term for which the property may be let),
            </span>,
            icon: <span>b.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                Undertaking inspections of the property,
            </span>,
            icon: <span>c.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                Effecting repairs to and maintaining the property or engaging tradespersons to do so and detailing
                limitations on expenditure that may be incurred by the agent without obtaining the approval of the owner,
            </span>,
            icon: <span>d.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                Paying disbursements and expenses incurred in connection with the agent's management of the property,
            </span>,
            icon: <span>e.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                Collecting rent
            </span>,
            icon: <span>f.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                Receiving, claiming and disbursing rental bond money,
            </span>,
            icon: <span>g.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                Serving notices for breach of the tenancy agreement or to terminate the residential tenancy agreement,
            </span>,
            icon: <span>h.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                Undertaking the necessary steps to obtain vacant possession and recover any money owing to
                the owner in relation to the tenancy of the property,
            </span>,
            icon: <span>i.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                Representing the owner in any tribunal or court proceedings in respect of the tenancy of the property,
            </span>,
            icon: <span>j.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                Paying accounts for amounts owing in relation to the property (for example, water rates and charges,
                council rates, maintenance expenses and owners corporation levies),
            </span>,
            icon: <span>k.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                Advertising the property for letting or re-letting,
            </span>,
            icon: <span>l.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                Reviewing the rent at the end of a tenancy.
            </span>,
            icon: <span>m.</span>
        },
    ]

    const authorityItems = [
        {
            content: <span className='p-regular-nomargin'>
                Subject to the limitations contained in this agreement the Principal authorises the Licensee,
                on behalf of the Principal, from time to time to duties as set out below:
                <ListCard items={authoritySubItems1} />
            </span>,
            icon: <span>1.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                Unless the Principal otherwise agrees or directs the matters stated in Item I of the Particulars
                are to apply to each letting of the Premises.
            </span>,
            icon: <span>2.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                The Principal, without limiting the operation of this Agreement, approves for use under this Agreement
                the forms of residential tenancy agreement and leases (completed to accord with this Agreement and otherwise
                completed as the Licensee considers appropriate) produced from time to time by industry bodies.
            </span>,
            icon: <span>3.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                The powers and authorities of the Licensee under this Agreement may be exercised through the employees
                and agents of the Licensee.
            </span>,
            icon: <span>4.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                The agent is authorised to utilise the services of another licensed agent to perform the duties and services
                as set out in this agreement, but only one licensees remuneration (Part 1 Item C and Part 2 Clause 2) applies.
            </span>,
            icon: <span>5.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                The agent is authorised to sign building contracts on behalf of the home owner as prescribed under
                the Home Building Act (NSW) 1989 for all work over $5000.00 including parts and labour.
            </span>,
            icon: <span>6.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                The agent is authorised to engage appropriately quali!ed or licensed tradespeople to effect emergency repairs
                as de!ned in the Residential Tenancy Act 2010(NSW). Furthermore, the agent can authorise expenditure up to $1000
                as per the Residential Tenancy Regulation. Account paid from the principal money on trust.
            </span>,
            icon: <span>7.</span>
        }
    ]

    const outgoingsSubItems1 = [
        {
            content: <span className='p-regular-nomargin'>
                to pay the Principal's Outgoings stated in Item J of the Particulars and the costs
                of repairs and maintenance of the Premises out of monies received on behalf of the Principal, and
            </span>,
            icon: <span>a.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                to deduct and retain from monies received on behalf of the Principal the amounts of the remuneration,
                the expenses, charges and costs for which the Licensee is entitled to reimbursement (including
                the Principal’s Outgoings and costs of repairs and maintenance of the Premises, if any, paid by
                the Licensee out of the Licensee’s own monies) and all fees and other amounts to which the Licensee
                is entitled under this Agreement.
            </span>,
            icon: <span>b.</span>
        }
    ]

    const outgoingsItems = [
        {
            content: <span className='p-regular-nomargin'>
                The Principal authorises and requests the Licensee from time to time
                <ListCard items={outgoingsSubItems1} />
            </span>,
            icon: <span>1.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                If for any reason the Licensee is unable to deduct and retain from monies received on behalf
                of the Principal any amount referred to in clause 5.1 (b) then the Principal will pay and agrees to pay
                that amount to the Licensee on demand within 14 days.
            </span>,
            icon: <span>2.</span>
        }
    ]

    const warrantiesItems = [
        {
            content: <span className='p-regular-nomargin'>
                The Principal warrants to the Licensee that the Principal has authority to enter into this agreement
                with the Licensee.
            </span>,
            icon: <span>1.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                The Principal warrants that the premises have been released from rent control by 5A Lease Registration
                or through having come vacant on or after 1st January 1986. for letting as set out in Item F of
                the Particulars and is entitled to reimbursement for the cost as and when the same is incurred.
            </span>,
            icon: <span>2.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                The Principal warrants that the property is individually metered for water and electricity and contains
                "Water Efficiency Measures" as prescribed in the Regulations under s.39. The Principal shall furnish
                the Water efficiency certi!cate within 7 days on the agent.
            </span>,
            icon: <span>3.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                The principal shall keep the premises insured. The principal should seek independent !nancial advice about
                building insurance, contents insurance, public liability, voluntary workers insurance and Landlord protection insurance.
            </span>,
            icon: <span>4.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                The Principal warrants that the property complies with the Swimming Pool Amendment Act (NSW) 2012. The Principal
                shall furnish Swimming pool compliance certi!cate on the agent within 7 days (if a pool exists at the property).
            </span>,
            icon: <span>5.</span>
        }
    ]

    const privacyNoticesItems = [
        {
            content: <span className='p-regular-nomargin'>
                The Privacy Act 1988 (Cth) regulates the collection, use, disclosure and maintenance of personal information
                by the Agent from the Principal. The information is collected by and pursuant to this Agreement.
            </span>,
            icon: <span>1.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                The information collected enables the Agent to act for and on behalf of the Principal and to carry out effectively
                the Agents obligations under and pursuant to the terms of this Agreement and to perform and promote the Real Estate Agency
                services of the Agent. Some of the information is required by law and without it the Agent may not be able
                to act for and on behalf of the Principal.
            </span>,
            icon: <span>2.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                The intended recipients of the information are any person to whom, and body or agency to which, it is usual
                to disclose the information to enable the Agent to perform the services under or pursuant to this Agreement,
                Real Estate Agency services and as otherwise permitted by the Privacy Act 1988, including potential tenants,
                actual or potential landlords, contractors (tradespeople), print and electronic media, internet, State or
                Federal authorities, or organisations (as well as owners’ corporations and community associations).
            </span>,
            icon: <span>3.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                The Principal has the right of access the information and may do so by contacting the Agent. The Principal has
                the right to correction of the information if it is not accurate, up-to-date and complete.
            </span>,
            icon: <span>4.</span>
        }
    ]

    const materialFactsSubItems = [
        {
            content: <span className='p-regular-nomargin'>
                a notice of intention to issue a fire safety order, or a fire safety order has been issued requiring
                rectification of external combustible cladding
            </span>,
            icon: <span>j.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                a notice of intention to issue a building product rectification order or a building rectification order
                has been issued requiring rectification of external combustible cladding
            </span>,
            icon: <span>jj.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                a development application or complying development certificate application has been lodged for rectification
                of the building regarding external combustible cladding
            </span>,
            icon: <span>jjj.</span>
        },
    ]

    const materialFactItems = [
        {
            content: <span className='p-regular-nomargin'>
                the residential premises have been subject to flooding or bush fire in the preceding 5 years,
            </span>,
            icon: <span>a.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                the residential premises are subject to significant health or safety risks that are not apparent
                to a reasonable person on inspection of the premises,
            </span>,
            icon: <span>b.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                the residential premises are listed on the LFAI Register,
            </span>,
            icon: <span>c.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                the residential premises have been the scene of a serious violent crime within the preceding 5 years,
                Event date reported 12/05/2020
            </span>,
            icon: <span>d.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                the residential premises have been used for the purpose of manufacture or cultivation of a prohibited
                drug or plant within the last 2 years,
            </span>,
            icon: <span>e.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                council waste services will be provided to the tenant on a different basis than is generally applicable
                to residential premises within the area of the council,
            </span>,
            icon: <span>f.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                that because of the zoning of the land, or other laws applying to development on the land, the tenant
                will not be able to obtain a residential parking permit (in an area where only paid parking is provided),
            </span>,
            icon: <span>g.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                the existence of a driveway or walkway on the residential premises which other persons are legally entitled
                to share with the tenant.
            </span>,
            icon: <span>h.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                if the premises comprise or include a strata lot in a strata scheme where there is scheduled rectification
                work or major repairs to the common property during the fixed term.
            </span>,
            icon: <span>i.</span>
        },
        {
            content: <span className='p-regular-nomargin'>
                The residential premises is part of a building in relation to which:
                <ListCard items={materialFactsSubItems} />
            </span>,
            icon: <span>j.</span>
        }
    ]

    return (
        <MuiGrid appearance='grid-light-gray'>
            <Header
                onGoBack={() => dispatch(decrementStep())}
                onPhone={onClickPhone}
            />
            <MuiStepper activeStep={stepNumber - 6} />
            <p className='p-gray'>PART 2 | Terms and conditions of residential exlusive management agency agreement</p>
            <Grid item xs={12}>
                <Card className="white-content-wrapper" >
                    <p className='text-centered'>
                        <img src="/images/terms-and-conditions_1.svg" alt="Identification Card" />
                    </p>
                    <ListCard title='1. DEFINITIONS' items={definitionsItems} />
                    <p className='p-small-blue-minmargin'>2. LICENSEE'S REMUNERATION, EXPENSES AND CHARGES</p>
                    <ListCard items={remunerationItems} />
                    <ListCard title='3. OTHER SERVICES, ADVERTISING, PROMOTION AND INSPECTION' items={otherServicesItems} />
                    <ListCard title='4. AUTHORITY OF LICENSEE TO MANAGE' items={authorityItems} />
                    <ListCard title="5. PRINCIPAL\'S OUTGOINGS" items={outgoingsItems} />
                    <ListCard title='6. ACCOUNTING' items={[
                        {
                            content: <span className='p-regular-nomargin'>
                                Unless the Principal otherwise reasonably directs, the Licensee shall send to the Principal a monthly
                                statement showing, in respect of the period covered by the statement, particulars of the monies received
                                and payments made, and the expenses, charges and costs incurred, on behalf of the Principal and
                                the Remuneration and fees to which the Licensee has become entitled.At the same time any balance
                                will be remitted as stated in Item K of the Particulars.
                            </span>,
                            icon: <span>1.</span>
                        }
                    ]} />
                    <ListCard title='7. WARRANTY BY THE PRINCIPAL' items={warrantiesItems} />
                    <ListCard title='8. INDEMNITY' items={[
                        {
                            content: <span className='p-regular-nomargin'>
                                The Principal will keep the Licensee indemni!ed against all actions, claims and demands brought against,
                                and all costs, losses and liabilities incurred by the Licensee in the course of or arising from
                                the exercise or proper performance of the Licensee’s authorities or duties under this agreement.
                            </span>,
                            icon: <span>1.</span>
                        }
                    ]} />
                    <ListCard title='9. GST' items={[
                        {
                            content: <span className='p-regular-nomargin'>
                                The Principal must pay any goods and services tax payable at the then current rate in respect of anything
                                done or supplied by the Licensee under this Agreement, or reimburse the Licensee on demand for any such
                                tax paid by the Licensee. If at any time the GST rate is changed, the parties agree that the fees
                                set out in this agreement will be amended in accordance with the rate change.
                            </span>,
                            icon: <span>1.</span>
                        }
                    ]} />
                    <ListCard title='10. PRIVACY NOTICE' items={privacyNoticesItems} />
                    <p className='p-small-blue-minmargin'>11. FINANCIAL AND INVESTMENT ADVICE</p>
                    <p className='p-regular'>
                        <b>
                            WARNING: Any financial or investment advice provided to the Principal by the Licensee is general advice
                            and does not take into account the individual circumstances of the Principal or the Principal’s objectives,
                            !nancial situation or needs. The Principal must seek and rely on his/her/its own independent financial and
                            investment advice from an appropriate licensed financial adviser.
                        </b>
                    </p>
                    <p className='p-small-blue-minmargin'>12. REBATES, DISCOUNTS OR COMMISSIONS</p>
                    <p className='p-regular'>
                        All rebates, discounts or commissions that the Licensee will or may receive in respect of the expenses charged
                        under this Agreement and the estimated amount of those rebates, discounts or commissions to the extent that
                        the amount can reasonably be estimated are as set out in Item L of the Particulars. The Principal agrees that
                        the Licensee is entitled to retain all such rebates, discounts, commissions and other benefits.
                    </p>
                    <p className='p-small-blue-minmargin'>13. MATERIAL FACT</p>
                    <p className='p-regular'>
                        The agent must comply with the disclosure requirements of s.52 Property and Stock Agents Act 2002 (NSW)
                        and S.26 (1) Residential Tenancies Act 2010. These legislative provisions relate to misrepresentation
                        of a material fact. This can occur when there is concealment or false and misleading representations
                        involving "a material fact". A material fact is a fact that would be important to a reasonable person
                        in deciding whether or not to proceed with a particular transaction, this can include but is not limited
                        to any stigmatizing event including a death.
                    </p>
                    <p className='p-regular'>
                        It is not the intention of the Principal to sell the property prior to the commencement of
                        any residential tenancy agreement.
                    </p>
                    <p className='p-small-blue-minmargin'>Material Fact and Circumstances</p>
                    <p className='p-regular'>
                        The Lessor alarms that the residential property has not been subject to the following in the preceding 5 years:
                    </p>
                    <ListCard items={materialFactItems} />
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
