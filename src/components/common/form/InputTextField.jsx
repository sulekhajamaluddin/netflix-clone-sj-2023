export default function InputField({ item, state }) {
  const [form, setForm] = state;
  return (
    <label className="label">
      {item.label}
      <input
        className="input-field"
        //Properties
        value={form[item.key]}
        onChange={(event) =>
          setForm({ ...form, [item.key]: event.target.value })
        }
        id={item.id}
        type={item.type}
        required={item.required}
        disabled={item.disabled}
        placeholder={item.placeholder}
        name={item.name}
        aria-label={item.aria_label}
      />
    </label>
  );
}
