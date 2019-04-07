import React from 'react';

import { ContactList } from '../ContactList';
import { ContactForm } from '../ContactForm';
import { NewContactButton } from '../NewContactButton';
import { useContactAction } from '../../store';

import { AppContainerWrapper, ContactFormWrapper } from './style';

export default (props: {})  => {
    const { activeContact } = useContactAction();

    return  (
        <AppContainerWrapper>
            <ContactList />
            <ContactFormWrapper>
                {activeContact ? <ContactForm activeContact={activeContact} /> : <NewContactButton />}
            </ContactFormWrapper>
        </AppContainerWrapper>
    );
};
