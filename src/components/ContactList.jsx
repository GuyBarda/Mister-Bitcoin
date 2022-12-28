import { ContactPreview } from './ContactPreview';

export const ContactList = (props) => {
    const { contacts, onRemoveContact } = props;

    return (
        <section className="contact-list">
            {contacts.map((contact) => (
                <ContactPreview
                    onRemoveContact={onRemoveContact}
                    key={contact._id}
                    contact={contact}
                />
            ))}
        </section>
    );
};
