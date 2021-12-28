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
  const { repository, fetchMore } = useRepository({
    id,
    first: 5,
  });

  const reviews = repository
    ? repository.reviews.edges.map((n) => n.node)
    : null;

  const onEndReach = () => {
    fetchMore();
  };
  return (
    <>
      {reviews && (
        <FlatList
          data={reviews}
          renderItem={({ item }) => <ReviewItem review={item} />}
          ItemSeparatorComponent={ItemSeparator}
          keyExtractor={({ id }) => id}
          ListHeaderComponent={() => (
            <RepositoryItem item={repository} singleItem={true} />
          )}
          onEndReached={onEndReach}
          onEndReachedThreshold={0.5}
        />
      )}
    </>
  );
};

export default RepositoryPage;
