import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import useRepositories from '../hooks/useRepositories';

import RepositoryItem from "./RepositoryItem";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item, index, separators }) => (
        <RepositoryItem item={item} />
      )}
    />
  );
};

export default RepositoryList;
