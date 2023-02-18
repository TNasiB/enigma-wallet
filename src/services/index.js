import axios from "axios";
import { useCookies } from "vue3-cookies";
import { useNotification } from "@kyvg/vue3-notification";

const { notify } = useNotification();

const errorHandler = () =>
  notify({
    title: "Error",
    text: "Not valid value of equipment",
    type: "error",
  });

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

axios.get("https://catfact.ninja/fact").then((response) => console.log(response));

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
  }).catch(() => errorHandler());
};

export const addEquipment = (equipmentId, address) =>
  makeRequest({
    url: `qr/equipment/lend/${address}`,
    method: "POST",
    data: equipmentId,
    headers: {
      "Content-Type": "text/plain",
    },
  }).catch(() => errorHandler());
