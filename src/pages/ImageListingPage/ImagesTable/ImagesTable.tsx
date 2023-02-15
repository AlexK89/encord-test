import { useState } from 'react';
import dayJs from 'dayjs';
import { Button, Table } from 'components';
import { ImageType } from 'types';
import { ImageTableModal } from './ImageTableModal';
import { ImagesTableProps, ModalState } from './types';

export const ImagesTable: React.FC<ImagesTableProps> = ({ images }) => {
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    imageId: '',
  });

  const columns = [
    { id: 'fileName', label: 'File Name' },
    { id: 'fileSize', label: 'Size' },
    { id: 'uploadedAt', label: 'Uploaded At' },
    { id: 'cta', label: '' },
  ];

  const modalStateHandler =
    (newState: boolean, imageId = '') =>
    () => {
      setModalState({ isOpen: newState, imageId });
    };

  const formattedImageRows = images.map((image: ImageType) => {
    return {
      id: image.id,
      cells: [
        image.file.name,
        (image.file.size / 1000000).toFixed(2) + ' MB',
        dayJs(image.file.lastModified).format('DD/MM/YYYY HH:mm'),
        <Button
          key={`cta-${image.id}`}
          variant="contained"
          disabled={image.isPredicted}
          onClick={modalStateHandler(true, image.id)}
        >
          {image.isPredicted ? 'Predicted' : 'Predict'}
        </Button>,
      ],
    };
  });

  return (
    <>
      <ImageTableModal
        modalState={modalState}
        onClose={modalStateHandler(false)}
      />
      <Table rows={formattedImageRows} columns={columns} />
    </>
  );
};
