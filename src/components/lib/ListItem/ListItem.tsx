import React, { ReactNode }  from 'react';

import { DeleteIcon } from '../DeleteIcon';

import { ListItemElement, ListItemWrapper, ListItemElementProps, DetailContainer } from './style';

export interface ListItemProps extends ListItemElementProps {
    selected?: boolean;
    children: ReactNode;
    rightDetail?: ReactNode;
}
export default ({ children, selected, rightDetail, ...other}: ListItemProps) => {

    return <ListItemWrapper {...other} selected={selected}>
                <ListItemElement selected={selected}>
                    {children}
                </ListItemElement>
                {rightDetail && <DetailContainer>{rightDetail}</DetailContainer>}
            </ListItemWrapper>;
};
