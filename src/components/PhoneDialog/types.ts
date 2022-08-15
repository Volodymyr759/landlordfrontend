export interface Props {
    isOpen: boolean;
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    onClose: () => void;
}