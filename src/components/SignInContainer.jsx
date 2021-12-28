import React from "react";
import { View, StyleSheet } from "react-native";
import { Formik } from "formik";

import FormikTextInput from "./FormikTextInput";
import FormikSubmitButton from "./FormikSubmitButton";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingTop: 10,
  },
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name="username"
        placeholder="Username"
        testID="usernameField"
      />
      <FormikTextInput
        name="password"
        placeholder="Password"
        secureTextEntry={true}
        testID="passwordField"
      />
      <FormikSubmitButton
        text="Log In"
        onSubmit={onSubmit}
        testID="submitButton"
      />
    </View>
  );
};

const SignInContainer = ({ initialValues, onSubmit, validationSchema }) => {
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

export default SignInContainer;
