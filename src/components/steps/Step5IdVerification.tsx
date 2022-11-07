import React, { useEffect, useState } from 'react';
import { Alert, Button, Card, Grid, IconButton, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Resizer from "react-image-file-resizer";
import { useAppDispatch, useAppSelector } from '../../store/redux';
import { incrementStep, decrementStep } from '../../store/steps/ActionCreators';
import { Header } from '../Header/Header';
import { FooterTwoBtn } from '../Footers/FooterTwoBtn/FooterTwoBtn';
import { MuiGrid } from '../MuiGrid/MuiGrid';
import PhoneDialog from '../PhoneDialog/PhoneDialog';
import { clearError, uploadImage } from '../../store/agreement/ActionCreators';
import './styles.css';

export const Step5IdVerification = () => {
    const dispatch = useAppDispatch();
    const { agreement, error, isLoading } = useAppSelector(state => state.agreementReducer);

    const [openPhoneDialog, setOpenPhoneDialog] = useState<boolean>(false);

    const [previewBlockVisible, setPreviewBlockVisible] = useState<boolean>(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewSource, setPreviewSource] = useState<string | ArrayBuffer | null | Blob>(null);
    const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);

    useEffect(() => {
        if (agreement?.landlord.verification_photo) {
            setPreviewSource(agreement.landlord.verification_photo.full_url)
            setPreviewBlockVisible(true)
        }
    }, [agreement?.landlord.verification_photo])

    const fileSelectedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];
            if (!validateFile(file)) {
                setOpenSnackBar(true);
                return;
            }
            setSelectedFile(file)
            const reader = new FileReader;
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setPreviewSource(reader.result);
            }
        }
        setPreviewBlockVisible(true);
    }

    const deleteHandler = () => {
        setSelectedFile(null);
        setPreviewSource(null);
        setPreviewBlockVisible(false)
    }

    const replaceHandler = async () => {
        if (selectedFile) {
            if (selectedFile.size > 1024 * 1024 * 1) { //Greater then 1Mb
                console.log('Image should be resized due to size > 1Mb');
                Resizer.imageFileResizer(selectedFile, 300, 300, "JPEG", 100, 0, (uri) => { setPreviewSource(uri as Blob); }, "base64", 200, 200);
            }
            dispatch(uploadImage({
                landlordId: agreement?.landlord.id || '',
                image: selectedFile
            }));
        } else {
            setOpenSnackBar(true);
        }
    }

    const validateFile = (file: File) => {
        return file.type === 'image/jpeg' || file.type === 'image/png';
    }

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackBar(false);
    }

    const onClickPhone = () => {
        setOpenPhoneDialog(true);
    };

    const onClosePhoneDialog = () => {
        setOpenPhoneDialog(false);
    };

    return (
        <MuiGrid appearance='grid-light-gray'>
            {error &&
                <div style={{ width: '100%' }}>
                    <Alert
                        severity="error"
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    dispatch(clearError());
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        sx={{ mb: 2 }}
                    >
                        Error has occured while sending file, close to continue.
                    </Alert>
                </div>
            }
            <Header
                onGoBack={() => dispatch(decrementStep())}
                onPhone={onClickPhone}
            />
            <p className='p-gray'>ID Verification</p>
            <Grid item xs={12}>
                <Card className="white-content-wrapper text-centered" >
                    <img src="/images/shutterstock_1349089712.svg" alt="Info" />
                    <p className='p-primary'>
                        We need to confirm your ID
                    </p>
                    <p className='p-regular'>
                        In order to complete this digital form we need you to attach a photo ID for verification.
                    </p>
                    <p className='p-regular'>
                        Please upload a clear copy of your drivers license, passport or other photo ID.
                    </p>
                    <Snackbar open={openSnackBar} message='Please choose .png or .jpeg file.' autoHideDuration={4000} onClose={handleClose} />

                    {!previewBlockVisible &&
                        <div className='uploader-wrapper'>
                            <img src="/images/gallery.svg" alt="Info" />
                            <Button
                                variant="contained"
                                component="label"
                                // className="choose-image-btn"
                                style={{ textTransform: 'none', backgroundColor: 'transparent', boxShadow: 'none' }}
                            >
                                <span className='a-small-blue'>Choose from gallery</span>
                                <input
                                    type="file"
                                    hidden
                                    onChange={fileSelectedHandler}
                                />
                            </Button>
                        </div>
                    }

                    {previewBlockVisible &&
                        <div className='preview-wrapper'>
                            <img
                                src={previewSource && typeof (previewSource) != undefined ? previewSource.toString() : "/images/sample-label-green-band-sign-260nw.webp"}
                                alt="Preview image"
                                className='preview-image'
                            />
                            <div>
                                <button
                                    className='radius-btn left-radius'
                                    onClick={deleteHandler}
                                >
                                    <span className='a-small-blue'>Delete</span>
                                </button>
                                <button
                                    title="Click to replace the image."
                                    className='radius-btn right-radius'
                                    onClick={replaceHandler}
                                >
                                    <span className='a-small-blue'>Replace</span>
                                </button>
                            </div>
                        </div>
                    }
                </Card>
            </Grid>
            <FooterTwoBtn
                buttonsTitles={['CANCEL', 'CONFIRM']}
                onAgree={onClickPhone}
                onDisagree={() => {
                    dispatch(incrementStep());
                }}
            />
            <PhoneDialog
                isOpen={openPhoneDialog}
                firstName={agreement?.manager.first_name}
                lastName={agreement?.manager.last_name}
                phoneNumber={agreement?.manager.phone_number}
                onClose={onClosePhoneDialog}
            />

        </MuiGrid>
    );
};
