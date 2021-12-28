import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";
import ReviewItem from "./ReviewItem";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryPage = ({}) => {
  const { id } = useParams();
  const { repository } = useRepository(id);

  const reviews = repository
    ? repository.reviews.edges.map((n) => n.node)
    : null;

  const repositoryContent = (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => (
        <RepositoryItem item={repository} singleItem={true} />
      )}
      // ...
    />
  );

  return <>{repository ? repositoryContent : <></>}</>;
};

export default RepositoryPage;
