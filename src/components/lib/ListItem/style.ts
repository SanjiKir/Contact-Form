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
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.selected ? props.theme.palette.activeColor : 'transparent'};
    &:hover {
       ${props => !props.selected &&  `background-color: ${props.theme.palette.darkDefaultHoverColor};`}
    }
    height: 1.5rem;
    padding: 0 ${props => props.theme.indents.large};
`;

export const DetailContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
