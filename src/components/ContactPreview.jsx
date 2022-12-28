import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export const ContactPreview = (props) => {
    const { contact, onRemoveContact } = props;
    const [img, setImg] = useState(null);

    useEffect(() => {
        (async () => {
            let img2 = await axios.get('https://robohash.org/r2');
            setImg(img2);
        })();
    }, []);

    const removeContact = (ev) => {
        ev.preventDefault();
        onRemoveContact(contact._id);
    };
    console.log(img?.data);

    return (
        <Link to={`/contact/${contact._id}`} className="contact-preview">
            <div className="img-container">
                <img src={img?.data} alt={contact.name} />
            </div>
            <section>
                <h2>{contact.name}</h2>
                <p>{contact.phone}</p>
            </section>
            <section className="actions">
                <NavLink to={`/contact/edit/${contact._id}`}>
                    <i className="fa-solid fa-pen"></i>
                </NavLink>
                <button onClick={removeContact}>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </section>
        </Link>
    );
};
