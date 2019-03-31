import React from 'react';

import { IContact } from '../../../store';
import { Button } from '../../lib';
import { ViewField } from '../ViewField';
import { MainContactInfo } from '../MainContactInfo';

import { InfoScreenContainer, ContactDescriptionContainer, ActionElementsContainer } from './style';

export interface InfoScreenProps {
    activeContact: IContact | null;
}

export const InfoScreen = ({ activeContact, ...other }: InfoScreenProps) => {

    return (<InfoScreenContainer>
                {activeContact && (
                    <>
                    <MainContactInfo>{`${activeContact.name} ${activeContact.lastName}`}</MainContactInfo>
                    <ContactDescriptionContainer>
                        <ViewField labelText="phone" valueText={activeContact.phone} />
                        <ViewField labelText="email" valueText={activeContact.email} />
                        <ViewField labelText="address" valueText={activeContact.address} />
                        <ViewField labelText="note" valueText={activeContact.note} />
                    </ContactDescriptionContainer>
                    </>
                )}
                <ActionElementsContainer>
                    <Button small={true}>+</Button>
                {activeContact && (
                    <Button>Done</Button>
                )}
                </ActionElementsContainer>
        </InfoScreenContainer>);
};

export default InfoScreen;
