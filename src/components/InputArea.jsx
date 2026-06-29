export default function InputArea({
  label = "label",
  value,
  onInput,
  onKeyDown,
  ph = "placeholder",
}) {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input
        type="text"
        required
        value={value}
        onChange={(e) => onInput(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder={ph}
        className="main-input"
      />
    </div>
  );
}
