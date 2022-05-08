import { Props } from "./types";
import '../../Footers/styles.css';
import { Button } from "../../Button/Button";

export const FooterTwoBtn = ({ onAgree, onDisagree }: Props) => {
    return (
        <div className="step-grid-box white-box">
            <Button
                appearance="primary"
                onClick={onAgree}
            >
                AGREE
            </Button>
            <Button
                appearance="dark"
                onClick={onDisagree}
            >
                DISAGREE
            </Button>
        </div>
    );
};