import { Props } from "./types";
import './styles.css';

export const Htag = ({ appearance, children }: Props): JSX.Element => {
    switch (appearance) {
        case 'h1-primary-large':
            return <h1 className={appearance}>{children}</h1>;
        case 'h2-primary':
            return <h2 className={appearance}>{children}</h2>;
        case 'h2-primary-centered':
            return <h2 className={appearance}>{children}</h2>;
        default: return <></>;
    }
};