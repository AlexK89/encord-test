import { FC } from 'react';
import MuiCircularLoader, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';

export const CircularLoader: FC<CircularProgressProps> = (props) => (
  <MuiCircularLoader {...props} />
);
