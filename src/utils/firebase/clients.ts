// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { firebaseConfig } from "./config";
const checkIfBrowser = () => {
  return typeof window !== "undefined";
};

export const getApp = () => {
  if (checkIfBrowser() && !getApps().length) {
    return initializeApp(firebaseConfig);
  }

  return null;
};

export const getAnalyticsInstance = () => {
  const app = getApp();

  if (checkIfBrowser() && app) {
    return getAnalytics();
  }

  return null;
};

export const getStorageInstance = () => {
  const app = getApp();

  if (checkIfBrowser() && app) {
    return getStorage(app);
  }

  return null;
};
