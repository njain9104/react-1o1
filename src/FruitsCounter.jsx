import { useState } from "react";

const FruitsCounter = () => {
  const [appleCount, setAppleCount] = useState(0);
  const [mangoCount, setMangoCount] = useState(0);
  const [orangeCount, setOrangeCount] = useState(0);

  const onAddAppleToBasket = () => {
    setAppleCount(appleCount + 1);
  };

  const onAddMangoToBasket = () => {
    setMangoCount(mangoCount + 1);
  };

  const onAddOrangeToBasket = () => {
    setOrangeCount(orangeCount + 1);
  };

  return (
    <div>
      <div>Apple Count : {appleCount}</div>
      <button onClick={onAddAppleToBasket}>Add Apple to Basket</button>
      <br />
      <div>Mango Count : {mangoCount}</div>
      <button onClick={onAddMangoToBasket}>Add Mango to Basket</button>
      <br />
      <div>Orange Count : {orangeCount}</div>
      <button onClick={onAddOrangeToBasket}>Add Orange to Basket</button>
    </div>
  );
};

export default FruitsCounter;
