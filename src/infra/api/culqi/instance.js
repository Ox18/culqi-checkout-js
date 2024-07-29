const axios = require("axios");
const env = require("../../../main/config/env");

const api = axios.create({
  baseURL: "https://api.culqi.com/v2",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + env.private_key,
  },
});

module.exports = api;
