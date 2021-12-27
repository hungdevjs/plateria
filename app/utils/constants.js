import { Dimensions } from "react-native";
import Constants from "expo-constants";

const { width, height } = Dimensions.get("window");

export const StatusBarHeight = Constants.statusBarHeight;
export const ScreenWidth = width < height ? width : height;
export const ScreenHeight = width < height ? height : width;
export const AppHeight = height - StatusBarHeight;

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
  Gray: "#999",
  Green: "#10980D",
  Black: "#000",
};

export const IconSize = 32;

export const FontSizes = {
  Small: 12,
  Normal: 14,
  Big: 16,
  Huge: 18,
};

export const Images = {
  cloud: require("../assets/images/Cloud.png"),
  plant: require("../assets/images/Plant.png"),
  title: require("../assets/images/Title.png"),
};
