import { Props } from "./types";
import '../../Footers/styles.css';
import { Button } from "../../Button/Button";

export const FooterOneBtn = ({ onClick, btnText, appearance = "white-box", ...props }: Props) => {
    return (
        <div className={["step-grid-box", appearance].join(' ')}>
            <Button
                onClick={onClick}
                appearance="primary"
            >
                {btnText}
            </Button>
        </div>
    );
};
