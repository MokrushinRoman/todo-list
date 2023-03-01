import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { ErrorMessage, Form, Input, Label } from './TodoForm.styled';

const ContactSchema = Yup.object().shape({
  title: Yup.string()
    .min(5, 'This field is too short!')
    .required('This field is empty!'),
  description: Yup.string()
    .min(5, 'This field is too short!')
    .required('This field is empty!'),
});

export const TodoForm = ({ onFormSubmit }) => {
  return (
    <Formik
      initialValues={{ title: '', description: '' }}
      validationSchema={ContactSchema}
      onSubmit={(values, { resetForm }) => {
        const normalizedTitle = values.title.trim();
        const normalizedDescription = values.description.trim();

        const formData = {
          id: nanoid(),
          title: normalizedTitle,
          description: normalizedDescription,
          status: false,
        };
        onFormSubmit(formData);
        resetForm();
      }}
    >
      <Form>
        <Label>
          <span>Title:</span>
          <ErrorMessage name="title" component="div" />
          <Input name="title" autoComplete="off" />
        </Label>
        <Label>
          <span>Description:</span>
          <ErrorMessage name="description" component="div" />
          <Input name="description" autoComplete="off" />
        </Label>

        <button type="submit">Create</button>
      </Form>
    </Formik>
  );
};

TodoForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
