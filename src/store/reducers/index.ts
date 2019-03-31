import { IContact, IContactList } from '../initialContactList';

export interface IState {
    readonly contactList: IContactList;
    readonly activeContact: IContact | null;
    readonly editMode: boolean;
}

export type Action =
    | { type: 'CONTACT_CHOSEN'; payload: string }
    | { type: 'ADD_NEW_CONTACT'; payload: IContact }
    | { type: 'TOGGLE_MODE'; payload: boolean };

export const reducer = (state: IState, action: Action) => {
    switch (action.type) {
        case 'CONTACT_CHOSEN':
            return {
                ...state,
                activeContact: { ...state.contactList[action.payload] },
            };
        case 'ADD_NEW_CONTACT':
            return {
                ...state,
                [action.payload.id]: { ...action.payload },
            };
        case 'TOGGLE_MODE':
            return {
                ...state,
                editMode: action.payload,
            };

        default:
            return state;
    }
};
