/* eslint-disable no-undef */
import * as dotenv from "dotenv";

dotenv.config();

export default {
  icon: "./assets/icon.png",
  expo: {
    ios: {
      bundleIdentifier: "com.marcon.baptiste",
    },
    extra: {
      apiUrl: process.env.API_URL,
      eas: { projectId: "33dfaf72-aa8f-47f4-98c9-1318ba575200" },
    },
  },
};
