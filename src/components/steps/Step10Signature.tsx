import { useRef, useState } from 'react';
import SignaturePad from 'react-signature-canvas';
import UndoIcon from '@mui/icons-material/Undo';
import { Card, Grid, Snackbar } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Tooltip from '@mui/material/Tooltip';
import { useAppDispatch, useAppSelector } from '../../store/redux';
import { incrementStep, decrementStep } from '../../store/steps/ActionCreators';
import { Button } from '../Button/Button';
import { FooterOneBtn } from '../Footers/FooterOneBtn/FooterOneBtn';
import { Header } from '../Header/Header';
import { MuiGrid } from '../MuiGrid/MuiGrid';
import { MuiStepper } from '../MuiStepper/MuiStepper';
import PhoneDialog from '../PhoneDialog/PhoneDialog';
import "./styles.css";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderRadius: 1,
    boxShadow: 24,
    p: 3,
};

export const Step10Signature = () => {
    const dispatch = useAppDispatch();
    const { agreement } = useAppSelector(state => state.agreementReducer);
    const { stepNumber } = useAppSelector(state => state.stepReducer);

    const [openSignatureModalVisible, setOpenSignatureModalVisible] = useState<boolean>(false);
    const [trimmedDataURL, setTrimmedDataURL] = useState<null | string>(null);

    const [openPhoneDialog, setOpenPhoneDialog] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);

    const sigPad = useRef<SignaturePad>(null);

    const onClickPhone = () => {
        setOpenPhoneDialog(true);
    };

    const onClosePhoneDialog = () => {
        setOpenPhoneDialog(false);
    };

    const clearSignature = () => {
        if (sigPad && sigPad.current) sigPad.current.clear();
        setTrimmedDataURL(null);
    }

    const onSigned = () => {
        if (sigPad && sigPad.current) {
            setTrimmedDataURL(sigPad.current.getTrimmedCanvas().toDataURL('image/png'));
        }
    }

    const onSaveSignature = async () => {
        if (trimmedDataURL) {
            console.log('Here should be await request to save .png file, for now: trimmedDataURL: ', trimmedDataURL)
            setOpenSignatureModalVisible(true);
            dispatch(incrementStep());
        } else {
            setOpen(true);
        }
    }

    const onCancel = () => {
        setOpenSignatureModalVisible(false);
        setTrimmedDataURL(null);
    }

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    }

    return (
        <MuiGrid appearance='grid-light-gray'>
            <Header
                onGoBack={() => dispatch(decrementStep())}
                onPhone={onClickPhone}
            />
            <MuiStepper activeStep={stepNumber - 6} />
            <p className='p-gray'>Signature</p>
            <Grid item xs={12}>
                <Card className="white-content-wrapper text-centered" >
                    <img src="/images/digital-signature_1.svg" alt="Info" />
                    <p className='p-primary'>
                        You’re now ready to sign your Residential Exclusive Management Agency Agreement
                    </p>
                    <p className='p-regular'>
                        The licensee and the principal/s acknowledge and confirm that before signing this agreement the licensee and
                        the principal/s have read and understood and agree to the terms and conditions in part 2 of this agreement and
                        the principal acknowledges being served with a copy of the same.
                    </p>
                </Card>
            </Grid>
            <FooterOneBtn btnText='SIGN NOW' onClick={() => setOpenSignatureModalVisible(true)} />
            <PhoneDialog
                isOpen={openPhoneDialog}
                firstName={agreement?.manager.first_name}
                lastName={agreement?.manager.last_name}
                phoneNumber={agreement?.manager.phone_number}
                onClose={onClosePhoneDialog}
            />
            <Modal
                open={openSignatureModalVisible}
                onClose={() => setOpenSignatureModalVisible(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='signature-header'>
                        <Tooltip title="Clear" placement="top">
                            <UndoIcon
                                color='disabled'
                                style={{ 'position': 'absolute', 'top': '0', 'right': '4px' }}
                                onClick={clearSignature}
                            />
                        </Tooltip>
                    </div>
                    <SignaturePad
                        canvasProps={{ className: "sig-pad" }}
                        ref={sigPad}
                        onEnd={onSigned}
                    />
                    <p className='p-gray-small text-centered'>Sign above</p>
                    <div className='text-centered'>
                        <Button
                            appearance="dark"
                            onClick={onCancel}
                        >
                            CANCEL
                        </Button>
                        <Button
                            appearance="primary"
                            onClick={onSaveSignature}
                        >
                            SAVE
                        </Button>
                        <Snackbar open={open} message='Please Sign' autoHideDuration={5000} onClose={handleClose} />
                    </div>
                    {trimmedDataURL ? <img src={trimmedDataURL} /> : null}
                </Box>
            </Modal>
        </MuiGrid>
    );
};
