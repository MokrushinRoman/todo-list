import PropTypes from 'prop-types';
import { TodoItem } from 'components';
import { Table } from './TodoTable.styled';

export const TodoTable = ({ todos, onToggleStatus }) => {
  return (
    <Table todos={todos}>
      <thead className="tableHeader">
        <tr>
          <th>ID</th>
          <th>TITLE</th>
          <th>DESCRIPTION</th>
          <th>STATUS</th>
        </tr>
      </thead>

      <tbody className="tableBody">
        <tr id="emptyRow">
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        {todos.map((item, index) => {
          return (
            <TodoItem
              key={item.id}
              itemData={item}
              itemIndex={index}
              onToggleStatus={onToggleStatus}
            />
          );
        })}
      </tbody>
    </Table>
  );
};

TodoTable.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      status: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  onToggleStatus: PropTypes.func.isRequired,
};
