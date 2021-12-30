import api from "./api";

const AccountUrl = "/account";

export const logIn = (data) => api.post(`${AccountUrl}/logIn`, data);
export const signUp = (data) => api.post(`${AccountUrl}/signUp`, data);
export const getInfo = () => api.get(`${AccountUrl}/me`);
export const getUserPlant = () => api.get(`${AccountUrl}/me/plant`);
export const drinkWater = () => api.post(`${AccountUrl}/drink`);
export const getSettings = () => api.get(`${AccountUrl}/me/settings`);
export const updateSettings = (data) =>
  api.post(`${AccountUrl}/me/settings`, data);
export const getUserGold = () => api.get(`${AccountUrl}/me/gold`);
export const getUserStuffs = () => api.get(`${AccountUrl}/me/stuffs`);
export const updateUserStuffs = (data) =>
  api.post(`${AccountUrl}/me/stuffs`, data);
