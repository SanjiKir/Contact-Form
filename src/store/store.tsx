import React, { useReducer, createContext, ReactNode, Reducer, useContext, Dispatch } from 'react';

import { IContactList, initialContactList, IContact } from './initialContactList';

export interface IState {
    contactList: IContactList;
    activeContact: IContact | null;
    editMode: boolean;
}

export interface Action {
    type: 'CONTACT_CHOSEN';
    payload: any;
}

const initialState = {
    contactList: initialContactList,
    activeContact: null,
    editMode: false,
};

export type IStateContext = [IState, Dispatch<Action>];

export const StateContext = createContext<IStateContext | null>(null);

export interface StateProviderProps {
    reducer: Reducer<IState, Action>;
    children: ReactNode;
}

export const StateProvider = <A extends any>({ reducer, children }: StateProviderProps) => (
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