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
    min-height: 1.5rem;
    border-radius: 4px;
    transition-duration: ${props => props.theme.animation.animationDuration};
    transition-property: border-color;
    transition-timing-function: ${props => props.theme.animation.animationFunction};

    max-width: ${props => props.large ? '20rem' : '30vw'};
    width: 100%;
    border: 1.5px solid ${props => props.error ? props.theme.palette.errorColor : props.theme.palette.borderColor};
    ${props => props.focused && `border-color: ${props.theme.palette.activeColor}`};
`;
