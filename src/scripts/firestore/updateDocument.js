//Node modules
import { doc, updateDoc } from "firebase/firestore";
//Project files
import { database } from "./databaseSetUp";

export async function updateDocument(collectionName, data) {
  const documentId = data.id;
  const documentReference = doc(database, collectionName, documentId);
  await updateDoc(documentReference, data);
}
