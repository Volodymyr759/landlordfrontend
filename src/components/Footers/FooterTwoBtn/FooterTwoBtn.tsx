import { Props } from "./types";
import '../../Footers/styles.css';
import { Button } from "../../Button/Button";

export const FooterTwoBtn = ({ buttonsTitles = ['AGREE', 'DISAGREE'], onAgree, onDisagree }: Props) => {
    return (
        <div className="step-grid-box white-box">
            <Button
                appearance="primary"
                onClick={onAgree}
            >
                {buttonsTitles[0]}
            </Button>
            <Button
                appearance="dark"
                onClick={onDisagree}
            >
                {buttonsTitles[1]}
            </Button>
        </div>
    );
};