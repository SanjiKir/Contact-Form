import styled from '../../../styled-components';
import{ Divider } from '../../lib';

export const ContactListElement = styled.div`
    background-color: ${props => props.theme.palette.secondaryBackgroundColor};
    overflow-y: auto;
    min-width: 10rem;
    max-width: 20vw;
    width: 100%;
    min-height: 100vh;
    height: 100%:
`;

export const ContactListDivider = styled(Divider)`
    margin-left: ${props => props.theme.indents.medium}
`;
