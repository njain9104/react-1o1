const Counter = (props) => {
  const { item, itemCount, onUpdateItemsInBasket } = props;

  const onAddToBasket = () => {
    onUpdateItemsInBasket(item, itemCount + 1);
  };

  const onRemoveFromBasket = () => {
    onUpdateItemsInBasket(item, itemCount - 1);
  };

  const getTotalPrice = () => {
    return itemCount * item.price;
  };

  return (
    <div style={{ marginRight: 100 }}>
      <div>
        <div>
          {item.name} {"---"} {item.price}
        </div>
        <div>Count: {itemCount}</div>
        <div>
          Total Price for {item.name}: {getTotalPrice()}
        </div>
      </div>
      <button onClick={onAddToBasket}>Add {item.name} to Basket</button>
      <button onClick={onRemoveFromBasket} disabled={itemCount <= 0}>
        Remove {item.name} from Basket
      </button>
      <br />
    </div>
  );
};

export default Counter;
