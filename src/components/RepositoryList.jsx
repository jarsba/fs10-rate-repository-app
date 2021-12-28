import React, { useState } from "react";
import { View } from "react-native";
import useRepositories from "../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";
import { Button, Menu, Searchbar } from "react-native-paper";
import { useDebounce, useDebouncedCallback } from "use-debounce";

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

const RepositoryListSearchBar = ({ setSearcKeyword }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => {
    setSearchQuery(query);
    setSearcKeyword(query);
  };

  return (
    <View
      style={{
        margin: 10,
      }}
    >
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </View>
  );
};

const RepositoryListHeader = ({
  setOrderBy,
  setOrderDirection,
  setSearcKeyword,
}) => {
  return (
    <>
      <RepositoryListSearchBar setSearcKeyword={setSearcKeyword} />
      <RepositoryListMenu
        setOrderBy={setOrderBy}
        setOrderDirection={setOrderDirection}
      />
    </>
  );
};

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState("CREATED_AT");
  const [orderDirection, setOrderDirection] = useState("DESC");
  const [searchKeyword, setSearcKeyword] = useState("");
  const [debouncedSearchKeyword] = useDebounce(searchKeyword, 300);
  const { repositories, fetchMore } = useRepositories({
    orderBy,
    orderDirection,
    debouncedSearchKeyword,
    first: 5,
  });

  const onEndReach = () => {
    fetchMore()
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      menu={
        <RepositoryListHeader
          setOrderBy={setOrderBy}
          setOrderDirection={setOrderDirection}
          setSearcKeyword={setSearcKeyword}
        />
      }
      onEndReach={onEndReach}
    />
  );
};

export default RepositoryList;
