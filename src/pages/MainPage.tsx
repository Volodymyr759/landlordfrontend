import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div>
            <h2>Hi</h2>
            <p>
                This is the prototype of landlord.propertyspace.com site for the implementation of a step-by-step process
                of confirmation by the owner of information from the agreement with the real estate agency.
            </p>
            <p>
                Usually, the landlord should not get to this page, but simply use the link he receives from the agent.
                The link contains a one-time code, and using this link triggers the first step of confirming the agreement.
            </p>
            <p>Test the start step-by-step process sending actual code: </p><Link to="/ACTUALCODE">/ACTUALCODE</Link>
            <p>Test the Error page sending wrong code: </p><Link to="/WRONGCODE">/WRONGCODE</Link>
            <p>Test the Expired page sending expired code: </p><Link to="/EXPIREDCODE">/EXPIREDCODE</Link>
        </div>
    );
};

export default MainPage;