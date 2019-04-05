import styled from '../../../styled-components';
import { getListItemTypography } from '../../../theme/helpers';

export interface ListItemElementProps {
    focused?: boolean;
    selected?: boolean;
    onClick?: () => void;
}

export const ListItemElement = styled.span<ListItemElementProps>`
    ${getListItemTypography}
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
    color: ${props => props.selected ? props.theme.palette.fontColorContrast : props.theme.palette.fontColor};
`;

export const ListItemWrapper = styled.div<ListItemElementProps>`
    background-color: ${props => props.selected ? props.theme.palette.activeColor : 'transparent'};
    height: 1.5rem;
    padding: 0 ${props => props.theme.indents.large};
`;
