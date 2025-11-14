import axios from "axios";

const api = axios.create({
  baseURL: "http://SEU_IP_AQUI:PORTA",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
