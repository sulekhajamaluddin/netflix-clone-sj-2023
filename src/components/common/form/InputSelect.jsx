export default function InputSelect({ item, state }) {
  const [form, setForm] = state;

  return (
    <label className="input-select">
      {item.label}
      <select>
        value={form[item.key]}
        onChange=
        {(event) => setForm({ ...form, [item.key]: event.target.value })}
        required={item.required}
        <option>Hello</option>
        <option>Hai</option>
      </select>
    </label>
  );
}
