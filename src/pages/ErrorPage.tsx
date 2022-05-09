import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import '../index.css';

const ErrorPage = () => (
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
                <Card className="card-wrapper" >
                    <h1 className='text-primary-large'>404</h1>
                    <h2 className='text-primary text-centered'>Not Found</h2>
                </Card>
            </Grid>
        </Grid>
    </>

);

export default ErrorPage;