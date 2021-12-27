import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { navigationRef, isReadyRef } from "./rootNavigator";
import { AppContext } from "../contexts/app.context";

import Splash from "../screens/Splash";

import AuthStackNavigator from "./AuthStackNavigator";
import MainStackNavigator from "./MainStackNavigator";

const AppNavigator = () => {
  const { user, initialized } = useContext(AppContext);

  if (!initialized) {
    return <Splash />;
  }

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
    >
      {!user ? <AuthStackNavigator /> : <MainStackNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
