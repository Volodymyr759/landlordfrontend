import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div>
            <h1>Main page</h1>
            <span>Test the Error page sending wrong code: </span><Link to="/WRONGCODE">/WRONGCODE</Link>
            <br /><br />
            <span>Test the Expired page sending expired code: </span><Link to="/EXPIREDCODE">/EXPIREDCODE</Link>
            <br /><br />
            <span>Test the start step-by-step process sending actual code: </span><Link to="/ACTUALCODE">/ACTUALCODE</Link>
        </div>
    );
};

export default MainPage;