import { Button } from '@mui/material';
import { Props } from "./types";
import './styles.css';

export const MuiButton = ({ appearance, children, ...props }: Props): JSX.Element => {
    return (
        <Button
            className={appearance}
            variant="contained"
            {...props}
        >
            {children}
        </Button>
    )
};