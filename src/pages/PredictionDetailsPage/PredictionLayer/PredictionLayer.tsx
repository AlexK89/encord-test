import { Box } from 'components';
import { useEffect, useState } from 'react';
import { LayerDimensionsType, PredictionLayerProps } from './types';

export const PredictionLayer: React.FC<PredictionLayerProps> = ({
  prediction,
  imageDimentions,
}) => {
  const [layerDimensions, setLayerDimensions] = useState<LayerDimensionsType>({
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
  });

  const { bbox, label, score } = prediction;
  const formattedScore = parseFloat(score).toFixed(2);
  const { x1, x2, y1, y2 } = bbox;

  useEffect(() => {
    if (imageDimentions) {
      const calcX1 =
        (x1 * imageDimentions.width) / imageDimentions.naturalWidth;
      const calcY1 =
        (y1 * imageDimentions.height) / imageDimentions.naturalHeight;
      const calcX2 =
        (x2 * imageDimentions.width) / imageDimentions.naturalWidth;
      const calcY2 =
        (y2 * imageDimentions.height) / imageDimentions.naturalHeight;

      setLayerDimensions({
        x1: calcX1 < 0 ? 0 : calcX1,
        y1: calcY1 < 0 ? 0 : calcY1,
        x2: calcX2 > imageDimentions.width ? 0 : imageDimentions.width - calcX2,
        y2:
          calcY2 > imageDimentions.height ? 0 : imageDimentions.height - calcY2,
      });
    }
  }, [imageDimentions, x1, x2, y1, y2]);

  const boxStyles = {
    position: 'absolute',
    top: `${layerDimensions.y1}px`,
    left: `${layerDimensions.x1}px`,
    bottom: `${layerDimensions.y2}px`,
    right: `${layerDimensions.x2}px`,
    border: '2px solid #7C1383',
    boxSizing: 'border-box',
    borderRadius: '4px',
    color: '#7C1383',
    backgroundColor: 'rgba(124, 19, 131, 0.2)',
    fontSize: '12px',
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: '1.2',
    zIndex: 1,
  };

  const labelStyles = {
    position: 'absolute',
    bottom: '0',
    right: '0',
  };

  return (
    <Box sx={boxStyles}>
      <Box component={'p'} sx={labelStyles}>
        {label} ({formattedScore}%)
      </Box>
    </Box>
  );
};
