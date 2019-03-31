import React from 'react';

import { InputField, InputProps, FieldProps } from '../../lib';

import { ContactFormFieldWrapper } from './style';

export const ContactFormFieldInput = (props : FieldProps<InputProps>) => (
    <ContactFormFieldWrapper>
        <InputField {...props} />
    </ContactFormFieldWrapper>
);

export default ContactFormFieldInput;
