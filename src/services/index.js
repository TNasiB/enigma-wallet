import axios from "axios";
import { useCookies } from "vue3-cookies";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const { cookies } = useCookies();

export const makeRequest = ({
  url = "/",
  method = "get",
  responseType = "json",
  headers = {},
  params = {},
  data = {},
}) => {
  return axios({
    url,
    method,
    responseType,
    headers: { Authorization: cookies.get("access-token"), ...headers },
    params,
    data,
  });
};

export const login = (body) =>
  makeRequest({
    url: "qr/login",
    method: "POST",
    body,
  });

export const getProfile = (addr) =>
  makeRequest({
    url: "qr",
    method: "GET",
    params: { addr },
  });

export const returnEquipment = (equipmentId) => {
  return makeRequest({
    url: `qr/equipment/return`,
    method: "POST",
    data: equipmentId,
    headers: {
      "Content-Type": "text/plain",
    },
  });
};

export const addEquipment = (equipmentId, address) =>
  makeRequest({
    url: `qr/equipment/lend/${address}`,
    method: "POST",
    data: equipmentId,
    headers: {
      "Content-Type": "text/plain",
    },
  });
