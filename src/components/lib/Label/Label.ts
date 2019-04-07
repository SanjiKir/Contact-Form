import styled from '../../../styled-components';

export interface LabelProps {
    large?: boolean;
    focused?: boolean;
}

export const LabelElement = styled.div<LabelProps>`
    font-size: ${props => props.theme.typography.input.label.fontSize};
    color: ${props => props.focused ? props.theme.palette.activeColor : props.theme.palette.secondaryFontColor};
    margin-right: ${props => !props.large ? '0.4rem' : '0'};
    ${props => !props.large && `
        min-width: 6rem;
        direction: rtl;
    `}
`;

export default LabelElement;
