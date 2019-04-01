import React, { useState, useCallback } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';

import { Button, InputField } from '../../lib';
import { FieldDivider } from '../FieldDivider';
import { IContact, useStateValue } from '../../../store';

import { ContactDescriptionContainer, TextAreasWrapper, StyledForm, ActionElementsContainer } from './style';
import ContactFormFieldInput from './ContactFormFieldInput';
import ContactFormTextArea from './ContactFormTextArea';

export interface ContactFormProps {
  activeContact: IContact;
}

const ContactForm = ({ activeContact }: ContactFormProps) => {
  const { state: { editMode }, dispatch } = useStateValue();

  const handleNewContactClick = useCallback(() => {
    dispatch({ type: 'CONTACT_CHOSEN', payload: null });
    dispatch({ type: 'TOGGLE_MODE', payload: true });
  }, []);

  const handleEditContact = useCallback(() => {
    dispatch({ type: 'TOGGLE_MODE', payload: true });
  }, [])

  const handleSubmit = useCallback((values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  } ,[]);

  const inputProps = {
    disabled: !editMode,
  };

  const largeInputProps = {
    ...inputProps,
    large: true,
    type: 'text',
  };

  return (
  <div style={{ width: '100%', height: '100%'}}>
    <Formik
      initialValues={{ email: '', password: '' }}
    //   validate={values => {
    //     let errors = { email: undefined };
    //     if (!values.email) {
    //       errors.email = 'Required';
    //     } else if (
    //       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    //     ) {
    //       errors.email = 'Invalid email address';
    //     }
    //     return errors;
    //   }}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <TextAreasWrapper>
            <InputField value={activeContact.name} label="First name" name="name" {...largeInputProps} />
            <ErrorMessage name="name" component="div" />
            <InputField value={activeContact.lastName} label="Last name" name="lastName" {...largeInputProps} />
            <ErrorMessage name="lastName" component="div" />
          </TextAreasWrapper>
          <ContactDescriptionContainer>
            <ContactFormFieldInput {...inputProps} value={activeContact.phone} label="phone" type="text" name="phone" />
            <FieldDivider />
            <ContactFormFieldInput {...inputProps} value={activeContact.email} label="email" type="email" name="email" />
            <FieldDivider />
            <ContactFormTextArea {...inputProps} value={activeContact.address} label="address" type="text" name="address" />
            <FieldDivider />
            <ContactFormTextArea {...inputProps} value={activeContact.note} rows={6} label="note" type="text" name="note" />
          </ContactDescriptionContainer>
          <ActionElementsContainer>
              <Button type="button" onClick={handleNewContactClick} small={true}>+</Button>
              {editMode ? (
                    <Button type="button">Done</Button>
              ) : <Button onClick={handleEditContact} type="button">Edit</Button>}
          </ActionElementsContainer>
        </StyledForm>
      )}
    </Formik>
  </div>
  );
};

export default ContactForm;
