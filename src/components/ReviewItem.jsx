import React from "react";
import { Text, View, Badge, StyleSheet } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    backgroundColor: "white",
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
});

const formatDate = (date) => {
  const dateObj = new Date(date);
  const formatted = `${dateObj.getDate()}.${
    dateObj.getMonth() + 1
  }.${dateObj.getFullYear()}`;
  return formatted;
};

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.container}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{review && review.rating}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.heading}>{review && review.user.username}</Text>
        <Text style={styles.dateText}>
          {review && formatDate(review.createdAt)}
        </Text>
        <View style={styles.textContainer}>
          <Text style={styles.description}>{review && review.text}</Text>
        </View>
      </View>
    </View>
  );
};

export default ReviewItem;
