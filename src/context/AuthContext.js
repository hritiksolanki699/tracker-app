import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./CreateDataContext";
import trackerApi from "../api/tracker";
// import { navigate } from "../navigationRef";
// import { NavigationActions } from "react-navigation";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    case "signout":
      return { token: null, errorMessage: "" };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async (navigation) => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "signin", payload: token });
    navigation.navigate("TrackList");
  } else {
    navigation.navigate("Signup");
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

const signup =
  (dispatch) =>
  async ({ email, password, navigation }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });

      // navigate({ routeName: "TrackList" });
      navigation.navigate("TrackList");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up",
      });
    }
  };

const signin =
  (dispatch) =>
  async ({ email, password, navigation }) => {
    try {
      const response = await trackerApi.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });

      // navigate({ routeName: "TrackList" });
      navigation.navigate("TrackList");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign in",
      });
    }
  };

const signout =
  (dispatch) =>
  async ({ navigation }) => {
    await AsyncStorage.removeItem("token");
    dispatch({ type: "signout" });
    navigation.navigate("Signin");
  };

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: "" }
);
