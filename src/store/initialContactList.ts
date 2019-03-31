import uuid from 'uuid';
import { indexBy, prop } from 'ramda';

export interface IContact {
    id: string;
    name: string;
    lastName: string;
    phone?: string;
    email?: string;
    address?: string;
    note?: string;
}

export interface IContactList {
    [uid: string]: IContact;
}

const initialContactArray = [
    {
        id: uuid(),
        name: 'Mary',
        lastName: 'Kate',
        phone: '411-123-7513',
        email: 'mary.kate@gmail.com',
        address: 'Rusveltska 123/25 Prague 10100 Czech Republic',
    },
    {
        id: uuid(),
        name: 'Mac',
        lastName: 'Barter',
        phone: '777-123-412',
        email: 'mary.barter@gmail.com',
        address: 'Pushina str. 25 Russia Moscow',
    },
    {
        id: uuid(),
        name: 'Adam',
        lastName: 'Acer',
        phone: '399-692-7753',
        email: 'adam.acer@gmail.com',
        address: '99 Weiland Way Cupertino CA 95014 United States',
        note: 'Adam`s California address',
    },
    {
        id: uuid(),
        name: 'Scott',
        lastName: 'Anderson',
        phone: '399-431-4123',
        email: 'scot.anderson@gmail.com',
        address: '11 Bayland str Florida FL 55012 United States',
        note: 'Note',
    },

];
export const initialContactList: IContactList = indexBy(prop('id'), initialContactArray);
