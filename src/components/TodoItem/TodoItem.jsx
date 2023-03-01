import { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components';
import { Wraper } from './TodoItem.styled';

export const TodoItem = ({
  itemData: { id, title, description, status },
  itemIndex: index,
  onToggleStatus,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = e => {
    if (e.target.nodeName === 'INPUT') {
      return;
    }

    setIsModalOpen(isModalOpen => !isModalOpen);
  };

  const toggleModal = e => {
    setIsModalOpen(isModalOpen => !isModalOpen);
  };

  return (
    <>
      <tr onClick={openModal}>
        <td>{Number(index) + 1}.</td>
        <td>
          <Wraper>{title}</Wraper>{' '}
        </td>
        <td>
          <Wraper>{description}</Wraper>
        </td>
        <td>
          <input
            type="checkbox"
            checked={status}
            onChange={() => onToggleStatus(id)}
          />
        </td>
      </tr>

      {isModalOpen && (
        <Modal
          сloseModal={toggleModal}
          itemData={{ id, title, description, status }}
          toggleStatus={onToggleStatus}
        />
      )}
    </>
  );
};

TodoItem.propTypes = {
  itemData: PropTypes.exact({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
  }).isRequired,
  itemIndex: PropTypes.number.isRequired,
  onToggleStatus: PropTypes.func.isRequired,
};
