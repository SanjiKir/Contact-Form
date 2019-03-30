import React, { useCallback } from 'react';

import { useStateValue } from '../../store/store';
import { ContactList, ListItem } from '../../components';
import ListHeader from '../../components/ListHeader/ListHeader';
import { ContactListDivider } from '../../components/ContactList/style';
import { CONTACT_CHOSEN } from '../../store/actions';

export const ContactListContainer = (props: any) => {
    const { state, dispatch } = useStateValue();

    const handleContactClick = useCallback(() => {
        dispatch({type: CONTACT_CHOSEN, payload: 1});
    }, []);

    return (
        <ContactList>
                <ListHeader>A</ListHeader>
                <ContactListDivider />
                <ListItem onClick={handleContactClick}>Adam Acer</ListItem>
                <ListItem>Scott Anderson</ListItem>
                <ListItem>Mary Arthur</ListItem>
                <ListItem>Trevor Atwater</ListItem>
                <ListItem>Mary Arthur</ListItem>
        </ContactList>
    );
};

export default ContactListContainer;
