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

  const onUpdateItemsInBasket = (item, count) => {
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

  const getItemCount = (itemName) => {
    let itemCount = 0;
    // Check if the item is there in basket or not
    if (itemsInBasket[itemName]) {
      // If present update the itemCount
      itemCount = itemsInBasket[itemName].count;
    }
    return itemCount;
  };

  const onResetBasket = () => {
    // Reset the basket to its initial state
    setItemsInBasket({});
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {fruits.map((fruit) => {
          return (
            <Counter
              key={fruit.name}
              item={fruit}
              itemCount={getItemCount(fruit.name)}
              onUpdateItemsInBasket={onUpdateItemsInBasket}
            />
          );
        })}
        {vegetables.map((vegetable) => {
          return (
            <Counter
              key={vegetable.name}
              item={vegetable}
              itemCount={getItemCount(vegetable.name)}
              onUpdateItemsInBasket={onUpdateItemsInBasket}
            />
          );
        })}
      </div>
      <div style={{ textAlign: "center", marginTop: "150px" }}>
        <div>Total Price of Basket: {getTotalPrice()}</div>
        <br />
        <button onClick={onResetBasket}>Reset Basket</button>
      </div>
    </div>
  );
};

export default App;
