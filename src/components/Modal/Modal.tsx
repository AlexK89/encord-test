import MuiModal, { ModalProps } from '@mui/material/Modal';

export const Modal: React.FC<ModalProps> = ({ children, ...props }) => {
  return (
    <MuiModal {...props}>
      <div
        className={
          'absolute top-1/2 left-1/2 min-w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-12'
        }
      >
        {children}
      </div>
    </MuiModal>
  );
};
