import { FC } from 'react';
import { Button as MuiButton } from '@mui/material';
import { ButtonProps } from './types';

const Button: FC<ButtonProps> = ({ title, onClick, variant = 'contained' }) => {
  return (
    <MuiButton
      variant={variant}
      onClick={onClick}
      sx={{
        backgroundColor: 'var(--primary)',
        '&:hover': {
          backgroundColor: 'var(--primary-hover)',
        },
      }}
    >
      {title}
    </MuiButton>
  );
};

export { Button };
