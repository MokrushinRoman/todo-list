import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Backdrop } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({
  itemData: { id, title, description, status },
  toggleStatus,
  сloseModal,
}) => {
  useEffect(() => {
    const onKeydownEscape = e => {
      if (e.code === 'Escape') {
        сloseModal();
      }
    };
    window.addEventListener('keydown', onKeydownEscape);

    return () => {
      window.removeEventListener('keydown', onKeydownEscape);
    };
  }, [сloseModal]);

  return createPortal(
    <Backdrop>
      <div className="modal">
        <h2>{title} </h2>
        <b>Description:</b>
        <p>{description} </p>
        <label>
          Status:
          <input
            type="checkbox"
            checked={status}
            onChange={() => toggleStatus(id)}
          />
        </label>
        <button type="button" onClick={сloseModal}>
          Close
        </button>
      </div>
    </Backdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  itemData: PropTypes.exact({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
  }).isRequired,
  toggleStatus: PropTypes.func.isRequired,
  сloseModal: PropTypes.func.isRequired,
};
