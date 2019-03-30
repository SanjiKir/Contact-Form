import React, { ReactNode }  from 'react';

import { ListItemElement, ListItemWrapper, ListItemElementProps } from './style';

export interface ListItemProps extends ListItemElementProps {
    selected?: boolean;
    children: ReactNode;
}
export default ({ children, selected, ...other}: ListItemProps) => {

    return <ListItemWrapper selected={selected}>
                <ListItemElement selected={selected} {...other}>
                    {children}
                </ListItemElement>
            </ListItemWrapper>;
};
