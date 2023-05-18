import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const onCountIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>Count : {count}</div>
      <button onClick={onCountIncrease}>Increase Count By 1</button>
    </div>
  );
};

export default App;
