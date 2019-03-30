import React, { ReactNode } from 'react';

import { ViewFieldWrapper, ViewFieldDivider, ViewFieldValue, ViewFieldElement, ViewLabelElement } from './style';

export interface ViewFieldProps {
    labelText: ReactNode;
    valueText: ReactNode;
}
export const ViewField = ({labelText, valueText, ...other}: ViewFieldProps) => {
    const finalLabelText = typeof labelText === 'string' ? labelText.toLowerCase() : labelText;

    return (
        <ViewFieldWrapper>
            <ViewFieldElement {...other}>
                <ViewLabelElement>{finalLabelText}</ViewLabelElement>
                <ViewFieldValue>{valueText}</ViewFieldValue>
            </ViewFieldElement>
            <ViewFieldDivider />
        </ViewFieldWrapper>
    );
};
