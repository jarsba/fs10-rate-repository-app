import React from "react";
import { View, StyleSheet, Image } from "react-native";

import Text from "./Text";
import RepositoryInfoBox from "./RepositoryInfoBox";

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    borderColor: "black",
  },
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
    marginTop: 10,
    marginBottom: 5,
  },
  description: {
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
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
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
          <Text fontSize="subheading" fontWeight="bold" style={styles.header}>
            {item.fullName}
          </Text>
          <Text color="textSecondary" style={styles.description}>
            {item.description}
          </Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{item.language}</Text>
          </View>
        </View>
      </View>
      <View style={[styles.flexContainerH, styles.boxRow]}>
        <RepositoryInfoBox title="Stars" value={item.stargazersCount} />
        <RepositoryInfoBox title="Forks" value={item.forksCount} />
        <RepositoryInfoBox title="Reviews" value={item.reviewCount} />
        <RepositoryInfoBox title="Rating" value={item.ratingAverage} />
      </View>
    </View>
  );
};

export default RepositoryItem;
