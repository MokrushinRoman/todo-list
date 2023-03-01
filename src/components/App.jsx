import { GlobalStyle, Layout, TodoForm, TodoTable } from 'components';
import { useState } from 'react';

// const initialTodos = [
//   {
//     id: 2,
//     title: 'Finish Task',
//     description: 'qweqwe weqweqweqwe qweqwe qweqweqwe',
//     status: false,
//   },
//   {
//     id: 3,
//     title: 'Finish Task asdasdasda qweqwe qweqweqweq weqweqw eqweqweqwe',
//     description:
//       'qweqwe qweqweqweq weqweqw eqweqweqwe qweqwe qweqweqweq weqweqw eqweqweqweqweqwe qweqweqweq weqweqw eqweqweqweqweqwe qweqweqweq weqweqw eqweqweqwe',
//     status: false,
//   },
//   {
//     id: 4,
//     title: 'Finish Task',
//     description: 'qweqw eqweqw eqweqwe qweqweqweqw eqwe',
//     status: false,
//   },
//   {
//     id: 5,
//     title: 'Finish Task',
//     description: 'qweqw eqweqwe qweqweqwe qweqwe qweqwe',
//     status: false,
//   },
// ];

export const App = () => {
  const [todos, setTodos] = useState([] /*initialTodos*/);

  const handleToggleStatus = incId => {
    setTodos(prevState =>
      prevState.map(item =>
        item.id === incId ? { ...item, status: !item.status } : item
      )
    );
  };

  const handleFormSubmit = data => {
    setTodos(prevState => [...prevState, data]);
  };

  return (
    <>
      <GlobalStyle />
      <main>
        <Layout>
          <TodoForm onFormSubmit={handleFormSubmit} />
          <TodoTable todos={todos} onToggleStatus={handleToggleStatus} />
        </Layout>
      </main>
    </>
  );
};

/*
Used libraries:
 - formik
 - yup
 - nanoid
 - emotion
 - modern-normalize
 - propTypes
*/
