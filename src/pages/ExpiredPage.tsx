import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { BASE_URL } from '../path';
import { Oops } from '../components/Oops/Oops';
import { Button } from '../components/Button/Button';
import '../index.css';

const ExpiredPage = () => {
    const navigate = useNavigate();

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyItems="center"
            className="grid-large"
        >
            <Grid item xs={3}>
                <Card className="card-wrapper text-centered" >
                    <h1><Oops /></h1>
                    <h2 className='text-primary'>This link has expired</h2>
                    <h3>Please contact your property manager</h3>
                    <p className='text-centered'>
                        <Button
                            appearance='primary'
                            onClick={() => navigate(BASE_URL)}
                        >
                            Home
                        </Button>
                    </p>
                </Card>
            </Grid>
        </Grid>
    );
};

export default ExpiredPage;