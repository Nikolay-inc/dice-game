'use client';
import { useState } from 'react';
import { Box, Container, SelectChangeEvent } from '@mui/material';
import { AlertMessage, Button, Slider, RadioGroup } from './components/ui';
import HistoryTable from './components/HistoryTable';
import { CONDITIONS, MAX_HISTORY } from './const';
import { ConditionType } from './const/types';
import { HistoryItem } from './components/HistoryTable/types';

export default function Home() {
  const [condition, setCondition] = useState<ConditionType>('greater');
  const [threshold, setThreshold] = useState<number>(50);
  const [result, setResult] = useState<number | null>(null);
  const [isWin, setIsWin] = useState<boolean | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [showResult, setShowResult] = useState<boolean>(false);

  const handleThresholdChange = (value: number) => {
    setThreshold(value);
  };

  const handleConditionChange = (e: SelectChangeEvent) => {
    setCondition(e.target.value as ConditionType);
  };

  const playGame = () => {
    const rolled = Math.floor(Math.random() * 100) + 1;
    const win = condition === 'greater' ? rolled > threshold : rolled < threshold;

    setResult(rolled);
    setIsWin(win);
    setShowResult(true);

    const dateNow = new Date();
    const time = dateNow.toLocaleTimeString('en-US', { hour12: false });
    const conditionalLabel = condition === 'greater' ? CONDITIONS[1].label : CONDITIONS[0].label;

    setHistory((prev) => {
      const newHistory = [
        { result: rolled, isWin: win, time, conditionalLabel, threshold },
        ...prev,
      ];
      return newHistory.slice(0, MAX_HISTORY);
    });
  };

  return (
    <div>
      <Container maxWidth={false} disableGutters sx={{ mt: 5, maxWidth: '320px' }}>
        <AlertMessage showResult={showResult} isWin={isWin} condition={condition} />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: '100px' }}>
          <Box
            sx={{
              width: '320px',
              height: '200px',
              backgroundColor: 'var(--light-gray)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              fontSize: '96px',
              fontWeight: 300,
            }}
          >
            {result || threshold}
          </Box>

          <RadioGroup
            condition={condition}
            handleConditionChange={handleConditionChange}
            conditions={CONDITIONS}
          />
          <Slider threshold={threshold} handleThresholdChange={handleThresholdChange} />
          <Button title={'Play'} onClick={playGame} />
        </Box>
      </Container>

      <Container maxWidth={false} disableGutters sx={{ maxWidth: '600px', width: '100%', mt: 3 }}>
        <HistoryTable history={history} />
      </Container>
    </div>
  );
}
