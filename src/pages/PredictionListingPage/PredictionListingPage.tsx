import { ImagesContext } from 'App';
import { useContext } from 'react';
import { ImagesContextType } from 'types';
import { PredictionTable } from './PredictionTable';

export const PredictionListingPage = () => {
  const { images } = useContext(ImagesContext) as ImagesContextType;
  const predictedImages = images.filter((image) => image.isPredicted);

  return (
    <div className={'flex justify-center'}>
      <div className={'mt-24 flex max-w-4xl p-4'}>
        {predictedImages.length ? (
          <PredictionTable predictedImages={predictedImages} />
        ) : (
          <h3>No predicted images yet</h3>
        )}
      </div>
    </div>
  );
};
