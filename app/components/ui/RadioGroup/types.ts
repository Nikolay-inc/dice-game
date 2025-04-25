import { ConditionsType } from '@/app/const/types';

export type RadioGroupProps = {
  condition: 'greater' | 'less';
  handleConditionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  conditions: ConditionsType[];
};
