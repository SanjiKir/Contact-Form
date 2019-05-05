import React, { useCallback } from  'react';

import { Button } from '../../components';
import { useContactAction, useModeAction } from '../../store';

export default () => {
    const { choseContact } = useContactAction();
    const { setCreateMode, isCreateMode } = useModeAction();
    const handleNewContactClick = useCallback(() => {
        choseContact('');
        setCreateMode();
      }, []);

    return (
        // only `small` without ={true}
        <Button disabled={isCreateMode} type="button" onClick={handleNewContactClick} small={true}>
            +
        </Button>
    );
};
