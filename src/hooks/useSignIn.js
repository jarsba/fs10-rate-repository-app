import { useMutation } from "@apollo/client";
import { useApolloClient } from "@apollo/client";

import { SIGN_IN } from "../graphql/mutations";
import useAuthStorage from "../hooks/useAuthStorage";

const useSignIn = () => {
  const [authorize, result] = useMutation(SIGN_IN);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    const { data, loading, error } = await authorize({
      variables: { username, password },
    });
    if (error) {
      console.log("Errors: " + error);
    }
    if (data) {
      await authStorage.setAccessToken(data.authorize.accessToken);
      apolloClient.resetStore();
      return data.authorize.accessToken;
    }
  };

  return [signIn, result];
};

export default useSignIn;
