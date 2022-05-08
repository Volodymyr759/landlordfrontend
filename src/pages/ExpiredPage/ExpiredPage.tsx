import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { Htag } from '../../components/HTag/HTag';
import { Oops } from '../../components/Oops/Oops';
import '../../index.css';

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
                    <Card style={{ 'backgroundColor': 'transparent', 'boxShadow': 'none', 'textAlign': 'center' }}>
                        <h1><Oops /></h1>
                        <Htag appearance='h2-primary'>This link has expired</Htag>
                        <h3>Please contact your property manager</h3>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
};

export default ExpiredPage;