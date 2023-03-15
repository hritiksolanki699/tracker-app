import { StyleSheet, Text, StatusBar, SafeAreaView } from "react-native";
import { Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import React, { useContext } from "react";
import { FontAwesome } from "@expo/vector-icons";

const AccountScreen = ({ navigation }) => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 48 }}>Account Screen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={() => signout({ navigation })} />
      </Spacer>
    </SafeAreaView>
  );
};

export default AccountScreen;

AccountScreen.navigationOptions = {
  title: "Account",
  tabBarIcon: <FontAwesome name="gear" size={20} />,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
