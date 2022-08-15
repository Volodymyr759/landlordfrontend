import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Props } from './types';
import { FooterOneBtn } from '../Footers/FooterOneBtn/FooterOneBtn';

const PhoneDialog = ({ isOpen, firstName, lastName, phoneNumber, onClose }: Props): JSX.Element => {
    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title" >
                {`Would you like to call ${firstName + ' ' + lastName}?`}
            </DialogTitle>
            <DialogContent>
                <p className='p-regular text-centered'>
                    Call: <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                </p>
            </DialogContent>
            <DialogActions>
                <FooterOneBtn appearance='light-gray-box' btnText='Cancel' onClick={onClose} />
            </DialogActions>
        </Dialog>
    );
};

export default PhoneDialog;