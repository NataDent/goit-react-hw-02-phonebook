import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import {
  FormWrapper,
  FormStyled,
  Label,
  FieldWrapper,
  ErrorMessageStyled,
  AddButton,
} from './ContactForm.styled';

const contactSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too short!').required('Required'),
  number: Yup.string()
    .min(7, 'Too Short!')
    .max(10, 'Too long!')
    .required('Required'),
});

export const ContactForm = ({ onAdd }) => {
  return (
    <FormWrapper>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={contactSchema}
        onSubmit={(values, actions) => {
          onAdd(values);
          actions.resetForm();
        }}
      >
        <FormStyled>
          <FieldWrapper>
            <Label htmlFor="name">Name</Label>
            <Field id="name" name="name" placeholder="Jane" />
            <ErrorMessageStyled component="div" name="name" />
          </FieldWrapper>

          <FieldWrapper>
            <Label htmlFor="number">Number</Label>
            <Field id="number" name="number" placeholder="123-45-67" />
            <ErrorMessageStyled component="div" name="number" />
          </FieldWrapper>

          <AddButton type="submit">Add contact</AddButton>
        </FormStyled>
      </Formik>
    </FormWrapper>
  );
};
