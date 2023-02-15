import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ImagesContext } from 'App';
import { ImagesContextType, ImageType } from 'types';
import { PredictionLayer } from './PredictionLayer';
import { ImageDimensionsType } from './types';
import { PageURL } from 'router/pageURL';
import { Button } from 'components';

export const PredictionDetailsPage = () => {
  const { images } = useContext(ImagesContext) as ImagesContextType;
  const { id } = useParams();

  const [imageDimentions, setImageDimentions] =
    useState<ImageDimensionsType | null>(null);
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  useEffect(() => {
    const image = images.find((image) => image.id === id);
    if (image) setSelectedImage(image);
  }, [id, images]);

  useEffect(() => {
    window.addEventListener('resize', () => setImageDimentions(null));
  }, []);

  const imageLoadHandler = (event: React.SyntheticEvent) => {
    if (!imageDimentions) {
      const image = event.target as HTMLImageElement;

      setImageDimentions({
        width: image.width,
        height: image.height,
        naturalWidth: image.naturalWidth,
        naturalHeight: image.naturalHeight,
      });
    }
  };

  if (!selectedImage)
    return <h3 className={'mt-4 text-center'}>Image not found</h3>;

  return (
    <div className={'mt-4 flex flex-col items-center'}>
      {selectedImage && (
        <div className={'relative w-3/5'}>
          <img
            src={URL.createObjectURL(selectedImage.file)}
            alt={selectedImage.title}
            onLoad={imageLoadHandler}
          />
          <>
            {imageDimentions &&
              selectedImage?.predictionsData?.predictions.map(
                (prediction, index) => (
                  <PredictionLayer
                    key={index}
                    prediction={prediction}
                    imageDimentions={imageDimentions}
                  />
                )
              )}
          </>
        </div>
      )}
      <Link to={PageURL.PREDISCTION_LISTING} className={'mt-4'}>
        <Button>Back</Button>
      </Link>
    </div>
  );
};
