import React from 'react';

import { useChangeEventHook } from '../../hooks';

import { Input as NativeInput, ValueContainer} from './style';

export type InputValue = string | number;

export interface InputProps {
    children?: React.ReactNode;
    error?: React.ReactNode;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>, value?: InputValue) => void;
    value?: InputValue;
    type?: string;
    disabled?: boolean;
}

export const Input = ({ value, onChange, disabled, ...other}: InputProps) => {
    const { handleChange } = useChangeEventHook<HTMLInputElement>(onChange);

    const inputProps = { ...other, value, onChange: handleChange };

        return (
                <ValueContainer>
                    {disabled 
                    ? <NativeInput as="span" {...other}>{value}</NativeInput> 
                    : <NativeInput disabled={disabled} {...inputProps} />
                    }
                </ValueContainer>
        );
};

export default Input;
