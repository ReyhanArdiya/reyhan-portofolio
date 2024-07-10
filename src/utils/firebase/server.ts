import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

export const serverApp = initializeApp(firebaseConfig);
export const serverStorage = getStorage(serverApp);
export const serverDb = getFirestore(serverApp);
