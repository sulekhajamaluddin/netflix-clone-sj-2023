//Project Files
import InputTextField from "./InputTextField";
import InputTextArea from "./InputTextArea";
import InputFile from "./InputFile";
import InputSelect from "./InputSelect";

export default function FormFieldGenerator({ data, state }) {
  const Fields = data.map((item) => {
    switch (item.type) {
      case "email":
      case "number":
      case "text":
      case "password":
        return <InputTextField key={item.id} item={item} />;
      case "textarea":
        return <InputTextArea key={item.id} item={item} />;
      case "file":
        return <InputFile key={item.id} item={item} />;
      case "select":
        return <InputSelect key={item.id} item={item} />;
      default:
        throw new Error(`The item type "${item.type}" is not valid`);
    }
  });

  return Fields;
}
