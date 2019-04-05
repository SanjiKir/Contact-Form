import React from 'react';

import { ContactList } from '../ContactList';
import { ContactForm } from '../ContactForm';

import { AppContainerWrapper } from './style';

export default (props: {})  => (
        <AppContainerWrapper>
            <ContactList />
            <ContactForm />
        </AppContainerWrapper>
);
