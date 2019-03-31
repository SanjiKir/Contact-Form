import { IState, Action } from './store';
import { CONTACT_CHOSEN } from './actions';

export const reducer = (state: IState, action: Action) => {
    switch (action.type) {
      case CONTACT_CHOSEN:
        return {
          ...state,
          activeContact: state.contactList[action.payload],
        };
        
      default:
        return state;
    }
};
