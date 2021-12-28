import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import SignInContainer from "./SignInContainer";
import * as yup from "yup";

const initialTestValues = {
  username: "",
  password: "",
};

const validationTestSchema = yup.object().shape({
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

describe("SignIn", () => {
  describe("SignInContainer", () => {
    it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
      const onSubmit = jest.fn();
      const { getByTestId } = render(
        <SignInContainer
          onSubmit={onSubmit}
          initialValues={initialTestValues}
          validationSchema={validationTestSchema}
        />
      );

      fireEvent.changeText(getByTestId("usernameField"), "kalle");
      fireEvent.changeText(getByTestId("passwordField"), "password");
      fireEvent.press(getByTestId("submitButton"));

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: "kalle",
          password: "password",
        });
      });
    });
  });
});
