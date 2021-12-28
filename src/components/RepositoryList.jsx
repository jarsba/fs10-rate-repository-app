import React, { useState } from "react";
import { View } from "react-native";
import useRepositories from "../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";
import { Button, Menu, Provider } from "react-native-paper";
import theme from "../../theme";

const RepositoryListMenu = ({ setOrderBy, setOrderDirection }) => {
  const [title, setTitle] = useState("Latest repositories");
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const updateRepositoryList = (orderBy, orderDirection, title) => {
    setOrderBy(orderBy);
    setOrderDirection(orderDirection);
    setTitle(title);
    closeMenu();
  };

  return (
    <View
      style={{
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Button
            color={theme.colors.textPrimary}
            uppercase={false}
            onPress={openMenu}
            icon="menu-down"
            contentStyle={{ flexDirection: "row-reverse" }}
          >
            {title}
          </Button>
        }
      >
        <Menu.Item
          onPress={() =>
            updateRepositoryList("CREATED_AT", "DESC", "Latest repositories")
          }
          title="Latest repositories"
        />
        <Menu.Item
          onPress={() =>
            updateRepositoryList(
              "RATING_AVERAGE",
              "DESC",
              "Highest rated repositories"
            )
          }
          title="Highest rated repositories"
        />
        <Menu.Item
          onPress={() =>
            updateRepositoryList(
              "RATING_AVERAGE",
              "ASC",
              "Lowest rated repositories"
            )
          }
          title="Lowest rated repositories"
        />
      </Menu>
    </View>
  );
};

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState("CREATED_AT");
  const [orderDirection, setOrderDirection] = useState("DESC");
  const { repositories } = useRepositories(orderBy, orderDirection);

  return (
    <RepositoryListContainer
      repositories={repositories}
      menu={
        <RepositoryListMenu
          setOrderBy={setOrderBy}
          setOrderDirection={setOrderDirection}
        />
      }
    />
  );
};

export default RepositoryList;
