import React, { useCallback } from 'react';

import { IContact, useStateValue } from '../../../store';
import { ContactForm } from '../ContactForm';

export interface InfoScreenProps {
    activeContact: IContact | null;
}

export const InfoScreen = ({ activeContact, ...other }: InfoScreenProps) => {
    // const { state: { editMode }, dispatch } = useStateValue();

    return (<>
                {activeContact && <ContactForm activeContact={activeContact} /> }
        </>);
};

export default InfoScreen;
