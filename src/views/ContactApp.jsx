import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactFilter } from '../components/ContactFilter';
import { ContactList } from '../components/ContactList';

import { bitcoinService } from '../services/bitcoin.service';

import {
    loadContacts,
    removeContact,
    setFilterBy,
} from '../store/actions/contact.actions';

import { setLoggedInUser } from '../store/actions/user.actions';

export const ContactApp = () => {
    const dispatch = useDispatch();
    const [userBtc, setUserBtc] = useState(null);

    const contacts = useSelector((state) => state.contactModule.contacts);
    const filterBy = useSelector((state) => state.contactModule.filterBy);
    const loggedInUser = useSelector((state) => state.userModule.loggedInUser);

    useEffect(() => {
        (async () => {
            await dispatch(loadContacts());
            dispatch(setLoggedInUser());
        })();
    }, []);

    const onRemoveContact = async (id) => {
        await dispatch(removeContact(id));
        dispatch(loadContacts());
    };

    // getRate = async () => {
    //     const userBtc = await bitcoinService.getRate(state.user.coins);
    //     setState({ userBtc });
    // };

    const onChangeFilter = async (filterBy) => {
        await dispatch(setFilterBy(filterBy));
        dispatch(loadContacts());
    };
    console.log(contacts);

    return (
        <section className="contact-app secondary-container">
            {loggedInUser && (
                <div className="user-details">
                    <h1>hello {loggedInUser.name}!</h1>
                    <div className="user-info">
                        <p>Coins: {loggedInUser.coins}</p>
                        <p>BTC: {userBtc}</p>
                    </div>
                </div>
            )}
            <ContactFilter
                onChangeFilter={onChangeFilter}
                filterBy={filterBy}
            />
            {contacts && (
                <ContactList
                    onRemoveContact={onRemoveContact}
                    contacts={contacts}
                />
            )}
        </section>
    );
};

// const mapStateToProps = ({
//     contactModule: { contacts, filterBy },
//     userModule: { loggedInUser },
// }) => ({ contacts, filterBy, loggedInUser });

// const mapDispatchToProps = {
//     loadContacts,
//     removeContact,
//     setFilterBy,
//     setLoggedInUser,
// };

// export const ContactApp = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(_ContactApp);
