import React from 'react';

import { InputField, InputProps, FieldProps } from '../../components/lib';

import { ContactFormFieldWrapper } from './style';

export const ContactFormFieldInput = ({ disabled, ...other }: FieldProps<InputProps>) => (
    <ContactFormFieldWrapper>
        <InputField disabled={disabled} {...other} />
    </ContactFormFieldWrapper>
);

export default ContactFormFieldInput;
