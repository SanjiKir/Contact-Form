import React from 'react';

import { Input as NativeInput, ValueContainer} from './style';

export type InputValue = string | number;

export interface InputProps {
    children?: React.ReactNode;
    error?: React.ReactNode;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: InputValue;
    type?: string;
    disabled?: boolean;
}

export const Input = ({ value, disabled, ...other}: InputProps) => {
    const inputProps = { ...other, value };

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
