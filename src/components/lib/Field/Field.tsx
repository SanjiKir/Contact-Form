import React, { ReactNode } from 'react';
import { FieldProps as FormikFieldProps } from 'formik';

import { useFocusHook } from '../../hooks';
import { Label } from '../Label';

import { FieldElement, FieldWrapper, FieldElementProps, ErrorMessage } from './style';

export type FieldProps<T> = {
    label?: ReactNode;
    type?: string;
    name?: string;
    disabled?: boolean;
    field?: FormikFieldProps;
} & FieldElementProps & T;

export const Field = <T extends any>(Component: React.ComponentType<T>) => ({
    disabled,
    error,
    label,
    large,
    field,
    ...other
  }: FieldProps<T>) => {
  
    const { focused, handleFocus } = useFocusHook();
    const fieldProps = {
        error,
        focused,
        disabled,
        large,
    };

    let name; 
    let value; 
    let onChange;
    let onBlur;
    if (field) {
        name = field.name;
        value = field.value;
        onChange = field.onChange;
        onBlur = field.onBlur; 
    }

    const componentProps = {
        disabled,
        large,
        name,
        value,
        onChange,
        onBlur,
        ...other,
    };

    const labelElement = ((disabled && !large) || (!disabled && label)) && <Label focused={focused} large={large}>{label}</Label>;

    return (
        <FieldWrapper large={large}>
            {!large && labelElement}
            <FieldElement onBlur={handleFocus} onFocus={handleFocus} {...fieldProps}>
                {/*
                // @ts-ignore */ }
                <Component {...componentProps} />
            </FieldElement>
            {large && labelElement}
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </FieldWrapper>
    );
};

export default Field;
