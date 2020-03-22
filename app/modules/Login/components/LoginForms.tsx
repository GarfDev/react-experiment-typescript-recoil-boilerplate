import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';

interface Props {
  //...
  onSubmit: (username: string, password: string, callback: (response: any) => void) => void;
}

export default function LoginForm(props: Props) {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          props.onSubmit(values.email, values.password);
        }, 4);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => {
        return (
          <StyledForm onSubmit={handleSubmit}>
            <StyledInput
              type="text"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="Email"
            />
            {errors.email && touched.email && errors.email}
            <StyledInput
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder="Password"
            />
            {errors.password && touched.password && errors.password}
            <StyledButton type="submit" disabled={isSubmitting}>
              {!isSubmitting ? 'Submit' : 'Loading..'}
            </StyledButton>
          </StyledForm>
        );
      }}
    </Formik>
  );
}

const StyledForm = styled.form`
  display: flex;
  width: 100%;
  height: 99vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 25%;
  height: 1%;
  color: pink;
  font-size: 1.5rem;
  outline: none;
  border: 2px solid pink;
  border-radius: 25px;
  padding: 20px;
  margin-bottom: 20px;
  ::placeholder {
    color: pink;
  }
`;

const StyledButton = styled.button`
  height: 1%;
  color: pink;
  line-height: 0;
  font-size: 20px;
  outline: none;
  border: 2px solid pink;
  border-radius: 25px;
  padding: 20px;
`;
