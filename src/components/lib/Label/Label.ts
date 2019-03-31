import styled from '../../../styled-components';

export interface LabelProps {
    large?: boolean;
}

export const LabelElement = styled.div<LabelProps>`
    font-size: ${props => props.theme.typography.input.label.fontSize};
    color: ${props => props.theme.palette.secondaryFontColor};
    margin-right: ${props => props.large ? '0.4rem' : '0'};
`;

export default LabelElement;
