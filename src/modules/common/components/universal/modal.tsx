/* eslint-disable */
import { FC } from 'react';
import { createPortal } from 'react-dom';
import BackgroundDim from '../styled/background.dim';
import { IModal } from '../../types/form.types';

const Modal: FC<IModal> = ({ isModalOpen, children }) => {
  return (
    <div>
      {
        isModalOpen && (
          <>
            {createPortal(
              <BackgroundDim>
                {children}
              </BackgroundDim>,
              document.body
            )}
          </>
        )
      }
    </div>
  );
}

export default Modal;
