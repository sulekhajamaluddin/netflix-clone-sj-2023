import { doc, getDoc } from "firebase/firestore";
import { database } from "./databaseSetUp";

export async function readDocument(collectionName, docId) {
  const documentReference = doc(database, collectionName, docId);
  const document = await getDoc(documentReference);
  if (document.exists()) {
    const queriedDoc = { status: "success", data: document.data() };
    //return document.data();
    return queriedDoc;
  } else {
    //console.log("No such document!");
    const queriedDoc = { status: "failure" };
    return queriedDoc;
  }
}
