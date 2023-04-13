//Node modules
import { collection, getDocs } from "firebase/firestore";
//Project files
import { database } from "./databaseSetUp";

export default async function readDocuments(collectionName) {
  const documentReference = collection(database, collectionName);
  const documents = await getDocs(documentReference);

  const result = [];

  documents.forEach((doc) => {
    const dataItem = { id: doc.id, ...doc.data() };
    result.push(dataItem);
  });

  return result;
}
