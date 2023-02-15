import { FC } from 'react';
import { Button } from '../Button';
import { CircularLoader } from '../CircularLoader';
import { LoadingButtonProps } from './types';

export const LoadingButton: FC<LoadingButtonProps> = ({
  buttonProps,
  circularProgressProps,
  isLoading,
  children,
}) => {
  return (
    <Button {...buttonProps} disabled={buttonProps?.disabled || isLoading}>
      {isLoading ? (
        <CircularLoader size={20} {...circularProgressProps} />
      ) : (
        children
      )}
    </Button>
  );
};
