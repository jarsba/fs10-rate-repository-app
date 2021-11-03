import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight * 2,
    paddingBottom: Constants.statusBarHeight / 2,
    paddingLeft: 10,
    backgroundColor: "#24292e",
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text style={styles.text}> Repositories</Text>
      </Pressable>
    </View>
  );
};

export default AppBar;
