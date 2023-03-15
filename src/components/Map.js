import { Text, StyleSheet, View } from "react-native";
import React, { useContext } from "react";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  const {
    state: { currentLocation, locations },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return (
      <Text style={{ marginTop: 200, fontSize: 30, textAlign: "center" }}>
        Loading...
      </Text>
    );
  }

  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          ...currentLocation.coords,
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
        }}
        region={{
          ...currentLocation.coords,
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
        }}
      >
        <Circle
          center={currentLocation.coords}
          radius={30}
          strokeColor="rgba(158,158, 255, 1.0)"
          fillColor="rgba(158,158, 255, 0.3)"
        />
        <Polyline coordinates={locations.map((loc) => loc.coords)} />
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});
