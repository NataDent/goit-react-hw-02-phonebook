import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';

export const FormWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  height: auto;
  width: 40%;
  margin-bottom: 10px;
  padding: 20px;
  border: 1px solid black;
`;

export const FormStyled = styled(Form)`
  margin-top: 16px;
`;

export const Label = styled.label`
  font-size: 20px;
  display: block;
  padding: 4px 0;
`;

export const FieldWrapper = styled.div`
  height: 72px;
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  color: red;
`;

export const AddButton = styled.button`
  margin-top: 8px;
  padding: 4px;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid darkgrey;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transform: scale(1.05);
    background-color: lightblue;
  }
`;
