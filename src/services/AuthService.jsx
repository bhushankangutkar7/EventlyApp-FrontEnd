import axios from "axios";

const API = import.meta.env.VITE_API;
const authSignUp = (data) => {
  return axios.post(`${API}/api/v1/auth/signup`, data);
};
const authLogIn = (data) => {
  return axios.post(`${API}/api/v1/auth/login`, data);
};

export { authSignUp, authLogIn };
