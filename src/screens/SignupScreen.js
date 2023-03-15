import { StyleSheet, View } from "react-native";
import React, { useContext } from "react";

import { Context as AuthContext } from "../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthForm from "../components/AuthForm";
import NavLInk from "../components/NavLInk";
import { NavigationEvents } from "react-navigation";

const SignUpScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  const token = AsyncStorage.getItem("token");

  

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        headerText="Sign Up for Tracker"
        submitButtonText="Sign Up"
        onSubmit={signup}
        errorMessage={state.errorMessage}
        navigation={navigation}
      />
      <NavLInk
        navLinkText="Already have an Account? Sign in instead."
        navigate={() => navigation.navigate("Signin")}
      />
    </View>
  );
};

SignUpScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 180,
  },
});
