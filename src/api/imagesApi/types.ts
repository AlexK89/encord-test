export type PredictionType = {
  bbox: {
    x1: number;
    x2: number;
    y1: number;
    y2: number;
  };
  label: string;
  score: string;
};

export type PredictionsResponseType = {
  predictions: PredictionType[];
  description: string;
  createdAt: Date;
};
