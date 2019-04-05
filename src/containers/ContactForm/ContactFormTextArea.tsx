import React from 'react';

import { TextAreaField, TextAreaProps, FieldProps } from '../../components/lib';

import { ContactFormFieldWrapper } from './style';

export const ContactFormTextArea = (props : FieldProps<TextAreaProps>) => (
    <ContactFormFieldWrapper>
        <TextAreaField {...props} />
    </ContactFormFieldWrapper>
);

export default ContactFormTextArea;
