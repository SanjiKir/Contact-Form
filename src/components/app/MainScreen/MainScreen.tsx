import React from 'react';

import { IContact } from '../../../store';
import { InfoScreen } from '../InfoScreen';

import { MainScreenContainer } from './style';

export interface InfoScreenProps {
    activeContact: IContact | null;
}

export const MainScreen = ({ activeContact, ...other }: InfoScreenProps) => {

    return (<MainScreenContainer {...other} >
                <InfoScreen activeContact={activeContact} />
        </MainScreenContainer>);
};

export default MainScreen;
