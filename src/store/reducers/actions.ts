import { useCallback } from 'react';
import uuid from 'uuid';

import { useStateValue } from '../store';
import { IContact } from '../initialContactList';

export const useEditModeAction = () => {
  const {
    state: { appMode: mode },
    dispatch,
  } = useStateValue();

  const setEditMode = useCallback(() => {
    dispatch({ type: 'TOGGLE_MODE', payload: 'EDIT_MODE' });
  }, []);

  const setCreateMode = useCallback(() => {
    dispatch({ type: 'TOGGLE_MODE', payload: 'CREATE_MODE' });
  }, []);

  const setViewMode = useCallback(() => {
    dispatch({ type: 'TOGGLE_MODE', payload: 'VIEW_MODE' });
  }, []);

  const isEditMode = mode === 'EDIT_MODE';
  const isCreateMode = mode === 'CREATE_MODE';
  const isViewMode = mode === 'VIEW_MODE';

  return {
    mode,
    setEditMode,
    setCreateMode,
    setViewMode,
    isEditMode,
    isCreateMode,
    isViewMode,
  };
};

export type INewContact = Pick<IContact, Exclude<keyof IContact, 'id'>>;
export const useContactAction = () => {
    const {
      state: { contactList, activeContact },
      dispatch,
    } = useStateValue();
  
    const createNewContact = useCallback((contact: INewContact) => {
        const newContactId = uuid();
        debugger;

        dispatch({ type: 'ADD_NEW_CONTACT', payload: { ...contact, id: newContactId }});
        debugger;
        dispatch({ type: 'CONTACT_CHOSEN', payload: newContactId });
    }, []);

    const editContact = useCallback((contact: IContact) => {
        dispatch({ type: 'EDIT_CONTACT', payload: contact});
        dispatch({ type: 'CONTACT_CHOSEN', payload: contact.id });
    }, []);

    const choseContact = useCallback((id: string | null) => {
        dispatch({ type: 'CONTACT_CHOSEN', payload: id });
    }, []);
  
    return {
        activeContact,
        contactList,
        createNewContact,
        editContact,
        choseContact,
    };
};
