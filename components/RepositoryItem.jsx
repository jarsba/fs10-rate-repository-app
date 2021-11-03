import React from "react";
import { FlatList, View, StyleSheet, Text, Image, Button } from "react-native";

const styles = StyleSheet.create({
  flexContainerH: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    padding: 3,
  },
  flexContainerV: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "space-around",
  },
  imageContainer: {
    justifyContent: "flex-start",
    marginLeft: 10,
    marginRight: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginTop: 10,
  },
  header: {
    fontWeight: "700",
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
  },
  description: {
    fontWeight: "400",
    fontSize: 12,
    color: "grey",
    marginBottom: 10,
  },
  badgeText: {
    color: "white",
  },
  badge: {
    backgroundColor: "#0366d6",
    alignSelf: "flex-start",
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
  },
  boxRow: {
    justifyContent: "space-around",
  },
  box: {
    alignItems: "center",
    padding: 4,
  },
  boxValue: {
    fontWeight: "700",
    fontSize: 16,
    color: "black",
    marginBottom: 5,
  },
  boxTitle: {
    fontWeight: "400",
    fontSize: 12,
    color: "gray",
  },
});

const RepositoryItem = ({ item }) => {
  const formatNumber = (number) => {
    if (number >= 1000) {
      return `${(number / 1000).toFixed(1)}k`;
    }
    return number;
  };

  return (
    <View>
      <View style={styles.flexContainerH}>
        <View style={[styles.flexContainerV, styles.imageContainer]}>
          <Image
            style={styles.image}
            source={{
              uri: item.ownerAvatarUrl,
            }}
          />
        </View>
        <View style={styles.flexContainerV}>
          <Text style={styles.header}>{item.fullName}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{item.language}</Text>
          </View>
        </View>
      </View>
      <View style={[styles.flexContainerH, styles.boxRow]}>
        <View style={[styles.flexContainerV, styles.box]}>
          <Text style={styles.boxValue}>
            {formatNumber(item.stargazersCount)}
          </Text>
          <Text style={styles.boxTitle}>Stars</Text>
        </View>
        <View style={[styles.flexContainerV, styles.box]}>
          <Text style={styles.boxValue}>{formatNumber(item.forksCount)}</Text>
          <Text style={styles.boxTitle}>Forks</Text>
        </View>
        <View style={[styles.flexContainerV, styles.box]}>
          <Text style={styles.boxValue}>{formatNumber(item.reviewCount)}</Text>
          <Text style={styles.boxTitle}>Reviews</Text>
        </View>
        <View style={[styles.flexContainerV, styles.box]}>
          <Text style={styles.boxValue}>
            {formatNumber(item.ratingAverage)}
          </Text>
          <Text style={styles.boxTitle}>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
