import { imagesApi } from 'api/imagesApi/imagesApi';
import { ImagesContext } from 'App';
import { Button, Modal, TextField } from 'components';
import { LoadingButton } from 'components';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageURL } from 'router/pageURL';
import { ImagesContextType } from 'types';
import { ImageTableModalProps } from './types';

export const ImageTableModal: React.FC<ImageTableModalProps> = ({
  modalState,
  onClose,
}) => {
  const navigate = useNavigate();
  const { images, updateImage } = useContext(
    ImagesContext
  ) as ImagesContextType;
  const selectedImage = images.find((image) => image.id === modalState.imageId);
  const [isServerError, setIsServerError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formSubmitHandler = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    // if we use React query or other libs you can make it a a part of the call, or just build a custom hook
    setIsLoading(true);
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const predictionsData = await imagesApi.getPredictions();

    if (predictionsData) {
      updateImage(modalState.imageId, {
        ...data,
        predictionsData,
        isPredicted: true,
      });
      return navigate(PageURL.PREDISCTION_LISTING);
    }

    updateImage(modalState.imageId, { ...data });
    setIsServerError(true);
    setIsLoading(false);
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
            <LoadingButton
              buttonProps={{ type: 'submit', variant: 'contained' }}
              isLoading={isLoading}
            >
              Submit
            </LoadingButton>
          </div>
        </form>
      </>
    </Modal>
  );
};
