import "./Card.css";
import "./App.css";
import Library from "./Library";
import Singer from "./Singer";
import Shopping from "./Shopping";
function App() {
  // const singer = [
  //   { id: 1, name: "James", age: "60" },
  //   { id: 2, name: "Kaktal", age: "50" },
  //   { id: 3, name: "Artcell", age: "45" },
  // ];

  // const books = [
  //   { id: 1, name: "Physics", price: 300 },
  //   { id: 2, name: "Biology", price: 400 },
  //   { id: 3, name: "Math", price: 500 },
  //   { id: 4, name: "Chemistry", price: 600 },
  // ];
  const shopping = [
    { id: 1, name: "Book", price: 300 },
    { id: 2, name: "Pen", price: 400 },
    { id: 3, name: "Water", price: 500 },
    { id: 4, name: "Glass", price: 600 },
  ];

  return (
    <>
      <Shopping shopping={shopping}></Shopping>

      {/* <Library books={books}></Library> */}

      {/* <h2>React practice</h2>
      {singer.map((singer) => (
        <Singer key={singer.id} singer={singer}></Singer>
      ))} */}
    </>
  );
}

export default App;
