import { useState } from "react";
import Counter from "./Counter";

const fruits = [
  { name: "Apple", price: 150 },
  { name: "Mango", price: 100 },
  { name: "Orage", price: 40 },
];
const vegetables = [
  { name: "Potato", price: 30 },
  { name: "Onion", price: 20 },
];

const App = () => {
  const [itemsInBasket, setItemsInBasket] = useState({});

  const onAddItemToBasket = (item, count) => {
    const updatedItemsInBasket = { ...itemsInBasket };
    updatedItemsInBasket[item.name] = {
      item,
      count,
    };
    setItemsInBasket(updatedItemsInBasket);
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    Object.keys(itemsInBasket).forEach((itemName) => {
      const details = itemsInBasket[itemName];
      totalPrice += details.item.price * details.count;
    });
    return totalPrice;
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {fruits.map((fruit) => {
          return (
            <Counter
              key={fruit.name}
              item={fruit}
              onAddItemToBasket={onAddItemToBasket}
            />
          );
        })}
        {vegetables.map((vegetable) => {
          return (
            <Counter
              key={vegetable.name}
              item={vegetable}
              onAddItemToBasket={onAddItemToBasket}
            />
          );
        })}
      </div>
      <div style={{ textAlign: "center", marginTop: "150px" }}>
        Total Price of Basket: {getTotalPrice()}
      </div>
    </div>
  );
};

export default App;
