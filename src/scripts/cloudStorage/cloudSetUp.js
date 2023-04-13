//Node Modules
import { getStorage } from "firebase/storage";
//Project files
import { firebaseApp } from "../firebase/firebaseSetUp";

export const cloudStorage = getStorage(firebaseApp);
