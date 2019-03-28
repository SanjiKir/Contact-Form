
import { ChangeEvent, useCallback } from 'react';

export type IChangeEvent<T> = (e: ChangeEvent<T>, value?: string) => void;

export const useChangeEventHook = <T>(onChange?: IChangeEvent<T>) => { 
    const handleChange = useCallback((e: ChangeEvent<T>) => {
        if (onChange) {
            // @ts-ignore
            const value = e.currentTarget.value as unknown as string;
            onChange(e, value);
        }
    }, [onChange]);

    return {
        handleChange,
    };
};
