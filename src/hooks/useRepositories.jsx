import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    if (data) {
      const repositories = data.repositories.edges.map((n) => n.node);
      setRepositories(repositories);
    }
  }, [data]);

  return { repositories };
};

export default useRepositories;
