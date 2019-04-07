import React, { useCallback } from  'react';

import { Button } from '../../components';
import { useContactAction, useModeAction } from '../../store';

export default () => {
    const { choseContact } = useContactAction();
    const { setCreateMode } = useModeAction();
    
    const handleNewContactClick = useCallback(() => {
        choseContact(null);
        setCreateMode();
      }, []);

    return (
        <Button type="button" onClick={handleNewContactClick} small={true}>
            +
        </Button>
    );
};
