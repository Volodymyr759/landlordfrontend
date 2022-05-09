import { Container } from '@mui/material';
import React, { FC } from 'react';
import './styles.css';

type Props = {
    children: React.ReactNode;
};

const StepLayout: FC<Props> = ({ children }) => {
    return (
        <Container 
        // maxWidth="xl" 
        className="step-layout-container"
        >
            {children}
        </Container>
    );
};

export default StepLayout;