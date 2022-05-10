import { Accordion, AccordionDetails, AccordionSummary, Card, Grid, List, ListItem, ListItemIcon, ListItemText, Snackbar } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useAppDispatch, useAppSelector } from '../../store/redux';
import { incrementStep, decrementStep } from '../../store/steps/ActionCreators';
import { FooterTwoBtn } from '../Footers/FooterTwoBtn/FooterTwoBtn';
import { Header } from '../Header/Header';
import { MuiGrid } from '../MuiGrid/MuiGrid';
import "./styles.css";
import { Button } from '../Button/Button';
import { useState } from 'react';

export const Step8InspectionReport = () => {
    const dispatch = useAppDispatch();
    const { agreement } = useAppSelector(state => state.agreementReducer);
    const [open, setOpen] = useState<boolean>(false);

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
                onPhone={() => console.log('onPhone is not implemented yet')}
            />
            <p className='p-gray'>Propery inspection report</p>
            <Grid item xs={12}>
                <Card className="white-content-wrapper" >
                    <p className='text-centered'><img src="/images/check-2_1.svg" alt="Identification Card" /></p>
                    {/* todo: replace by List if possible due to logic/buttons */}
                    <Accordion>
                        <AccordionSummary
                            key={'accordion1'}
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <span className='p-regular'>Description of property</span>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p className='p-regular-nomargin'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </p>
                            <div className='p-regular-nomargin text-centered'>
                                <Button
                                    onClick={() => {
                                        console.log('onClick is not implemented yet');
                                        setOpen(true);
                                    }}
                                    appearance="primary"
                                >
                                    Agree
                                </Button>
                                <Snackbar open={open} message='This Agree button is not fully implemented yet' autoHideDuration={5000} onClose={handleClose} />
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            key={'accordion2'}
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <span className='p-regular'>Smoke Alarms (Residential)</span>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p className='p-regular-nomargin'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            key={'accordion3'}
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <span className='p-regular'>Condition of interior</span>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p className='p-regular-nomargin'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            key={'accordion4'}
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <span className='p-regular'>Fitting, Fixtures</span>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p className='p-regular-nomargin'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            key={'accordion5'}
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <span className='p-regular'>Condition of exterior</span>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p className='p-regular-nomargin'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </p>
                        </AccordionDetails>
                    </Accordion>
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
