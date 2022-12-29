import { Link } from 'react-router-dom';

export const AppHeader = () => {
    return (
        <header className="main-header secondary-container full">
            <div className="flex justify-between align-center">
                <div className="logo">Contact</div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/user">User</Link>
                </nav>
            </div>
        </header>
    );
};
