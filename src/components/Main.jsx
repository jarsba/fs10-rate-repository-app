import React from "react";
import { StyleSheet, View } from "react-native";
import { Route, Routes } from "react-router-native";

import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import SignIn from "./SignIn";
import ReviewFormPage from "./ReviewFormPage";
import SignUpPage from "./SignUpPage";

import theme from "../../theme";
import RepositoryPage from "./RepositoryPage";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/:id" element={<RepositoryPage />} />
        <Route path="/create" element={<ReviewFormPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </View>
  );
};

export default Main;
