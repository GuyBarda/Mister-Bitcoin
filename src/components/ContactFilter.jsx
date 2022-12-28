import { createRef, useEffect, useState } from 'react';

export const ContactFilter = (props) => {
    const [filterBy, setFilterBy] = useState({ ...props.filterBy });

    const handleChange = (ev) => {
        ev.preventDefault();
        const { name, value } = ev.target;
        setFilterBy((prevFilterBy) => ({ ...prevFilterBy, [name]: value }));
    };

    useEffect(() => {
        props.onChangeFilter({ ...filterBy });
    }, [filterBy]);

    if (!filterBy) return <div>Loading...</div>;

    const { name } = filterBy;
    return (
        <form className="contact-filter">
            <input
                onChange={handleChange}
                value={name}
                type="text"
                name="name"
                id="name"
                placeholder="search"
            />
        </form>
    );
};
