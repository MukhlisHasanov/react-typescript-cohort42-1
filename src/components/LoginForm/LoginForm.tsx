import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { InputsContainer, LoginFormContainer, Title } from "./styles";

function LoginForm() {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email field is required")
      .email()
      .min(7, "The minimum email lenght is 7")
      .max(30, "The maximum email lenght is 30"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: (values, helpers) => {
      // Тут прописываем логику по работе с данными, которые пользователь ввел в элементы формы
      // Например: отправка данных на сервер
      console.log(values);
      console.log(helpers);
      console.log("Submit works");
    },
  });

  console.log(formik.values);
  return (
    <LoginFormContainer onSubmit={formik.handleSubmit}>
      <Title>Login form</Title>
      <InputsContainer>
        <Input
          id="login-email"
          label="Email"
          placeholder="Enter your email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email}
        />
        <Input
          id="login-password"
          label="Password"
          placeholder="Enter your password"
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
        />
      </InputsContainer>
      <Button type="submit" name="Login" />
    </LoginFormContainer>
  );
}

export default LoginForm;
