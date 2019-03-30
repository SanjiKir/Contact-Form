import React, { useState, useCallback, ReactChild } from 'react';

import { SelectableListElement } from './style';

export interface SelectableListProps {
    children: ReactChild[];
}

const useListItemClick = () => {
    const [selected, setSelected] = useState(-1);

    const handleSelected = useCallback((onClick: any, index: number) => () => {
        if (onClick) {
            onClick();
        }
    
        setSelected(index);
    }, []);

    return { selected, handleSelected };
};

export const SelectableList = ({ children, ...other }: SelectableListProps) => {
    const { selected, handleSelected } = useListItemClick();

    const items = React.Children.map(children, (child, index) => {
        if (typeof child ==='string' || typeof child === 'number') {
            return child;
        }
    
        return React.cloneElement(child, {
            selected: selected === index,
            onClick: handleSelected(child.props.onClick, index),
        });
    });

    return (
        <SelectableListElement {...other}>
            {items}
        </SelectableListElement>
    );
};

export default SelectableList;
