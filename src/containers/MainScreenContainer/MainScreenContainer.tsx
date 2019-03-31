import React from 'react';

import { useStateValue } from '../../store';
import { MainScreen } from '../../components';

export default (props: any) => {
    const { state: { activeContact }, dispatch } = useStateValue();

    return <MainScreen activeContact={activeContact} />;
};
