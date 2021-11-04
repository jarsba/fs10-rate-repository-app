import React from "react";
import { StyleSheet, Pressable } from "react-native";
import Text from "./Text";

import theme from "../theme";

const styles = StyleSheet.create({
  button: {
    display: theme.submitButton.display,
    flexDirection: "row",
    backgroundColor: theme.submitButton.backgroundColor,
    justifyContent: "center",
    margin: 10,
    paddingVertical: 15,
    borderRadius: 3,
  },
  text: {
    color: theme.submitText.color,
    fontWeight: "bold",
  },
});

const FormikSubmitButton = ({
  text,
  onSubmit,
  buttonStyles,
  textStyles,
  ...props
}) => {
  const buttonStyle = [styles.button, buttonStyles];

  const textStyle = [styles.text, textStyles];

  return (
    <Pressable onPress={onSubmit} style={buttonStyle}>
      <Text style={textStyle} {...props}>
        {text}
      </Text>
    </Pressable>
  );
};

export default FormikSubmitButton;
