import React from "react";
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  Linking,
  Alert,
} from "react-native";
import theme from "../../theme";
import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../graphql/mutations";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: 10,
    backgroundColor: "white",
  },
  rowContainer: {
    display: "flex",
    flexDirection: "row",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    margin: 5,
    flexGrow: 1,
  },
  badgeText: {
    color: "#0366d6",
    fontWeight: "700",
    textAlign: "center",
    fontSize: 16,
  },
  badge: {
    width: 50,
    height: 50,
    display: "flex",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 100,
    borderColor: "#0366d6",
    borderWidth: 2,
    padding: 5,
    marginRight: 5,
  },
  heading: {
    fontSize: 16,
    fontWeight: "700",
  },
  description: {
    color: "black",
    fontSize: 14,
    flex: 1,
    flexWrap: "wrap",
  },
  textContainer: {
    flexDirection: "row",
  },
  dateText: {
    color: theme.colors.textSecondary,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    margin: 10,
    flexGrow: 1,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "white",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#0366d6",
    height: 50,
    justifyContent: "center",
    borderRadius: 5,
  },
  redButton: {
    backgroundColor: "#e04553",
  },
});

const formatDate = (date) => {
  const dateObj = new Date(date);
  const formatted = `${dateObj.getDate()}.${
    dateObj.getMonth() + 1
  }.${dateObj.getFullYear()}`;
  return formatted;
};

const ReviewItem = ({ review, userReview, refetch }) => {
  const [deleteReview, result] = useMutation(DELETE_REVIEW);

  const openLink = (url) => {
    Linking.openURL(url);
  };

  const submitDeleteReview = (id) => {
    deleteReview({
      variables: { id },
    });
    refetch();
  };

  const alertDeleteReview = (id) => {
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "OK", onPress: () => submitDeleteReview(id) },
      ],
      {
        cancelable: true,
      }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{review && review.rating}</Text>
        </View>
        <View style={styles.column}>
          {userReview ? (
            <Text style={styles.heading}>
              {review && review.repository.fullName}
            </Text>
          ) : (
            <Text style={styles.heading}>{review && review.user.username}</Text>
          )}
          <Text style={styles.dateText}>
            {review && formatDate(review.createdAt)}
          </Text>
          <View style={styles.textContainer}>
            <Text style={styles.description}>{review && review.text}</Text>
          </View>
        </View>
      </View>
      {userReview && (
        <View style={styles.rowContainer}>
          <View style={styles.buttonContainer}>
            <Pressable onPress={() => openLink(review.repository.url)}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>View repository</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable onPress={() => alertDeleteReview(review.id)}>
              <View style={[styles.button, styles.redButton]}>
                <Text style={styles.buttonText}>Delete review</Text>
              </View>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
};

export default ReviewItem;
