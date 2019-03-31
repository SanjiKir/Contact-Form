import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';

import { Button, InputField } from '../../lib';
import { FieldDivider } from '../FieldDivider';

import { ContactDescriptionContainer, TextAreasWrapper, StyledForm } from './style';
import ContactFormFieldInput from './ContactFormFieldInput';
import ContactFormTextArea from './ContactFormTextArea';

const ContactForm = () => (
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
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <TextAreasWrapper>
            <InputField label="First name" large={true} type="text" name="name" />
            <ErrorMessage name="name" component="div" />
            <InputField label="Last name" large={true} type="text" name="lastName" />
            <ErrorMessage name="lastName" component="div" />
          </TextAreasWrapper>
          <ContactDescriptionContainer>
            <ContactFormFieldInput label="phone" type="text" name="phone" />
            <FieldDivider />
            <ContactFormFieldInput label="email" type="email" name="email" />
            <FieldDivider />
            <ContactFormTextArea label="address" type="text" name="address" />
            <FieldDivider />
            <ContactFormTextArea rows={6} label="note" type="text" name="note" />
          </ContactDescriptionContainer>
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </StyledForm>
      )}
    </Formik>
  </div>
);

export default ContactForm;
