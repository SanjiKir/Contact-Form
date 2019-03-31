import { compose, map, apply, omit, toPairs } from 'ramda';

export const toArrayWithoutKeys = compose<any, any[], ReadonlyArray<any>>(
    map(apply(omit)),
    toPairs
);

export default toArrayWithoutKeys;
