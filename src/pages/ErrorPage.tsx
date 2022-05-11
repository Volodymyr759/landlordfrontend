import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { BASE_URL } from '../path';
import { Button } from '../components/Button/Button';
import '../index.css';

export const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyItems="center"
            style={{ 'minHeight': '100vh' }}
        >
            <Grid item xs={3}>
                <Card className="card-wrapper" >
                    <h1 className='text-primary-large'>404</h1>
                    <h2 className='text-primary text-centered'>Not Found</h2>
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
    )

};

export default ErrorPage;