import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import '../../index.css';

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
                <Card style={{ 'backgroundColor': 'transparent', 'boxShadow': 'none', 'textAlign': 'center' }}>
                    <h1 className='error-h1'>404</h1>
                    <h2 className='error-h2'>Not Found</h2>
                </Card>
            </Grid>
        </Grid>
    </>

);

export default ErrorPage;