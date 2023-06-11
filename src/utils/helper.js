import  Axios  from "axios";
import { HTTPS_HEADERS, REQUEST_METHODS } from "./constants";

export const _request = (config) => {
  return Axios({
    method: config.requestType ? config.requestType : REQUEST_METHODS.GET,
    url: config.url ? config.url : "",
    data: config.requestBody ? config.requestBody : null,
    headers: config.headers ? config.headers : HTTPS_HEADERS,
  });
};
