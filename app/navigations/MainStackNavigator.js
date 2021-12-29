import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Customize from "../screens/Customize";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Setting from "../screens/Setting";
import Store from "../screens/Store";
import Map from "../screens/Map";

import { Screens } from "../utils/constants";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Screens.Home} component={Home} />
      <Stack.Screen name={Screens.Profile} component={Profile} />
      <Stack.Screen name={Screens.Setting} component={Setting} />
      <Stack.Screen name={Screens.Store} component={Store} />
      <Stack.Screen name={Screens.Customize} component={Customize} />
      <Stack.Screen name={Screens.Map} component={Map} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
