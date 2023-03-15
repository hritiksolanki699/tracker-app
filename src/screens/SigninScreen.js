import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";

import AuthForm from "../components/AuthForm";
import NavLInk from "../components/NavLInk";
import { Context } from "../context/AuthContext";
import { NavigationEvents } from "react-navigation";

const SigninScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(Context);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        headerText="Sign In for Tracker"
        submitButtonText="Sign In"
        onSubmit={signin}
        errorMessage={state.errorMessage}
        navigation={navigation}
      />
      <NavLInk
        navLinkText="Don't have an Account? Sign up instead."
        navigate={() => navigation.navigate("Signup")}
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 180,
  },
});
