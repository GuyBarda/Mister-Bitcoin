import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

import {
    getContactById,
    saveContact,
    getEmptyContact,
} from '../store/actions/contact.actions.js';

export const ContactEdit = () => {
    const [contact, setContact] = useState(null);
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        loadContact();
    }, [params.id]);

    const loadContact = async () => {
        const contactId = params.id;
        const contact = contactId
            ? await dispatch(getContactById(contactId))
            : dispatch(getEmptyContact());
        setContact(contact);
    };

    const onAddContact = async (ev) => {
        ev.preventDefault();
        try {
            await dispatch(saveContact(contact));
            navigate('/');
        } catch (err) {
            console.log('err:', err);
        }
    };

    const handleChange = ({ target }) => {
        const field = target.name;
        let value = target.value;
        switch (target.type) {
            case 'number':
            case 'range':
                value = +value;
                break;
            case 'checkbox':
                value = target.checked;
                break;
            default:
                break;
        }

        setContact((prevContact) => ({ ...prevContact, [field]: value }));
    };

    if (!contact) return;
    console.log(contact);

    const { name, email, phone } = contact;
    return (
        <section className="contact-edit-container secondary-container">
            <div className="contact-edit">
                <h1>{contact._id ? 'Edit' : 'Add'} Contact</h1>
                <div className="actions flex justify-between ">
                    <NavLink className="btn" to="/">
                        Cancel
                    </NavLink>
                    <button className="btn" type="submit" form="addcontact">
                        Done
                    </button>
                </div>
                <img
                    src={`https://robohash.org/${contact._id}?set=set5`}
                    alt={contact.name}
                />
                <form onSubmit={onAddContact} id="addcontact">
                    <input
                        onChange={handleChange}
                        value={name}
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                    />
                    <input
                        onChange={handleChange}
                        value={email}
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Email"
                    ></input>
                    <input
                        onChange={handleChange}
                        value={phone}
                        name="phone"
                        id="phone"
                        type="phone"
                        placeholder="Phone"
                    ></input>
                </form>
            </div>
        </section>
    );
};

// const mapStateToProps = (state) => ({
//     contacts: state.contactModule.contacts,
//     filterBy: state.contactModule.filterBy,
//     loggedInUser: state.userModule.loggedInUser,
// });

// const mapDispatchToProps = {
//     getContactById,
//     saveContact,
//     getEmptyContact,
// };

// export const ContactEdit = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(_ContactEdit);
