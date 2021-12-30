import api from "./api";

const StoreUrl = "/store";

export const getStore = () => api.get(StoreUrl);
export const buy = (data) => api.post(StoreUrl, data);
