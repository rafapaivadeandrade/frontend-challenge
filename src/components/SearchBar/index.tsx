import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useBook } from "../../hooks";
import colors from '../../styles/colors';

export default function SearchBar() {
  const {searchBook} : any = useBook();

  return (
    <>
      <View style={styles.searchView}>
        <Feather name="search" size={24} color= {colors.darkGray} />
        <TextInput
          data-testid="search"
          style={styles.input}
          placeholder="Search book"
          placeholderTextColor= {colors.darkGray}
          autoCorrect={false}
          onChangeText={(text) => searchBook({ name: text })}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    color: colors.black,
    height: 48,
    backgroundColor: colors.thirdWhite,
    borderRadius: 10,
    width: 300,
    maxWidth: 400,
    paddingHorizontal: 10,
    fontSize: 16,
    borderBottomWidth: 0,
    fontWeight: 'bold',
  },

  searchView: {
    position: 'absolute',
    alignSelf: "center",
    height: 60,
    width: "95%",
    backgroundColor:  colors.white,
    paddingHorizontal: 20,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 20,
    top: 50,
  },
});
