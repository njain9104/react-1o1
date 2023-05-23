import { useState } from "react";

const Counter = (props) => {
  const { name } = props;

  const [count, setCount] = useState(0);

  const onAddToBasket = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>
        {name} Count : {count}
      </div>
      <button onClick={onAddToBasket}>Add {name} to Basket</button>
      <br />
    </div>
  );
};

export default Counter;
