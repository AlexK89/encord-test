import { Button, Modal, TextField } from 'components';
import { ImageTableModalProps } from './types';

export const ImageTableModal: React.FC<ImageTableModalProps> = ({
  modalState,
  onClose,
}) => {
  const formSubmitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <Modal
      open={modalState.isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <form className={'w-full'} onSubmit={formSubmitHandler}>
        <div className={'mb-4'}>
          <TextField
            name={'title'}
            label={'Title'}
            type={'text'}
            required
            className={'w-full'}
          />
        </div>
        <div className={'mb-4'}>
          <TextField
            name={'description'}
            label={'Description'}
            type={'text'}
            required
            className={'w-full'}
          />
        </div>
        <div className={'flex justify-between'}>
          <Button variant="contained" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Modal>
  );
};
