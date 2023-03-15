import { Text, Button, Input } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Spacer from "./Spacer";

const AuthForm = ({
  headerText,
  errorMessage,
  onSubmit,
  navigation,
  submitButtonText,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry
        label="password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({ email, password, navigation })}
        />
      </Spacer>
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginLeft: 15,
  },
});
