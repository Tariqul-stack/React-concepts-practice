export default function ShoppingList({ shopping }) {
  return (
    <div className="card">
      <li>
        Name: {shopping.name} <br /> Price: {shopping.price}
      </li>
    </div>
  );
}
