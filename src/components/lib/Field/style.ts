import styled from '../../../styled-components';
import { getInputLabelTypography } from '../../../theme/helpers';

export interface FieldElementProps {
    error?: string;
    focused?: boolean;
    large?: boolean;
    disabled?: boolean;
}

export const FieldWrapper = styled.div<FieldElementProps>`
    display: flex;
    flex-direction: ${props => props.large ? 'column' : 'row'};
`;

export const FieldElement = styled.div<FieldElementProps>`
    min-height: 1.5rem;
    border-radius: 4px;
    width: 100%;
    max-width: ${props => props.large ? '20rem' : '30vw'};
    max-width: ${props => props.large && props.disabled && 'none'};

    ${props => !props.disabled && `
        transition-duration: ${props.theme.animation.animationDuration};
        transition-property: border-color;
        transition-timing-function: ${props.theme.animation.animationFunction};
        border: 1.5px solid ${props.error ? props.theme.palette.dangerColor : props.theme.palette.borderColor};
        ${props.focused && `border-color: ${props.theme.palette.activeColor}`};
    `}
`;

export const ErrorMessage = styled.span`
    ${getInputLabelTypography};
    color: ${props => props.theme.palette.dangerColor};
`;
