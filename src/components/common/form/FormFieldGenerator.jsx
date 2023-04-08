//Project Files
import InputTextField from "./InputTextField";
import InputTextArea from "./InputTextArea";
import InputFile from "./InputFile";
import InputSelect from "./InputSelect";

export default function FormFieldGenerator({ fields, state, seasons }) {
  const Fields = fields.map((item) => {
    switch (item.type) {
      case "email":
      case "number":
      case "text":
      case "password":
        return <InputTextField key={item.id} item={item} state={state} />;
      case "textarea":
        return <InputTextArea key={item.id} item={item} state={state} />;
      case "file":
        return <InputFile key={item.id} item={item} state={state} />;
      case "select":
        return (
          <InputSelect
            key={item.id}
            item={item}
            state={state}
            seasons={seasons}
          />
        );
      default:
        throw new Error(`The item type "${item.type}" is not valid`);
    }
  });

  return Fields;
}
