import React from 'react';

import SelectableList from '../SelectableList';
import { ListItem } from '../ListItem';
import ListHeader from '../ListHeader/ListHeader';

import { ContactListElement, ContactListDivider } from './style';

export const ContactList = (props: any) => {

    return (
        <ContactListElement>
            <SelectableList listPadding="2rem" {...props} />
        </ContactListElement>
    );
};

export default ContactList;
