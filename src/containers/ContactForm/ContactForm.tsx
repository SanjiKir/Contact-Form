import React, { useCallback } from 'react';
import { Formik, ErrorMessage, Field } from 'formik';

import { Button, InputField } from '../../components/lib';
import { NewContactButton } from '../NewContactButton';
import { IContact, useModeAction, useContactAction } from '../../store';

import { ContactDescriptionContainer, TextAreasWrapper, StyledForm, ActionElementsContainer } from './style';
import { createContactFormFieldInput } from './helpers';

export interface ContactFormProps { 
  activeContact: IContact;
}

export interface Touched {
  lastName?: boolean;
}
export interface RenderFormProps {
  errors: Errors;
  touched: Touched;
}
const ContactForm = ({ activeContact, ...other }: ContactFormProps) => {
  const { isCreateMode, isViewMode, isEditMode, setEditMode, setViewMode } = useModeAction();
  const { createNewContact, editContact } = useContactAction();

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

  const renderForm = ({ touched, errors }: RenderFormProps) => (
    <StyledForm>
      <TextAreasWrapper>
        <Field component={InputField} label="First name" name="name" {...largeInputProps} />
        <Field component={InputField} error={touched.lastName && errors.lastName} label="Last name" name="lastName" {...largeInputProps} />
      </TextAreasWrapper>
      <ContactDescriptionContainer>
        {createContactFormFieldInput({ ...inputProps, label: 'phone', name: 'phone' })}
        {createContactFormFieldInput({ ...inputProps, label: 'email', type: 'email', name: 'email'})}
        {createContactFormFieldInput({ ...inputProps, isTextArea: true, label: 'address', name: 'address'})}
        {createContactFormFieldInput({ ...inputProps, rows: 4, isTextArea: true, label: 'note', isDivided: false, name: 'note'})}
      </ContactDescriptionContainer>
      <ActionElementsContainer>
        <NewContactButton />
        {!isViewMode && <Button type="submit">Done</Button>}
        {isViewMode && (
          <Button onClick={setEditMode} type="button">
            Edit
          </Button>
        )}
      </ActionElementsContainer>
    </StyledForm>
  );

  return (
      <Formik
        initialValues={{ ...activeContact }}
        enableReinitialize={true}
        validate={validate}
        onSubmit={handleFormSubmit}
        render={renderForm}
      />
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
