export type HistoryItem = {
  result: number;
  isWin: boolean;
  time: string;
  conditionalLabel: string;
  threshold: number;
};

export type HistoryTableProps = {
  history: HistoryItem[];
};
