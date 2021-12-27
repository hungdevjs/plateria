import React, { useState, useEffect, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { getAccessToken } from "../utils/helpers";
import { AccessToken } from "../utils/constants";
import { getInfo } from "../services/account.service";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const [user, setUser] = useState(null);

  const getAuth = async () => {
    try {
      const token = await getAccessToken();
      if (!token) throw new Error();
      const res = await getInfo();
      setUser(res.data);
    } catch {
      await AsyncStorage.removeItem(AccessToken);
    }

    setInitialized(true);
  };

  const signOut = async () => {
    await AsyncStorage.removeItem(AccessToken);
    setUser(null);
  };

  useEffect(() => {
    getAuth();
  }, []);

  return (
    <AppContext.Provider
      value={{ initialized, user, isLoading, setIsLoading, setUser, signOut }}
    >
      {children}
    </AppContext.Provider>
  );
};
