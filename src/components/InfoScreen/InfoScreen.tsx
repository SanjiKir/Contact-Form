import React from 'react';

import { ViewField } from '../ViewField/ViewField';
import { MainContactInfo } from '../MainContactInfo';
import { Button } from '../Button';
import { useStateValue } from '../../store';

import { InfoScreenContainer, ContactDescriptionContainer, ActionElementsContainer } from './style';

export const InfoScreen = (props: any) => {
    const { state: { activeContact }, dispatch } = useStateValue();

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
