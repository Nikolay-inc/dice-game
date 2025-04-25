import { FC } from 'react';
import { Fade, Box, Alert, Typography } from '@mui/material';
import { AlertMessageProps } from './types';

const AlertMessage: FC<AlertMessageProps> = ({ showResult, isWin, condition }) => {
  return (
    <Fade in={showResult}>
      <Box
        sx={{
          position: 'fixed',
          top: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 99,
          maxWidth: '632px',
          width: '100%',
          fontWeight: 500,
          px: 2,
        }}
      >
        <Alert
          severity={isWin ? 'success' : 'error'}
          sx={{
            backgroundColor: isWin ? 'var(--success-bg)' : 'var(--error-bg)',
            color: 'var(--white)',
            '& .MuiAlert-icon': {
              color: 'var(--white)',
            },
          }}
        >
          <Typography sx={{ fontSize: '16px' }}>You {isWin ? 'won' : 'lost'}</Typography>
          {!isWin && (
            <Typography sx={{ fontSize: '14px' }}>
              Number was {condition === 'greater' ? 'lower' : 'higher'}
            </Typography>
          )}
        </Alert>
      </Box>
    </Fade>
  );
};

export { AlertMessage };
