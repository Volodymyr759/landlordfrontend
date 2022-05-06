import { Container } from '@mui/material';
import React, { FC } from 'react';

type Props = {
    children: React.ReactNode;
};

const StepLayout: FC<Props> = ({ children }) => {
    return (
        <Container maxWidth="xl" style={{
            'backgroundColor': 'transparent',
            'minHeight': '722px',
            'maxWidth': '991px'
        }}>
            {children}
        </Container>
    );
};

export default StepLayout;