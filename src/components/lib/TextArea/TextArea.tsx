import React, { ChangeEvent } from 'react';

import { useChangeEventHook } from '../../hooks';

import { NativeTextArea, ValueContainer } from './style';

export interface TextAreaProps {
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>, value?: string) => void;
    onHeightChange?: (height: string) => void;
    rows?: number;
    children?: React.ReactNode;
    value?: string;
    disabled?: boolean;
}

export const TextArea = ({ value, children, rows = 3, onChange, disabled, ...other }: TextAreaProps) => {
    const { handleChange } = useChangeEventHook<HTMLTextAreaElement>(onChange);

    const textareaProps = {
        ...other,
        onChange: handleChange,
        value,
        rows,
    };

    return (
            <ValueContainer>
                {disabled
                    ? <NativeTextArea disabled={disabled} as="span" {...other}>{value}</NativeTextArea>
                    : <NativeTextArea {...textareaProps} />}
            </ValueContainer>
    );
};

export default TextArea;
