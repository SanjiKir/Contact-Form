
import { useCallback, useState } from 'react';

export const useFocusHook = () => { 
    const [focused, setFocused] = useState(false);

    const handleFocus = useCallback(() => {
        setFocused(f => !f);
    }, []);

    return {
        focused,
        handleFocus,
    };
};
