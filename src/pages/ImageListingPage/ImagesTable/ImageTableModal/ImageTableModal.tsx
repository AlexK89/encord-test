import { imagesApi } from 'api/imagesApi/imagesApi';
import { ImagesContext } from 'App';
import { Button, Modal, TextField } from 'components';
import { useContext, useState } from 'react';
import { ImageTableModalProps } from './types';

export const ImageTableModal: React.FC<ImageTableModalProps> = ({
  modalState,
  onClose,
}) => {
  const { images, updateImage } = useContext(ImagesContext);
  const selectedImage = images.find((image) => image.id === modalState.imageId);
  const [isServerError, setIsServerError] = useState(false);

  const formSubmitHandler = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const prediction = await imagesApi.getPrediction();

    if (prediction) {
      updateImage(modalState.imageId, {
        ...data,
        prediction: {
          ...prediction,
          createdAt: new Date().toISOString(),
        },
        isPredicted: true,
      });
      return onClose();
    }

    updateImage(modalState.imageId, { ...data });
    setIsServerError(true);
  };

  return (
    <Modal
      open={modalState.isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <>
        <form className={'w-full'} onSubmit={formSubmitHandler}>
          <div className={'mb-4'}>
            <TextField
              defaultValue={selectedImage?.title}
              name={'title'}
              label={'Title'}
              type={'text'}
              required
              className={'w-full'}
            />
          </div>
          <div className={'mb-4'}>
            <TextField
              defaultValue={selectedImage?.description}
              name={'description'}
              label={'Description'}
              type={'text'}
              required
              className={'w-full'}
            />
          </div>
          <div className={'flex items-center justify-between'}>
            <Button variant="contained" onClick={onClose}>
              Cancel
            </Button>
            {isServerError && (
              <p className={'text-center text-red-500'}>
                Something went wrong :(
              </p>
            )}
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </>
    </Modal>
  );
};
