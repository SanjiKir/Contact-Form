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
                {activeContact && <ContactForm activeContact={activeContact} /> }


        </>);
};

export default InfoScreen;
