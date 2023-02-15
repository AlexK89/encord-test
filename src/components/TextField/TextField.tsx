import MuiTextField, { TextFieldProps } from '@mui/material/TextField';

export const TextField: React.FC<TextFieldProps> = ({
  variant = 'outlined',
  ...props
}) => <MuiTextField variant={variant} {...props} />;
