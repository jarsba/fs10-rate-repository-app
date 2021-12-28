import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_AUTHORIZED_USER } from "../graphql/queries";
import ReviewItem from "./ReviewItem";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const UserReviewsPage = () => {
  const { loading, error, data, refetch } = useQuery(GET_AUTHORIZED_USER, {
    variables: {
      includeReviews: true,
    },
    fetchPolicy: "cache-and-network",
  });

  const reviews = data?.authorizedUser?.reviews?.edges?.map((n) => n.node);

  return (
    <>
      {reviews && (
        <FlatList
          data={reviews}
          renderItem={({ item }) => (
            <ReviewItem review={item} userReview={true} refetch={refetch} />
          )}
          ItemSeparatorComponent={ItemSeparator}
          keyExtractor={({ id }) => id}
        />
      )}
    </>
  );
};

export default UserReviewsPage;
