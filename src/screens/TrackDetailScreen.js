import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Context as TrackContext } from "../context/TrackContext";
import MapView, { Polyline } from "react-native-maps";

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam("_id");
  const track = state.find((t) => t._id === _id);
  const initialCoords = track.locations[0].coords;

  return (
    <View>
      <Text style={styles.heading}>{track.name}</Text>
      <MapView
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords,
        }}
        style={styles.map}
      >
        <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
      </MapView>
    </View>
  );
};

export default TrackDetailScreen;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    paddingTop: 10,
    paddingBottom: 10,
  },
  map: {
    height: 300,
  },
});
