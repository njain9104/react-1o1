import Counter from "./Counter";

const fruits = ["Apple", "Mango", "Orage"];
const vegetables = ["Potato", "Onion"];

const App = () => {
  return (
    <div>
      {fruits.map((fruit) => {
        return <Counter name={fruit} />;
      })}
      {vegetables.map((vegetable) => {
        return <Counter name={vegetable} />;
      })}
    </div>
  );
};

export default App;
