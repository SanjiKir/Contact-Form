import styled from '../../../styled-components';
import{ Divider, SelectableList } from '../../lib';

export const ContactListElement = styled.div`
    background-color: ${props => props.theme.palette.secondaryBackgroundColor};
    min-width: 10rem;
    max-width: 20vw;
    width: 100%;
    height: 100vh;

    padding-top: ${props => props.theme.indents.pageTop};
    box-sizing: border-box;
`;

export const ContactListDivider = styled(Divider)`
    margin-left: ${props => props.theme.indents.medium}
`;
