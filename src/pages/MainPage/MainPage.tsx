import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div>
            <h1>Main page</h1>
            <Link to="/error">Test the Error-page</Link>
            <br />
            <Link to="/link-expired">Test the Expired-page</Link>
            <br />
            <Link to="/users">Test the UsersList-component</Link>
        </div>
    );
};

export default MainPage;