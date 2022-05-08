import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { Htag } from '../../components/HTag/HTag';
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
                <Card style={{ 'backgroundColor': 'transparent', 'boxShadow': 'none' }}>
                    <Htag appearance='h1-primary-large'>404</Htag>
                    <Htag appearance='h2-primary-centered'>Not Found</Htag>
                </Card>
            </Grid>
        </Grid>
    </>

);

export default ErrorPage;