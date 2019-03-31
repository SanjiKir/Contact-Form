import React, { ReactNode } from 'react';

import { useFocusHook } from '../../hooks';
import { Label } from '../Label';

import { FieldElement, FieldWrapper, FieldElementProps } from './style';

export type FieldProps<T> = {
    label?: ReactNode;
    type?: string;
    name?: string;
} & FieldElementProps & T;

export const Field = <T extends any>(Component: React.ComponentType<T>) => ({ error, label, large, ...other }: FieldProps<T>) => {
    const {focused, handleFocus } = useFocusHook();
    const fieldProps = {
        error,
        focused,
    };

    const labelElement = label && <Label focused={focused} large={large}>{label}</Label>;

    return (
        <FieldWrapper large={large}>
            {!large && labelElement}
            <FieldElement large={large} onBlur={handleFocus} onFocus={handleFocus} {...fieldProps}>
                {/*
                // @ts-ignore */ }
                <Component large={large} {...other} />
            </FieldElement>
            {large && labelElement}
        </FieldWrapper>
    );
};

export default Field;
