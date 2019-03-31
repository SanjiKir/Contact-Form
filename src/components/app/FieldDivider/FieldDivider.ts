import styled from '../../../styled-components';
import { Divider } from '../../lib';

export const FieldDivider = styled(Divider)`
    border-width: 1px;
    margin-top: ${props => props.theme.indents.small};
    width: 100%;
    color: #F0F0F0;
`;

export default FieldDivider;
