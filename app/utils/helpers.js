import AsyncStorage from "@react-native-async-storage/async-storage";

import { AccessToken, BaseUrl } from "./constants";

export const getAccessToken = async () => {
  const accessToken = await AsyncStorage.getItem(AccessToken);
  return accessToken;
};

export const getImageUrl = (image) => {
  return `${BaseUrl}/${image}`;
};
