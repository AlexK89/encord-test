import { FC } from 'react';
import MuiButton from '@mui/material/Button';
import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = (props) => <MuiButton {...props} />;
