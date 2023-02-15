import { PredictionType } from 'api/imagesApi/types';
import { ImageDimensionsType } from '../types';

export type PredictionLayerProps = {
  prediction: PredictionType;
  imageDimentions: ImageDimensionsType;
};

export type LayerDimensionsType = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};
