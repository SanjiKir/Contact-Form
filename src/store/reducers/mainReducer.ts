import { IContact, IContactList } from '../initialContactList';
import { EMPTY_CONTACT } from '../constants';

export type AppMode = 'EDIT_MODE' | 'CREATE_MODE' | 'VIEW_MODE';

export interface IState {
    readonly contactList: IContactList;
    readonly activeContact: IContact;
    readonly appMode: AppMode;
}

export type Action =
    | { type: 'CONTACT_CHOSEN'; payload: string | null }
    | { type: 'ADD_NEW_CONTACT'; payload: IContact }
    | { type: 'EDIT_CONTACT'; payload: IContact }
    | { type: 'TOGGLE_MODE'; payload: AppMode };

export const reducer = (state: IState, action: Action) => {
    switch (action.type) {
        case 'CONTACT_CHOSEN':
            return {
                ...state,
                activeContact: action.payload ? { ...state.contactList[action.payload] } : EMPTY_CONTACT,
            };
        case 'ADD_NEW_CONTACT':
            return {
                ...state,
                contactList: {
                    ...state.contactList,
                    [action.payload.id]: { ...action.payload },
                },
            };
        case 'EDIT_CONTACT':
            return {
                ...state,
                contactList: {
                    ...state.contactList,
                    [action.payload.id]: { ...action.payload },
                },
            };
        case 'TOGGLE_MODE':
            return {
                ...state,
                appMode: action.payload,
            };

        default:
            return state;
    }
};
