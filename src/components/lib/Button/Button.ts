import { FormEvent } from 'react';

import styled from '../../../styled-components';
import { getButtonTypography } from '../../../theme/helpers';

export interface ButtonProps {
    small?: boolean;
    onSubmit?: (e?: FormEvent<HTMLFormElement> | undefined) => void;
}
export const ButtonElement = styled.button<ButtonProps>`
    ${getButtonTypography}
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    border: 1px solid ${props => props.theme.palette.borderColor};
    border-radius: 8px;
    cursor: pointer;
    height: 40px;
    outline: 0;
    padding: 0 1.5rem;

    ${props => props.small && `
        font-size: 30px;
        padding: 0 1rem;
    `}

    background: transparent;
    color: ${props => props.theme.palette.fontColor};

    &:hover {
        background-color: ${props => props.theme.palette.defaultHoverColor};
    }
    &:active {
        background-color: ${props => props.theme.palette.defaultActiveColor};
    }
`;

export default ButtonElement;
