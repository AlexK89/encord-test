import { ImagesContext } from 'App';
import { useContext } from 'react';
import { ImagesContextType } from 'types';
import { PredictionTable } from './PredictionTable';

export const PredictionListingPage = () => {
  const { images } = useContext(ImagesContext) as ImagesContextType;
  const predictedImages = images.filter((image) => image.isPredicted);

  return (
    <div className={'mt-24 p-4 text-center'}>
      {predictedImages.length ? (
        <PredictionTable predictedImages={predictedImages} />
      ) : (
        'No predicted images yet'
      )}
    </div>
  );
};
