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

const RepositoryInfoBox = ({ title, value }) => {
  const formatNumber = (number) => {
    if (number >= 1000) {
      return `${(number / 1000).toFixed(1)}k`;
    }
    return number;
  };

  return (
    <View style={styles.container}>
      <Text fontSize="subheading" fontWeight="bold" style={styles.boxValue}>
        {formatNumber(value)}
      </Text>
      <Text color="textSecondary">{title}</Text>
    </View>
  );
};

export default RepositoryInfoBox;
