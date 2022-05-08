import { Grid } from '@mui/material';
import { Props } from "../MuiGrid/types";
import './styles.css';

export const MuiGrid = ({ appearance, children }: Props): JSX.Element => {
    return (
        <Grid
            container
            className={appearance}
        >
            {children}
        </Grid>
    );
};