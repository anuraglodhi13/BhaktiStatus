import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
} from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const handleSearchButtonClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  const handleInputChange = (text) => {
    setSearchText(text);
  };

  return (
    <View style={styles.navbar}>
      <StatusBar backgroundColor="#ff8d1a" barStyle="light-content" />
      {!isSearchOpen && (
        <Text style={{ ...styles.navItem, ...styles.appName }}>
          All God Status
        </Text>
      )}

      {isSearchOpen && (
        <TextInput
          style={styles.searchBar}
          placeholder="Search..."
          placeholderTextColor="white"
          value={searchText}
          onChangeText={handleInputChange}
        ></TextInput>
      )}

      <TouchableOpacity
        style={styles.navItem}
        onPress={handleSearchButtonClick}
      >
        <AntDesign name="search1" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <FontAwesome name="download" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 50,
    backgroundColor: "#ff8000",
  },
  navItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 8,
  },
  appName: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 12,
  },
  searchBar: {
    backgroundColor: "#ff8000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: "white",
  },
  searchText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
