export default function InputSelect({ item, seasons, state }) {
  const [form, setForm] = state;
  const options = seasons.map((season) => (
    <option key={season.seasonNumber}>{season.seasonNumber}</option>
  ));

  return (
    <label className="input-select">
      {item.label}
      <select
        value={form[item.key]}
        onChange={(event) =>
          setForm({ ...form, [item.key]: Number(event.target.value) })
        }
        required={item.required}
      >
        <option value="0">No season selected</option>
        {options}
      </select>
    </label>
  );
}
