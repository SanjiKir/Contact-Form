import React, { ReactNode } from 'react';

import { useFocusHook } from '../../hooks';
import { Label } from '../Label';

import { FieldElement, FieldWrapper, FieldElementProps } from './style';

export type FieldProps<T> = {
    label?: ReactNode;
} & FieldElementProps & T;

export const Field = <T extends any>(Component: React.ComponentType<T>) => ({ error, label, large, ...other }: FieldProps<T>) => {
    const {focused, handleFocus } = useFocusHook();
    const fieldProps = {
        error,
        focused,
    };

    const labelElement = label && <Label large={large}>label</Label>;

    return (
        <FieldWrapper large={large}>
        {!large && labelElement}
        <FieldElement onBlur={handleFocus} onFocus={handleFocus} {...fieldProps}>
            {/*
            // @ts-ignore */ }
            <Component {...other} />
        </FieldElement>
        {large && labelElement}
        </FieldWrapper>
    );
};

export default Field;
