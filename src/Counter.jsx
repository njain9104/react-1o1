import { useState } from "react";

const Counter = (props) => {
  const { item, onAddItemToBasket } = props;

  const [count, setCount] = useState(0);

  const onAddToBasket = () => {
    const updatedCount = count + 1;
    setCount(updatedCount);
    onAddItemToBasket(item, updatedCount);
  };

  const getTotalPrice = () => {
    return count * item.price;
  };

  return (
    <div style={{ marginRight: 100 }}>
      <div>
        <div>
          {item.name} {"---"} {item.price}
        </div>
        <div>Count: {count}</div>
        <div>
          Total Price for {item.name}: {getTotalPrice()}
        </div>
      </div>
      <button onClick={onAddToBasket}>Add {item.name} to Basket</button>
      <br />
    </div>
  );
};

export default Counter;
