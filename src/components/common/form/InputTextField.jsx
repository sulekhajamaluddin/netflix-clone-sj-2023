export default function InputField({ item }) {
  return (
    <label className="input-field">
      {item.label}
      <input
        //Properties
        id={item.id}
        type={item.type}
        required={item.required}
        placeholder={item.placeholder}
        name={item.name}
        aria-label={item.aria_label}
      />
    </label>
  );
}
