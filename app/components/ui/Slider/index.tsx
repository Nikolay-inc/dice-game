import { FC } from 'react';
import { Slider as MuiSlider } from '@mui/material';
import { SliderProps } from './types';

const Slider: FC<SliderProps> = ({ threshold, handleThresholdChange, min = 0, max = 100 }) => {
  return (
    <MuiSlider
      value={threshold}
      onChange={(_, value) => handleThresholdChange(+value)}
      valueLabelDisplay="on"
      min={min}
      max={max}
      marks={[
        { value: 0, label: min },
        { value: 20 },
        { value: 40 },
        { value: 60 },
        { value: 80 },
        { value: 100, label: max },
      ]}
      sx={{
        mt: 3,
        color: 'var(--primary)',
        '& .MuiSlider-track, & .MuiSlider-rail': {
          height: '2px',
        },
        '& .MuiSlider-thumb': {
          width: '12px',
          height: '12px',
          '&:hover, &.Mui-focusVisible, &.Mui-active': {
            boxShadow: '0px 0px 0px 8px rgba(156, 39, 176, 0.16)',
          },
        },
        '& .MuiSlider-markLabel': {
          fontSize: '12px',
          color: 'var(--mid-gray)',
          transform: 'translateX(-50%)',
        },
        '& .MuiSlider-markLabel[data-index="0"]': {
          transform: 'translateX(0%)',
        },
        '& .MuiSlider-markLabel[data-index="5"]': {
          transform: 'translateX(-85%)',
        },
        '& .MuiSlider-valueLabel': {
          borderRadius: '4px',
        },
      }}
    />
  );
};

export { Slider };
