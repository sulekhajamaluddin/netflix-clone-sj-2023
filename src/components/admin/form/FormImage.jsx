//Node Modules
import { useState } from "react";

// Project files
import { updateDocument } from "../../../scripts/firestore/updateDocument";
import { useModal } from "../../../state/ModalProvider";
import { useUser } from "../../../state/UserProvider";
import { getURL } from "../../../scripts/cloudStorage/getURL";

export default function FormImage({ data, imageKey }) {
  // Global state
  const { closeModal } = useModal();
  const { titlesDispatch } = useUser();
  //Local state
  const [imageURL, setImageURL] = useState("");
  const [disabled, setDisabled] = useState(true);

  // Method
  async function onUpload(event) {
    console.log(event.target.files[0]);
    uploadImage(event.target.files[0]);
  }

  async function uploadImage(file) {
    const filePath = `titles/${data.id}_${file.name}`;
    const url = await getURL(file, filePath);
    setImageURL(url);
    setDisabled(false);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const editedTitle = { ...data, [imageKey]: imageURL };
    await updateDocument("titles", editedTitle);
    titlesDispatch({ type: "update", payload: editedTitle });
    closeModal();
  }

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <h2>Upload image</h2>
      <input
        type="file"
        accept="image/png, image/jpeg"
        required
        onChange={(event) => onUpload(event)}
      />
      <input type="submit" value="Upload" disabled={disabled}></input>
    </form>
  );
}
