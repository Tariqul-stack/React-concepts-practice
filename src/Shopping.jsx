import ShoppingList from "./ShoppingList";

export default function Shopping({ shopping }) {
  return (
    <div className="card">
      <h2>My Shopping List</h2>
      <p>Cart: {shopping.length}</p>

      <ul>
        {shopping.map((item) => (
          <ShoppingList key={item.id} shopping={item}></ShoppingList>
        ))}
      </ul>
    </div>
  );
}
