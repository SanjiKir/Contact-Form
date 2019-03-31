import styled from '../../../styled-components';
 import { Divider, Label } from '../../lib';
import { getBodyTypography } from '../../../theme/helpers';

export const ViewFieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 2rem;
    width: 100%;
    margin: ${props => props.theme.indents.small} 0;
`;

export const ViewFieldElement = styled.div`
    display: flex;
    padding: 0 ${props => props.theme.indents.large};
`;

export const ViewFieldDivider = styled(Divider)`
    border-width: 1px;
    margin-top: ${props => props.theme.indents.small};

`;

export const ViewFieldValue = styled.span`
    ${getBodyTypography}
    margin-left: 1rem;
`;

export const ViewLabelElement = styled(Label)`
    direction: rtl;
    min-width: 6rem;
`;
