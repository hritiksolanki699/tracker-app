import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Spacer from "./Spacer";
import React from "react";

const NavLInk = ({ navLinkText, navigate }) => {
  return (
    <TouchableOpacity onPress={navigate}>
      <Spacer>
        <Text style={styles.link}>
         {navLinkText}
        </Text>
      </Spacer>
    </TouchableOpacity>
  );
};

export default NavLInk;

const styles = StyleSheet.create({
  link: {
    color: "blue",
  },
});
