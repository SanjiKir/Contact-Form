import React from 'react';

import { SelectableList } from '../SelectableList';

import { ContactListElement } from './style';

export const ContactList = (props: any) => {

    return (
        <ContactListElement>
            <SelectableList listPadding="2rem" {...props} />
        </ContactListElement>
    );
};

export default ContactList;
