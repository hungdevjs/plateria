import { Dimensions } from "react-native";
import Constants from "expo-constants";

const { width, height } = Dimensions.get("window");

export const screenWidth = width < height ? width : height;
export const screenHeight = width < height ? height : width;
export const appHeight = height - Constants.statusBarHeight;

export const BaseUrl = "http://localhost:8888/api/v1";

export const AccessToken = "AccessToken";

export const Screens = {
  Start: "Start",
  LogIn: "LogIn",
  SignUp: "SignUp",
  Home: "Home",
  Setting: "Setting",
  Profile: "Profile",
  Store: "Store",
  Customize: "Customize",
};

export const Colors = {
  Overlay: "rgba(0, 0, 0, 0.4)",
  Red: "#ff7979",
  White: "#fff",
  Primary: "#3b5998",
};

export const FontSizes = {
  Small: 12,
  Normal: 14,
  Big: 16,
  Huge: 18,
};
