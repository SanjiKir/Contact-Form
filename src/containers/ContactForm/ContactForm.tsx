import React, { useCallback } from 'react';
import { Formik, ErrorMessage } from 'formik';

import { Button, InputField } from '../../components/lib';
import { IContact, useStateValue, useEditModeAction, useContactAction } from '../../store';

import { ContactDescriptionContainer, TextAreasWrapper, StyledForm, ActionElementsContainer, ContactFormWrapper } from './style';
import { createContactFormFieldInput } from './helpers';

const ContactForm = (props: {}) => {
  const { isCreateMode, isViewMode, isEditMode, setEditMode, setCreateMode, setViewMode } = useEditModeAction();
  const { createNewContact, activeContact, editContact, choseContact } = useContactAction();

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

  return (
    <ContactFormWrapper>
      <Formik
        initialValues={{ ...activeContact }}
        enableReinitialize={true}
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
        onSubmit={handleFormSubmit}
      >
        {({ isSubmitting, handleChange, values }) => (
          <StyledForm>
            <TextAreasWrapper>
              <InputField onChange={handleChange} value={values.name} label="First name" name="name" {...largeInputProps} />
              <ErrorMessage name="name" component="div" />
              <InputField onChange={handleChange} value={values.lastName} label="Last name" name="lastName" {...largeInputProps} />
              <ErrorMessage name="lastName" component="div" />
            </TextAreasWrapper>
            <ContactDescriptionContainer>
              {createContactFormFieldInput({ ...inputProps, onChange: handleChange, value: values.phone, label: 'phone', name: 'phone' })}
              {createContactFormFieldInput({
                ...inputProps,
                onChange: handleChange,
                value: values.email,
                label: 'email',
                type: 'email',
                name: 'email',
              })}
              {createContactFormFieldInput({
                ...inputProps,
                onChange: handleChange,
                value: values.address,
                isTextArea: true,
                label: 'address',
                name: 'address',
              })}
              {createContactFormFieldInput({
                ...inputProps,
                onChange: handleChange,
                value: values.note,
                isTextArea: true,
                label: 'note',
                isDivided: false,
                name: 'note',
              })}
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
        )}
      </Formik>
    </ContactFormWrapper>
  );
};

export default ContactForm;
