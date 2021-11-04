import React from "react";
import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import FormikTextInput from "./FormikTextInput";
import FormikSubmitButton from "./FormikSubmitButton";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingTop: 10,
  },
});

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(4, "Username must be 4-50 character long")
    .max(50, "Username must be 4-50 character long")
    .required("Username is required"),
  password: yup
    .string()
    .min(4, "Password must be 4-100 character long")
    .max(100, "Password must be 4-100 character long")
    .required("Password is required"),
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput
        name="password"
        placeholder="Password"
        secureTextEntry={true}
      />
      <FormikSubmitButton text="Log In" onSubmit={onSubmit} />
    </View>
  );
};

const initialValues = {
  username: "",
  password: "",
};

const SignIn = () => {
  const onSubmit = (values) => {
    const username = parseFloat(values.username);
    const password = parseFloat(values.password);
    console.log(`Username: ${username}, password: ${password}`);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
