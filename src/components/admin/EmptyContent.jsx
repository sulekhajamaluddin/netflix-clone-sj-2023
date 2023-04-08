export default function EmptyContent({ message }) {
  console.log(message);
  return <p className="red-bg">{message}</p>;
}
