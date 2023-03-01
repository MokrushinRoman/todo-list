import styled from '@emotion/styled';
import { Form as FormikForm, Field, ErrorMessage as FormikError } from 'formik';

export const Form = styled(FormikForm)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  position: relative;
`;

export const Input = styled(Field)`
  width: 250px;
  padding: 0 5px;
  outline: none;
`;

export const ErrorMessage = styled(FormikError)`
  position: absolute;
  top: 45px;
  left: 0;
  display: inline-block;
  font-size: 0.75em;
  color: #bf1919;

  & ~ input {
    border-color: rgba(191, 25, 25, 0.6);
  }
`;
