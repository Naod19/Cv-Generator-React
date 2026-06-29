export default function Button({ onClick, text }) {
  return (
    <button onClick={onClick} className="action-btns">
      {text}
    </button>
  );
}
