import api from "./api";

const AccountUrl = "/account";

export const logIn = (data) => api.post(`${AccountUrl}/logIn`, data);
export const signUp = (data) => api.post(`${AccountUrl}/signUp`, data);
export const getInfo = () => api.get(`${AccountUrl}/me`);
