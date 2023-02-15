import { PredictionsResponseType } from 'api/imagesApi/types';

export type ImageType = {
  id: string;
  file: File;
  isPredicted: boolean;
  predictionsData?: PredictionsResponseType;
  title?: string;
  description?: string;
};

export type ImagesContextType = {
  images: ImageType[];
  addNewImages: (newImages: ImageType[]) => void;
  updateImage: (id: string, data: Partial<ImageType>) => void;
};
