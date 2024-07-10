import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
import { getStorage } from "firebase/storage";

export const serverApp = initializeApp(firebaseConfig);
export const serverStorage = getStorage(serverApp);
