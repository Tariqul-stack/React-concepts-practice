export default function Book({ book }) {
  return (
    <div className="card">
      <li>
        Name: {book.name} <br /> Price: {book.price}{" "}
      </li>
    </div>
  );
}
