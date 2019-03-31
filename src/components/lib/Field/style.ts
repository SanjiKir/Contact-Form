import styled from '../../../styled-components';

export interface FieldElementProps {
    error?: boolean;
    focused?: boolean;
    large?: boolean;
}

export const FieldWrapper = styled.div<FieldElementProps>`
    display: flex;
    flex-direction: ${props => props.large ? 'column' : 'row'};
`;

export const FieldElement = styled.div<FieldElementProps>`
    border-radius: 4px;
    transition-duration: ${props => props.theme.animation.animationDuration};
    transition-property: border-color;
    transition-timing-function: ${props => props.theme.animation.animationFunction};

    border: 1px solid ${props => props.error ? props.theme.palette.errorColor : props.theme.palette.borderColor};
    ${props => props.focused && `border-color: ${props.theme.palette.hoverColor}`};
`;
