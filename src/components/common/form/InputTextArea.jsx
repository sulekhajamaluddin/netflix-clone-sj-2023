export default function InputTextArea({ item, state }) {
  const [form, setForm] = state;

  return (
    <label className="label">
      {item.label}
      <textarea
        className="input-field"
        value={form[item.key]}
        onChange={(event) =>
          setForm({ ...form, [item.key]: event.target.value })
        }
        required={item.required}
        disabled={item.disabled}
      ></textarea>
    </label>
  );
}
