// import "../_mockLocation";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import { Text } from "react-native-elements";
import { withNavigationFocus } from "react-navigation";
import Map from "../components/Map";
import TrackForm from "../components/TrackForm";
import React, { useContext, useCallback } from "react";
import useLocation from "../hooks/useLocation";
import { FontAwesome } from "@expo/vector-icons";

import { Context as LocationContext } from "../context/LocationContext";

const TrackCreateScreen = ({ isFocused, navigation }) => {
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext);
  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );

  const [err] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView style={styles.container}>
      <Text h2>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location services.</Text> : null}
      <TrackForm navigation={navigation} />
    </SafeAreaView>
  );
};

TrackCreateScreen.navigationOptions = {
  title: "Add Track",
  tabBarIcon: <FontAwesome name="plus" size={20} />,
};

export default withNavigationFocus(TrackCreateScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
