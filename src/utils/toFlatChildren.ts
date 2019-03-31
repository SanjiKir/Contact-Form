import { ReactChild, Children, cloneElement, ReactElement } from 'react';
import { isFragment, isElement } from 'react-is';

function flattenChildren(children: ReactChild[], depth: number = 0) {
    return Children.toArray(children).reduce((acc: ReactChild[], child: ReactChild) => {
        if (typeof child === 'string' || typeof child === 'number') {
            acc.push(child);
            return acc;
        }

        if (isFragment(child)) {
            acc.push(...flattenChildren(child.props.children, depth + 1));
            return acc;
        }

        if (isElement(child)) {
            acc.push(
                cloneElement(child, {
                    key: `${depth}.${(child as ReactElement<any>).key}`,
                })
            );
            return acc;
        }

        return acc;
    }, []);
}

export default function toFlatChildrenArray(children: ReactChild[]) {
    return flattenChildren(children);
}
