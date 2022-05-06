import { Container, Grid } from '@mui/material';
import React, { FC } from 'react';
import './styles.css'

type Props = {
    children: React.ReactNode;
};

const MainLayout: FC<Props> = ({ children }) => {
    return (
        <Container maxWidth="xl" style={{
            'backgroundColor': 'white',
            'minHeight': '722px',
            'backgroundImage': 'url(https://s3propertyspace-dev.s3.eu-central-1.amazonaws.com/builds/ps_lease/1650555570/static/media/error-bg.99c52ecf.svg)',
            'backgroundRepeat': 'no-repeat',
            'maxWidth': '991px'
        }}>
            <Grid item xs={12}>
                <img
                    src='https://s3propertyspace-dev.s3.eu-central-1.amazonaws.com/builds/ps_lease/1650555570/static/media/logo-with-text.55fc870d.svg'
                    alt='Logo'
                    className='logo'
                />
            </Grid>
            {children}
        </Container>
    );
};

export default MainLayout;