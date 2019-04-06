import React from 'react';

import { ContactList } from '../ContactList';
import { ContactForm } from '../ContactForm';
import { useContactAction } from '../../store';

import { AppContainerWrapper } from './style';

export default (props: {})  => {
    const { activeContact } = useContactAction();
    return  (
        <AppContainerWrapper>
            <ContactList />
            {activeContact && <ContactForm activeContact={activeContact} />}
        </AppContainerWrapper>
    );
};
