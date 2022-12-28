import { contactService } from '../../services/contact.service';

export function loadContacts() {
    return async (dispatch, getState) => {
        try {
            const filterBy = getState().contactModule.filterBy;
            const contacts = await contactService.getContacts(filterBy);
            dispatch({ type: 'SET_CONTACTS', contacts });
            return 'hello';
        } catch (err) {
            console.log('err:', err);
        }
    };
}

export function removeContact(contactId) {
    return async (dispatch) => {
        try {
            await contactService.deleteContact(contactId);
            dispatch({ type: 'REMOVE_CONTACT', contactId });
            return 'hello';
        } catch (err) {
            console.log('err:', err);
        }
    };
}

export function getContactById(contactId) {
    return async () => {
        try {
            return await contactService.getContactById(contactId);
        } catch (err) {
            console.log('err:', err);
        }
    };
}

export function getEmptyContact() {
    return () => contactService.getEmptyContact();
}

export function saveContact(contact) {
    return async (dispatch) => {
        try {
            const savedContact = await contactService.saveContact(contact);
            dispatch({ type: 'SAVE_CONTACT', contact: savedContact });
            return 'hello';
        } catch (err) {
            console.log('err:', err);
        }
    };
}

export function setFilterBy(filterBy) {
    return (dispatch) => {
        try {
            dispatch({ type: 'SET_FILTER_BY', filterBy: { ...filterBy } });
        } catch (err) {
            console.log('err:', err);
        }
    };
}
