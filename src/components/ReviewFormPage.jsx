import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import FormikSubmitButton from "./FormikSubmitButton";
import * as yup from "yup";
import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingTop: 10,
  },
});

const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name="repositoryOwner"
        placeholder="Repository owner name"
      />
      <FormikTextInput name="repositoryName" placeholder="Repository name" />
      <FormikTextInput
        name="repositoryRating"
        placeholder="Rating between 0 and 100"
      />
      <FormikTextInput
        name="repositoryReviewText"
        placeholder="Review"
        multiline={true}
        numberOfLines={3}
      />
      <FormikSubmitButton text="Create a review" onSubmit={onSubmit} />
    </View>
  );
};

const validationSchema = yup.object().shape({
  repositoryOwner: yup
    .string()
    .min(4, "Repository owner must be 1-39 characters long")
    .max(100, "Repository owner must be 1-39 characters long")
    .required("Repository owner is required"),
  repositoryName: yup
    .string()
    .min(1, "Repository name must be 1-100 character long")
    .max(100, "Repository name must be 1-100 character long")
    .required("Repository name is required"),
  repositoryRating: yup
    .number()
    .min(0, "Rating must be between 0 and 100")
    .max(100, "Rating must be between 0 and 100")
    .required("Rating is required"),
  repositoryReviewText: yup.string().max(1000),
});

const initialValues = {
  repositoryOwner: "",
  repositoryName: "",
  repositoryRating: "",
  repositoryReviewText: "",
};

const ReviewFormPage = () => {
  const [createReview, result] = useMutation(CREATE_REVIEW);
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const {
      repositoryOwner,
      repositoryName,
      repositoryRating,
      repositoryReviewText,
    } = values;

    const variables = {
      repositoryName: repositoryName,
      ownerName: repositoryOwner,
      rating: parseInt(repositoryRating),
      text: repositoryReviewText,
    };

    const { data, loading, error } = await createReview({
      variables,
    });
    if (error) {
      console.log("Errors: " + error);
    }
    if (data) {
      const repositoryId = data?.createReview?.repositoryId;
      navigate(`/${repositoryId}`);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default ReviewFormPage;
