import React, { useState, useCallback, ReactNode } from 'react';

import { FieldElement, LabelElement, FieldWrapper, FieldElementProps } from './style';

export type FieldProps<T> = {
    label?: ReactNode;
} & FieldElementProps & T;

export const Field = <T extends any>(Component: React.ComponentType<T>) => ({ error, label, large, ...other }: FieldProps<T>) => {
    const [focused, setFocused] = useState(false);
    
    const fieldProps = {
        error,
        focused,
    };

    const handleFocus = useCallback(() => setFocused(f => !f), []);

    const labelElement = label && <LabelElement>label</LabelElement>;

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
