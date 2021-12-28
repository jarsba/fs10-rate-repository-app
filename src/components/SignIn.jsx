import React from "react";
import SignInContainer from "./SignInContainer";
import * as yup from "yup";
import { useNavigate } from "react-router-native";
import useSignIn from "../hooks/useSignIn";

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

const initialValues = {
  username: "",
  password: "",
};

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const result = await signIn({ username, password });
      if (result) {
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SignInContainer
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    />
  );
};

export default SignIn;
