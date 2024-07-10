// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsibKRgM9WpD8R2oVutpJQ1qTuI7q8WTA",
  authDomain: "elysian-place.firebaseapp.com",
  projectId: "elysian-place",
  storageBucket: "elysian-place.appspot.com",
  messagingSenderId: "1081677820384",
  appId: "1:1081677820384:web:096e96c8c8b21435c63b85",
  measurementId: "G-153JC968TF"
};

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

  console.log("Meow");

  if (checkIfBrowser() && app) {
    return getAnalytics();
  }

  return null;
};
