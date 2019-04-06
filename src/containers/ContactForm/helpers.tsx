import React from 'react';
import { Field } from 'formik';

import { FieldProps } from '../../components/lib';
import { FieldDivider } from '../../components/app/FieldDivider';

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
    {isTextArea ? <Field component={ContactFormTextArea} type={type} {...other} /> : <Field component={ContactFormFieldInput} type={type} {...other} />}
    {isDivided && <FieldDivider />}
  </>
);
