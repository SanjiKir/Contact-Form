import React from 'react';

import { useChangeEventHook } from '../../hooks';

import { InputContainer, Input as NativeInput, ValueContainer} from './style';

export type InputValue = string | number;

export interface InputProps {
    children?: React.ReactNode;
    error?: React.ReactNode;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>, value?: InputValue) => void;
    placeholder?: React.ReactNode;
    rightDetail?: React.ReactNode;
    value?: InputValue;
    type?: string;
}

export const Input = ({ value, placeholder, children, onChange, ...other}: InputProps) => {
    const { handleChange } = useChangeEventHook<HTMLInputElement>(onChange);

    const inputProps = { ...other, value, onChange: handleChange };

        return (
            <InputContainer>
                <ValueContainer>
                    <NativeInput {...inputProps} />
                    {children}
                </ValueContainer>
            </InputContainer>
        );
};

export default Input;
