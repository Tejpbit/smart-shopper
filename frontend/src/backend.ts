import { CheckedUncheckedEvent } from "./types";

const hostname = window.location.host;
const eventApiUrl = `https://${hostname}/eventApi/telegraf`;
const authString = "";
export const postCheckUncheckEvent = (event: CheckedUncheckedEvent) => {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", authString);
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Access-Control-Allow-Origin", "*");
  myHeaders.append(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  myHeaders.append(
    "Access-Control-Allow-Headers",
    "Origin, Content-Type, X-Auth-Token"
  );

  let raw = JSON.stringify(event);

  let requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch(eventApiUrl, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
