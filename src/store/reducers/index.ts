import { IContact, IContactList } from '../initialContactList';

export interface IState {
    readonly contactList: IContactList;
    readonly activeContact: IContact | null;
    readonly editMode: boolean;
}

export type Action =
    | { type: 'CONTACT_CHOSEN'; payload: IContact }
    | { type: 'ADD_NEW_CONTACT'; payload: IContact }
    | { type: 'TOGGLE_MODE'; payload: boolean };

export const activeContactReducer = (state: IContact | null, action: Action): IContact | null => {
    switch (action.type) {
        case 'CONTACT_CHOSEN':
            return { ...action.payload };

            default:
            return state;
    }
};

export const contactsReducer = (state: IContactList, action: Action): IContactList => {
    switch (action.type) {
        case 'ADD_NEW_CONTACT':
            return {
                ...state,
                [action.payload.id]: action.payload,
            };

            default:
            return state;
    }
};

export const appStateReducer = (state: boolean, action: Action): boolean => {
    switch (action.type) {
        case 'TOGGLE_MODE':
            return action.payload;

            default:
            return state;
    }
};

export const mainReducer = ({ activeContact, contactList, editMode }: IState, action: Action) => ({
    contactList: contactsReducer(contactList, action),
    activeContact: activeContactReducer(activeContact, action),
    editMode: appStateReducer(editMode, action),
});
