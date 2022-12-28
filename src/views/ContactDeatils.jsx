import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { ContactTransfer } from '../components/ContactTransfer';

import { spendCoins } from '../store/actions/user.actions';
import { getContactById } from '../store/actions/contact.actions';

export const ContactDetails = () => {
    const [contact, setContact] = useState(null);

    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();

    const loadContact = async () => {
        const contact = await dispatch(getContactById(params.id));
        setContact(contact);
    };

    useEffect(() => {
        loadContact();
    }, []);

    const onTransfer = (amount) => dispatch(spendCoins(amount));

    console.log(contact);

    if (!contact) return <div>Loading...</div>;
    const { name, phone, email } = contact;

    return (
        <section className="contact-details secondary-container">
            <div className="">
                <section>
                    <h3>Name: {name}</h3>
                </section>
                <section>
                    <h3>Phone: {phone}</h3>
                </section>
                <section>
                    <h3>Email: {email}</h3>
                </section>

                <ContactTransfer onTransfer={onTransfer} contact={contact} />
                <button onClick={() => navigate('/')}>Back</button>
            </div>
        </section>
    );
};
