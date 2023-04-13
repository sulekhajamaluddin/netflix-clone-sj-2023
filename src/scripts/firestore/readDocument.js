//Node modules
import { doc, getDoc } from "firebase/firestore";
//Project files
import { database } from "./databaseSetUp";

export async function readDocument(collectionName, docId) {
  const documentReference = doc(database, collectionName, docId);
  const document = await getDoc(documentReference);
  if (document.exists()) {
    const queriedDoc = { status: "success", data: document.data() };
    return queriedDoc;
  } else {
    const queriedDoc = { status: "failure" };
    return queriedDoc;
  }
}
