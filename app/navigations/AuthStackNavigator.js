import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Start from "../screens/Start";
import LogIn from "../screens/Login";
import SignUp from "../screens/SignUp";

import { Screens } from "../utils/constants";

const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Screens.Start} component={Start} />
      <Stack.Screen name={Screens.LogIn} component={LogIn} />
      <Stack.Screen name={Screens.SignUp} component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
