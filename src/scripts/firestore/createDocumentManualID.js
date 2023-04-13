//Node Modules
import { collection, doc, setDoc } from "firebase/firestore";
//Project Files
import { database } from "./databaseSetUp";

export async function createDocumentManualID(collectionName, manualID, data) {
  const collectionRef = collection(database, collectionName);
  const document = await setDoc(doc(collectionRef, manualID), data);
  console.log("Document written", document);
}
