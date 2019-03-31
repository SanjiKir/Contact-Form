import React, { ChangeEvent } from 'react';

import { useChangeEventHook } from '../../hooks';

import { NativeTextArea, TextAreaContainer, ValueContainer } from './style';

export interface TextAreaProps {
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>, value?: string) => void;
    onHeightChange?: (height: string) => void;
    rows?: number;
    children?: React.ReactNode;
    value?: string;
}

export const TextArea = ({ value, children, rows = 3, onChange, ...other }: TextAreaProps) => {
    const { handleChange } = useChangeEventHook<HTMLTextAreaElement>(onChange);

    const textareaProps = {
        ...other,
        onChange: handleChange,
        value,
        rows,
    };

    return (
        <TextAreaContainer>
            <ValueContainer>
                <NativeTextArea {...textareaProps} />
                {children}
            </ValueContainer>
        </TextAreaContainer>
    );
};

export default TextArea;
