import React, { useReducer, createContext, ReactNode, Reducer, useContext, Dispatch } from 'react';

import { initialContactList } from './initialContactList';
import { Action, IState } from './reducers';
import { EMPTY_CONTACT } from './constants';

const initialState: IState = {
    contactList: initialContactList,
    activeContact: EMPTY_CONTACT,
    appMode: 'VIEW_MODE',
};

export type IStateContext = [IState, Dispatch<Action>];

export const StateContext = createContext<IStateContext | null>(null);

export interface StateProviderProps {
    reducer: Reducer<IState, Action>;
    children: ReactNode;
}

export const StateProvider = ({ reducer, children }: StateProviderProps) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => {
    const [state, dispatch] = useContext(StateContext);
    return {
        state: state as IState,
        dispatch: dispatch as Dispatch<Action>,
    };
};
