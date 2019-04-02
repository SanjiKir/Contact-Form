import React from 'react';

import { FieldProps } from '../../lib';
import { FieldDivider } from '../FieldDivider';

import ContactFormTextArea from './ContactFormTextArea';
import ContactFormFieldInput from './ContactFormFieldInput';

export type CreateInputFieldProps<T> = {
  isDivided?: boolean;
  isTextArea?: boolean;
  type?: string;
  name?: string;
} & FieldProps<T>;

export const createContactFormFieldInput = <T extends {}>({
  isTextArea = false,
  isDivided = true,
  type = 'text',
  ...other
}: CreateInputFieldProps<T>) => (
  <>
    {isTextArea ? <ContactFormTextArea type={type} {...other} /> : <ContactFormFieldInput type={type} {...other} />}
    {isDivided && <FieldDivider />}
  </>
);
