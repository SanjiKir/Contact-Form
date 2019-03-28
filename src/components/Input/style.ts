import styled from '../../styled-components';

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

    outline: none;
    margin: 0;
    padding: 0;
    width: 100%;

    appearance: none;
`;
