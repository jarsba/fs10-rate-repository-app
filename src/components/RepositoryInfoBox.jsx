import React from "react";
import { View, StyleSheet } from "react-native";

import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    alignItems: "center",
    padding: 4,
  },
  boxValue: {
    marginBottom: 5,
  },
});

export const formatNumber = (number) => {
  if (number >= 1000) {
    return `${(number / 1000).toFixed(1)}k`;
  }
  return number;
};

const RepositoryInfoBox = ({ title, value, testID }) => {

  return (
    <View style={styles.container}>
      <Text
        fontSize="subheading"
        fontWeight="bold"
        style={styles.boxValue}
        testID={testID}
      >
        {formatNumber(value)}
      </Text>
      <Text color="textSecondary">{title}</Text>
    </View>
  );
};

export default RepositoryInfoBox;
