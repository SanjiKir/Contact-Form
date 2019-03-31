import React, { useCallback } from 'react';

import { IContact, useStateValue } from '../../../store';
import { Button } from '../../lib';
import { ViewField } from '../ViewField';
import { MainContactInfo } from '../MainContactInfo';
import { ContactForm } from '../ContactForm';

import { ContactDescriptionContainer, ActionElementsContainer } from './style';

export interface InfoScreenProps {
    activeContact: IContact | null;
}

export const InfoScreen = ({ activeContact, ...other }: InfoScreenProps) => {
    const { state: { editMode }, dispatch } = useStateValue();
    
    const toggleAppMode = useCallback(() => {
        dispatch({ type: 'TOGGLE_MODE', payload: true });
    }, []);

    return (<>
                {activeContact && !editMode && (
                    <>
                    <MainContactInfo>{`${activeContact.name} ${activeContact.lastName}`}</MainContactInfo>
                    <ContactDescriptionContainer>
                        <ViewField labelText="phone" valueText={activeContact.phone} />
                        <ViewField labelText="email" valueText={activeContact.email} />
                        <ViewField labelText="address" valueText={activeContact.address} />
                        <ViewField labelText="note" valueText={activeContact.note} />
                    </ContactDescriptionContainer>
                    </>
                )}
                {editMode && <ContactForm /> }
                <ActionElementsContainer>
                    <Button onClick={toggleAppMode} small={true}>+</Button>
                {activeContact && (
                    <Button>Edit</Button>
                )}
                </ActionElementsContainer>
        </>);
};

export default InfoScreen;
