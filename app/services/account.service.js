import api from "./api";

const AccountUrl = "/account";

export const logIn = (data) => api.post(`${AccountUrl}/logIn`, data);
export const signUp = (data) => api.post(`${AccountUrl}/signUp`, data);
export const getInfo = () => api.get(`${AccountUrl}/me`);
export const getUserPlant = () => api.get(`${AccountUrl}/me/plant`);
export const drinkWater = () => api.post(`${AccountUrl}/drink`);
