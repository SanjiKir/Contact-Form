import React from 'react';

import { ViewField } from '../ViewField/ViewField';
import { MainContactInfo } from '../MainContactInfo';
import { Button } from '../Button';

import { InfoScreenContainer, ContactDescriptionContainer, ActionElementsContainer } from './style';

export const InfoScreen = (props: any) => {

    return (<InfoScreenContainer>
                <MainContactInfo>Adam Acer</MainContactInfo>
                <ContactDescriptionContainer>
                    <ViewField labelText="phone" valueText="399-692-7753" />
                    <ViewField labelText="email" valueText="adam.acer@gmail.com" />
                    <ViewField labelText="address" valueText="99 Weiland Way Cupertino CA 95014 United States" />
                    <ViewField labelText="phone" valueText="Adam's California address" />
                </ContactDescriptionContainer>
                <ActionElementsContainer>
                    <Button small={true}>+</Button>
                    <Button>Done</Button>
                </ActionElementsContainer>
        </InfoScreenContainer>);
};

export default InfoScreen;
