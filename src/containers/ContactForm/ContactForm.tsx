import React, { useCallback } from 'react';
import { Formik, ErrorMessage, Field } from 'formik';

import { Button, InputField } from '../../components/lib';
import { IContact, useStateValue, useModeAction, useContactAction } from '../../store';

import { ContactDescriptionContainer, TextAreasWrapper, StyledForm, ActionElementsContainer, ContactFormWrapper } from './style';
import { createContactFormFieldInput } from './helpers';

export interface ContactFormProps { 
  activeContact: IContact;
}
const ContactForm = ({ activeContact, ...other }: ContactFormProps) => {
  const { isCreateMode, isViewMode, isEditMode, setEditMode, setCreateMode, setViewMode } = useModeAction();
  const { createNewContact, editContact, choseContact } = useContactAction();

  const handleNewContactClick = useCallback(() => {
    choseContact(null);
    setCreateMode();
  }, []);

  const handleEditContact = useCallback(() => {
    setEditMode();
  }, []);

  const handleFormSubmit = useCallback((values: IContact, { setSubmitting }) => {
    setViewMode();
    if (isCreateMode) {
      createNewContact(values);
    }

    if (isEditMode) {
      editContact(values);
    }
  }, [isCreateMode, isEditMode]);

  const inputProps = {
    disabled: isViewMode,
  };

  const largeInputProps = {
    ...inputProps,
    large: true,
    type: 'text',
  };

  const renderForm = () => (
    <StyledForm>
      <TextAreasWrapper>
        <Field component={InputField} label="First name" name="name" {...largeInputProps} />
        <Field component={InputField} label="Last name" name="lastName" {...largeInputProps} />
        <ErrorMessage name="lastName" component="div" />
      </TextAreasWrapper>
      <ContactDescriptionContainer>
        {createContactFormFieldInput({ ...inputProps, label: 'phone', name: 'phone' })}
        {createContactFormFieldInput({ ...inputProps, label: 'email',type: 'email',name: 'email'})}
        {createContactFormFieldInput({ ...inputProps,  isTextArea: true, label: 'address', name: 'address'})}
        {createContactFormFieldInput({ ...inputProps, isTextArea: true, label: 'note', isDivided: false, name: 'note'})}
      </ContactDescriptionContainer>
      <ActionElementsContainer>
        <Button type="button" onClick={handleNewContactClick} small={true}>
          +
        </Button>
        {!isViewMode && <Button type="submit">Done</Button>}
        {isViewMode && (
          <Button onClick={handleEditContact} type="button">
            Edit
          </Button>
        )}
      </ActionElementsContainer>
    </StyledForm>
  );

  return (
    <ContactFormWrapper {...other}>
      <Formik
        initialValues={{ ...activeContact }}
        enableReinitialize={true}
        validate={validate}
        onSubmit={handleFormSubmit}
        render={renderForm}
      />
    </ContactFormWrapper>
  );
};

export interface Errors {
  lastName?: string;
}
const validate = (values: IContact): Errors => {
    const errors: Errors = {};
    if (!values.lastName) {
      errors.lastName = 'Last name is required';
    }
    return errors;
  };

export default ContactForm;
