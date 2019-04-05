import React, { ReactNode } from 'react';

import { useFocusHook } from '../../hooks';
import { Label } from '../Label';

import { FieldElement, FieldWrapper, FieldElementProps } from './style';

export type FieldProps<T> = {
    label?: ReactNode;
    type?: string;
    name?: string;
    disabled?: boolean;
} & FieldElementProps & T;

export const Field = <T extends any>(Component: React.ComponentType<T>) => ({ disabled, error, label, large, ...other }: FieldProps<T>) => {
    const { focused, handleFocus } = useFocusHook();
    const fieldProps = {
        error,
        focused,
        disabled,
        large,
    };

    const labelElement = ((disabled && !large) || (!disabled && label)) && <Label focused={focused} large={large}>{label}</Label>;

    return (
        <FieldWrapper large={large}>
            {!large && labelElement}
            <FieldElement onBlur={handleFocus} onFocus={handleFocus} {...fieldProps}>
                {/*
                // @ts-ignore */ }
                <Component large={large} disabled={disabled} {...other} />
            </FieldElement>
            {large && labelElement}
        </FieldWrapper>
    );
};

export default Field;
