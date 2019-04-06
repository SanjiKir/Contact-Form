import React, { useCallback, useMemo, Fragment, memo } from 'react';
import { head, compose, sortBy, prop } from 'ramda';

import { IContact, useContactAction, useModeAction } from '../../store';
import { ContactList, ListItem, ContactListDivider, ListHeader, DeleteIcon } from '../../components';
import { toArrayWithoutKeys } from '../../utils';

let prevHeader: string = '';
export const ContactListContainer = memo((props: {}) => {
    const { contactList, activeContact, choseContact, deleteContact } = useContactAction();
    const { setViewMode, isEditMode } = useModeAction();

    const mapContactList = useMemo(() => compose(
        contactListArray => contactListArray.map((contact: IContact, index: number) => {
            const { lastName, name, id } = contact;
            const isContactSelected = !!activeContact && activeContact.id === id;
            const firstLastNameSymbol = head(contact.lastName);
            let header; 
            let divider;
            const rightDetail = isEditMode && isContactSelected && <DeleteIcon callbackArg={id} onClick={deleteContact} />;

            if (index === 0 || prevHeader !== firstLastNameSymbol) {
                header = <ListHeader key={firstLastNameSymbol}>{firstLastNameSymbol}</ListHeader>;
                prevHeader = firstLastNameSymbol;
                divider = <ContactListDivider key={`divider${firstLastNameSymbol}`}/>;
            }
    
            return (
                <Fragment key={`fr_${id}`}>
                    {header}
                    {divider}
                    <ListItem
                      key={id}
                      selected={isContactSelected}
                      onClick={handleContactClick(id)}
                      rightDetail={rightDetail}
                    >{`${name} ${lastName}`}</ListItem>
                </Fragment>
            );
        }),
        (contactListArray: ReadonlyArray<IContact>) => sortBy(prop('lastName'))(contactListArray),
        toArrayWithoutKeys
    ), [contactList, activeContact, isEditMode]);

    const handleContactClick = useCallback((contactId: string) => () => {
        if (!activeContact || (activeContact && activeContact.id !== contactId)) {
            choseContact(contactId);
            setViewMode();
        }
    }, [activeContact]);

    return (
        <ContactList {...props}>
                {mapContactList(contactList)}
        </ContactList>
    );
});

export default ContactListContainer;
