import React from "react";
import { View, StyleSheet, Pressable, ScrollView } from "react-native";
import Constants from "expo-constants";
import { Link } from "react-router-native";

import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight * 2,
    paddingBottom: Constants.statusBarHeight / 2,
    paddingLeft: 10,
    backgroundColor: "#24292e",
  },
  text: {
    color: "white",
  },
  flexContainerH: {
    display: "flex",
    flexDirection: "row",
    padding: 3,
  },
  link: {
    padding: 5,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View style={styles.flexContainerH}>
          <Pressable style={styles.link}>
            <Link to="/">
              <Text fontSize="subheading" fontWeight="bold" style={styles.text}>Repositories</Text>
            </Link>
          </Pressable>
          <Pressable style={styles.link}>
            <Link to="/login">
              <Text fontSize="subheading" fontWeight="bold" style={styles.text}>Login</Text>
            </Link>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default AppBar;
