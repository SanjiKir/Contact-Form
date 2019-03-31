import React, { useReducer, createContext, ReactNode, Reducer, useContext, Dispatch } from 'react';

import { initialContactList } from './initialContactList';
import { Action, IState } from './reducers';

const initialState = {
    contactList: initialContactList,
    activeContact: null,
    editMode: true,
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
