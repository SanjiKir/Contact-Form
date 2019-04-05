import React, { ReactChild } from 'react';

import { SelectableList } from '../../lib';

import { ContactListElement } from './style';

export interface ContactListProps {
    children: ReactChild[];
}
export const ContactList = (props: ContactListProps) => {

    return (
        <ContactListElement>
            <SelectableList listPadding="2rem" {...props} />
        </ContactListElement>
    );
};

export default ContactList;
