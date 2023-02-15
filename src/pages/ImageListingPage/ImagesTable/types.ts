import { ImageType } from 'types';

export interface ImagesTableProps {
  images: ImageType[];
}
export interface ModalState {
  isOpen: boolean;
  imageId: string;
}
