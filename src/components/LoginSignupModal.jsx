import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup, login } from '../store/actions/user.actions';

export const LoginSignupModal = () => {
    const [user, setUser] = useState({ name: '' });
    const navigate = useNavigate();

    const handleChange = ({ target: { name, value } }) => {
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    const onSignup = () => {
        signup(user);
        navigate('/');
    };

    return (
        <section className="login-signup-modal secondary-container">
            <form onSubmit={onSignup}>
                <input
                    onChange={handleChange}
                    value={user.name}
                    type="text"
                    name="name"
                    placeholder="Name"
                />
                <button>Signup</button>
            </form>
        </section>
    );
};
