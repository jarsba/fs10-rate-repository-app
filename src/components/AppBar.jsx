import React from "react";
import { View, StyleSheet, Pressable, ScrollView } from "react-native";
import Constants from "expo-constants";
import { Link } from "react-router-native";

import Text from "./Text";
import { useQuery } from "@apollo/client";
import useAuthStorage from "../hooks/useAuthStorage";
import { useApolloClient } from "@apollo/client";
import { useNavigate } from "react-router-native";

import { GET_AUTHORIZED_USER } from "../graphql/queries";

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
  const { loading, error, data } = useQuery(GET_AUTHORIZED_USER);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  const logOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    navigate("/login");
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View style={styles.flexContainerH}>
          <Pressable style={styles.link}>
            <Link to="/">
              <Text fontSize="subheading" fontWeight="bold" style={styles.text}>
                Repositories
              </Text>
            </Link>
          </Pressable>
          <Pressable style={styles.link}>
            {data.authorizedUser ? (
              <Pressable onPress={() => logOut()}>
                <Text
                  fontSize="subheading"
                  fontWeight="bold"
                  style={styles.text}
                >
                  Sign Out
                </Text>
              </Pressable>
            ) : (
              <Link to="/login">
                <Text
                  fontSize="subheading"
                  fontWeight="bold"
                  style={styles.text}
                >
                  Sign in
                </Text>
              </Link>
            )}
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default AppBar;
