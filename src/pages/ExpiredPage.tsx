import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { Oops } from '../components/Oops/Oops';
import '../index.css';

const ExpiredPage = () => {
    return (
        <>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyItems="center"
                style={{ 'minHeight': '100vh' }}
            >
                <Grid item xs={3}>
                    <Card className="card-wrapper text-centered" >
                        <h1><Oops /></h1>
                        <h2 className='text-primary'>This link has expired</h2>
                        <h3>Please contact your property manager</h3>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
};

export default ExpiredPage;