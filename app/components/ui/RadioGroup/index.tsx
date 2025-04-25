import { FormControl, RadioGroup as MuiRadioGroup, FormControlLabel, Radio } from '@mui/material';
import { RadioGroupProps } from './types';

const RadioGroup: React.FC<RadioGroupProps> = ({
  condition,
  handleConditionChange,
  conditions,
}) => {
  return (
    <FormControl component="fieldset" sx={{ display: 'flex', alignItems: 'center' }}>
      <MuiRadioGroup
        row
        value={condition}
        onChange={handleConditionChange}
        sx={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}
      >
        {conditions.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={
              <Radio
                sx={{
                  color: 'var(--primary)',
                  '&.Mui-checked': {
                    color: 'var(--primary)',
                  },
                  '& .MuiSvgIcon-root': {
                    fontSize: 18,
                  },
                }}
              />
            }
            label={option.label}
            labelPlacement="start"
            sx={{ mx: 2 }}
          />
        ))}
      </MuiRadioGroup>
    </FormControl>
  );
};

export { RadioGroup };
