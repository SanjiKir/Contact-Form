import React, { ChangeEvent } from 'react';

import { NativeTextArea, ValueContainer } from './style';

export interface TextAreaProps {
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    rows?: number;
    value?: string;
    disabled?: boolean;
}

export const TextArea = ({ value, rows = 3, disabled, ...other }: TextAreaProps) => {
    const textareaProps = {
        ...other,
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
