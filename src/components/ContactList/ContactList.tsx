import React from 'react';

import SelectableList from '../SelectableList';
import { ListItem } from '../ListItem';
import ListDivider from '../ListDivider';
import ListHeader from '../ListHeader/ListHeader';

import { ContactListElement } from './style';

export const ContactList = (props: any) => {

    return (
        <ContactListElement>
            <SelectableList listPadding="2rem" {...props}>
                <ListHeader>A</ListHeader>
                <ListDivider />
                <ListItem>Adam Acer</ListItem>
                <ListItem>Scott Anderson</ListItem>
                <ListItem>Mary Arthur</ListItem>
                <ListItem>Trevor Atwater</ListItem>
                <ListItem>Mary Arthur</ListItem>
            </SelectableList>
        </ContactListElement>
    );
};

export default ContactList;
