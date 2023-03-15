import * as Location from "expo-location";

const tenMeterWithDegrees = 0.001;

const getLocation = (increment) => {
  return {
    timeStamp: 10000000,
    mocked: true,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: 73.0395885 + increment * tenMeterWithDegrees,
      latitude: 26.2978232 + increment * tenMeterWithDegrees,
    },
  };
};

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });
  counter++;
}, 1000);
