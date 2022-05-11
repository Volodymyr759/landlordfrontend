import { Stepper, Step, StepLabel } from '@mui/material';
import { Props } from './types';
import './styles.css';

export const MuiStepper = ({ activeStep }: Props) => {
    return (
        <div className='stepper-wrapper'>
            <Stepper activeStep={activeStep}>
                {
                    [0, 1, 2, 3, 4, 5].map((step) => (
                        <Step key={step}>
                            <StepLabel icon={
                                step <= activeStep ?
                                    <img src='/images/pink_ellipse.svg' alt='Pink Ellipse' />
                                    :
                                    <img src='/images/gray_ellipse.svg' alt='Gray Ellipse' />
                            }
                            />
                        </Step>
                    ))}
            </Stepper>
        </div>
    );
};
