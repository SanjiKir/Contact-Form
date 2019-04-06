import React, { useCallback } from 'react';

import { DeleteIconBackground, DeleteIconRectangular } from './styled';

export interface DeleteIconProps {
  onClick: (arg: any) => void;
  callbackArg?: any;
}
export default ({ onClick, callbackArg, ...others }: DeleteIconProps) => {
  const handleClick = useCallback(() => {
    onClick(callbackArg);
  }, [callbackArg, onClick]);

  return (
    <DeleteIconBackground onClick={handleClick} {...others}>
      <DeleteIconRectangular />
    </DeleteIconBackground>
  );
};
