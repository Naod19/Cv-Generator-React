export default function InputArea({
  label = "label",
  value,
  onInput,
  onKeyDown,
  ph = "placeholder",
  type = "text",
}) {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input
        type={type}
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
