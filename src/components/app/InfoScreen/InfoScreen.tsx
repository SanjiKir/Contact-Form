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
let prevState: any;
export const InfoScreen = ({ activeContact, ...other }: InfoScreenProps) => {
    const { state, dispatch } = useStateValue();
    console.log(prevState === state);
    prevState = state;
    
    const toggleAppMode = useCallback(() => {
        dispatch({ type: 'TOGGLE_MODE', payload: true });
    }, []);

    return (<>
                {activeContact && !state.editMode && (
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
                {state.editMode && <ContactForm /> }
                <ActionElementsContainer>
                    <Button onClick={toggleAppMode} small={true}>+</Button>
                {activeContact && (
                    <Button>Edit</Button>
                )}
                </ActionElementsContainer>
        </>);
};

export default InfoScreen;
