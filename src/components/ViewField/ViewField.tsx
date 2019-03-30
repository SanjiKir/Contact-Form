import React, { ReactNode } from 'react';

import LabelElement from '../Label';

import { ViewFieldWrapper, ViewFieldDivider, ViewFieldValue, ViewFieldElement } from './style';

export interface ViewFieldProps {
    labelText: ReactNode;
    valueText: ReactNode;
}
export const ViewField = ({labelText, valueText, ...other}: ViewFieldProps) => {
    const finalLabelText = typeof labelText === 'string' ? labelText.toLowerCase() : labelText;

    return (
        <ViewFieldWrapper>
            <ViewFieldElement {...other}>
                <LabelElement>{finalLabelText}</LabelElement>
                <ViewFieldValue>{valueText}</ViewFieldValue>
            </ViewFieldElement>
            <ViewFieldDivider />
        </ViewFieldWrapper>
    );
};
