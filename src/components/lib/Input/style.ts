import styled from '../../../styled-components';
import { getInputNormalTypography, getBodyTypography, getHeadingTypography, getInputLargeTypography } from '../../../theme/helpers';

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

export const ValueContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0.2rem;
`;

export interface InputProps {
    large?: boolean;
}
// font-size: ${getNormalFontSize};
// font-weight: ${getRegularFontWeight};
// color: ${getDefaultTextColor};

export const Input = styled.input<InputProps>`
    background-color: transparent;
    border: 0;
    display: block;
    ${props => props.large ? getInputLargeTypography(props) : getInputNormalTypography(props)}

    outline: none;
    margin: 0;
    padding: 0;
    width: 100%;

    appearance: none;
`;
