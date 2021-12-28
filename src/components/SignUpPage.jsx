import React from "react";
import SignUpContainer from "./SignUpContainer";
import * as yup from "yup";
import { useNavigate } from "react-router-native";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations";
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
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Password confirmation must match password")
    .required("Password confirm is required"),
});

const initialValues = {
  username: "",
  password: "",
  passwordConfirmation: "",
};

const SignUpPage = () => {
  const [createUser, result] = useMutation(CREATE_USER);
  const [signIn] = useSignIn();
  const navigate = useNavigate();


  const onSubmit = async (values) => {
    const { username, password, passwordConfirmation } = values;

    const variables = {
      username: username,
      password: password,
    };

    const { data, loading, error } = await createUser({
      variables,
    });
    if (error) {
      console.log("Errors: " + error);
    }
    if (data) {
      console.log(data);

      try {
        const result = await signIn({ username, password });
        if (result) {
          navigate("/");
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <SignUpContainer
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    />
  );
};

export default SignUpPage;
