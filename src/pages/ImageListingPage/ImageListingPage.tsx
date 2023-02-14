import { v4 as uuidv4 } from 'uuid';
import { Button } from 'components/common';
import { ImagesTable } from './ImagesTable';

export const ImageListingPage = () => {
  const fileUploadHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newImages = Array.from(files).reduce((acc, file) => {
        const fileId = uuidv4();

        return {
          ...acc,
          [fileId]: {
            file,
            isProcessed: false,
          },
        };
      }, {});

      return newImages;
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
