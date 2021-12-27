import { AccessToken } from "./constants";

export const getAccessToken = async () => {
  const accessToken = await AsyncStorage.getItem(AccessToken);
  return accessToken;
};
