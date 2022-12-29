import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signup } from '../store/actions/user.actions';

export const LoginSignupModal = () => {
    const [user, setUser] = useState({ name: '' });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = ({ target: { name, value } }) => {
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    const onSignup = () => {
        dispatch(signup(user));
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
