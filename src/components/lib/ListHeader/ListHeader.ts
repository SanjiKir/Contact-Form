import styled from '../../../styled-components';
import { getListItemTypography } from '../../../theme/helpers';

export interface ListHeadlineProps {
    dense?: boolean;
}

const ListHeader = styled.h5`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    outline: none;
    position: relative;
    margin: 0;
    color: ${props => props.theme.palette.secondaryFontColor}
    ${getListItemTypography};
    font-weight: 400;
    margin-left: ${props => props.theme.indents.medium}
`;

export default ListHeader;
