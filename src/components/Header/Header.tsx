import "./styles.css";
import { Props } from './types';

export const Header = ({ onGoBack, onPhone }: Props) => {
    return (
        <div className='step-header'>
            <img src="/images/arrow_left_small.svg" alt="Go back" onClick={onGoBack} />
            <img src="/images/logo_ps_small.svg" alt="Logo" />
            <img src="/images/phone_small.svg" alt="Phone" onClick={onPhone} />
        </div>
    );
};
