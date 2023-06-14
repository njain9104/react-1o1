import { useState } from "react";
import Counter from "./Counter";
import ItemForm from "./ItemForm";

const App = () => {
  const [itemsInBasket, setItemsInBasket] = useState({});
  const [itemsInShop, setItemsInShop] = useState([]);

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

  const onAddItemToShop = (itemDetails) => {
    const updatedItemsInShop = [...itemsInShop];
    updatedItemsInShop.push(itemDetails);
    setItemsInShop(updatedItemsInShop);
  };

  const fruits = itemsInShop.filter((item) => item.type === "fruit");
  const vegetables = itemsInShop.filter((item) => item.type === "vegetable");

  return (
    <div>
      {itemsInShop.length === 0 ? (
        <div>There are no items in the shop...</div>
      ) : (
        <>
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
        </>
      )}
      <ItemForm onAddItemToShop={onAddItemToShop} />
    </div>
  );
};

export default App;
