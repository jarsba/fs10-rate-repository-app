import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from "react-native";

import theme from "../../theme";

const styles = StyleSheet.create({
  input: {
    borderRadius: theme.input.borderRadius,
    marginTop: theme.input.marginTop,
    marginBottom: theme.input.marginBottom,
    padding: theme.input.padding,
    borderColor: theme.input.borderColor,
    backgroundColor: "white",
    borderWidth: theme.input.borderWidth,
    color: theme.input.color,
  },
  error: {
    borderColor: theme.input.errorColor,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.input, error && styles.error, style];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
