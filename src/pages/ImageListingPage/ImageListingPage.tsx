import { v4 as uuidv4 } from 'uuid';
import { Button } from 'components';
import { ImagesTable } from './ImagesTable';
import { ImagesContext } from 'App';
import { useContext } from 'react';
import { ImageType } from 'types';

export const ImageListingPage = () => {
  const { addNewImages } = useContext(ImagesContext);

  const fileUploadHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newImages = Array.from(files).reduce((acc: ImageType[], file) => {
        const fileId = uuidv4();

        return [
          ...acc,
          {
            id: fileId,
            file,
            isPredicted: false,
          },
        ];
      }, []);

      addNewImages(newImages);
    }
  };

  return (
    <div className={'p-4'}>
      <div className={'flex items-center'}>
        <h1 className={'pr-4 font-semibold'}>Add more images</h1>

        <Button variant="contained" component={'label'}>
          Upload
          <input
            hidden
            accept="image/*"
            multiple
            type="file"
            onChange={fileUploadHandler}
          />
        </Button>
      </div>
      <ImagesTable />
    </div>
  );
};
