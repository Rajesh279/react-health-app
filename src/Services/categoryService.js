import axios from "axios";

let API_BASE_URL = "https://fortnite-api.theapinetwork.com/";

export const getCategories = () => {
  return axios.get(API_BASE_URL + "store/get");
};
