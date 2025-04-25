import { FC } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { HistoryTableProps } from './types';

const HistoryTable: FC<HistoryTableProps> = ({ history }) => {
  const cellStyles = {
    padding: '6px 16px',
  };

  return (
    <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ minWidth: 84 }}>Time</TableCell>
            <TableCell>Guess</TableCell>
            <TableCell>Result</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {history.length === 0 ? (
            <TableRow>
              <TableCell sx={{ ...cellStyles, textAlign: 'center' }} colSpan={3}>
                No game history yet.
              </TableCell>
            </TableRow>
          ) : (
            history.map((item, index) => (
              <TableRow key={index} sx={{ borderBottom: '1px solid var(--border-gray)' }}>
                <TableCell sx={cellStyles}>{item.time}</TableCell>
                <TableCell sx={cellStyles}>
                  {item.conditionalLabel} {item.threshold}
                </TableCell>
                <TableCell
                  sx={{
                    ...cellStyles,
                    color: item.isWin ? 'var(--success-text)' : 'var(--error-text)',
                  }}
                >
                  {item.result}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HistoryTable;
