import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Pressable,
  Button,
  TouchableOpacity,
  Linking,
} from "react-native";
import { useNavigate } from "react-router-native";

import Text from "./Text";
import RepositoryInfoBox from "./RepositoryInfoBox";

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    borderColor: "black",
    backgroundColor: "white",
  },
  flexContainerH: {
    display: "flex",
    flexDirection: "row",
    padding: 3,
  },
  flexContainerV: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "space-around",
    flexGrow: 1,
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
  textContainer: {
    flexDirection: "row",
  },
  description: {
    marginBottom: 10,
    flex: 1,
    flexWrap: "wrap",
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
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    margin: 10,
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
});

const RepositoryItem = ({ item, singleItem }) => {
  const navigate = useNavigate();

  const onPress = () => {
    navigate(`/${item.id}`);
  };

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.flexContainerH}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: item.ownerAvatarUrl,
            }}
          />
        </View>
        <View style={styles.flexContainerV}>
          {singleItem ? (
            <Text
              fontSize="subheading"
              fontWeight="bold"
              style={styles.header}
              testID="repositoryName"
            >
              {item.fullName}
            </Text>
          ) : (
            <Pressable onPress={() => onPress()}>
              <Text
                fontSize="subheading"
                fontWeight="bold"
                style={styles.header}
                testID="repositoryName"
              >
                {item.fullName}
              </Text>
            </Pressable>
          )}
          <View style={styles.textContainer}>
            <Text
              color="textSecondary"
              style={styles.description}
              testID="repositoryDescription"
            >
              {item.description}
            </Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeText} testID="repositoryLanguage">
              {item.language}
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.flexContainerH, styles.boxRow]}>
        <RepositoryInfoBox
          title="Stars"
          value={item.stargazersCount}
          testID="repositoryStars"
        />
        <RepositoryInfoBox
          title="Forks"
          value={item.forksCount}
          testID="repositoryForksCount"
        />
        <RepositoryInfoBox
          title="Reviews"
          value={item.reviewCount}
          testID="repositoryReviewCount"
        />
        <RepositoryInfoBox
          title="Rating"
          value={item.ratingAverage}
          testID="repositoryRatingAverage"
        />
      </View>
      {singleItem && (
        <View style={styles.buttonContainer}>
          <Pressable onPress={() => openLink(item.url)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Open in Github</Text>
            </View>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default RepositoryItem;
