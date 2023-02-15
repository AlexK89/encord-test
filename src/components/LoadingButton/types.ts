import { ButtonProps, CircularProgressProps } from '@mui/material';

export interface LoadingButtonProps {
  buttonProps?: ButtonProps;
  circularProgressProps?: CircularProgressProps;
  isLoading: boolean;
  children: React.ReactNode;
}
