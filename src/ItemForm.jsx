import { useState } from "react";

const DEFAULT_STATE = { name: "", price: 0, type: "" };

const ItemForm = (props) => {
  const { onAddItemToShop } = props;

  const [item, setItem] = useState(DEFAULT_STATE);

  const onItemChange = (e) => {
    const updatedItem = { ...item, [e.target.name]: e.target.value };
    setItem(updatedItem);
  };

  const onSave = () => {
    // Pass the itemDetails to App component
    onAddItemToShop(item);

    // Reset back the item details to its initial state
    setItem(DEFAULT_STATE);
  };

  // Save button should only be enabled where the details are non empty
  const isSaveEnabled =
    item.name.length > 0 && item.price > 0 && item.type.length > 0;

  return (
    <div>
      <div>Enter Item Details</div>
      <input
        type="text"
        name="name"
        placeholder="Enter Item Name"
        value={item.name}
        onChange={onItemChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Enter Item Price"
        value={item.price}
        onChange={onItemChange}
      />
      <select name="type" value={item.type} onChange={onItemChange}>
        <option value="" defaultChecked>
          Please select a option
        </option>
        <option value="fruit">Fruit</option>
        <option value="vegetable">Vegetable</option>
      </select>
      <button onClick={onSave} disabled={!isSaveEnabled}>
        Add Item to Shop
      </button>
    </div>
  );
};

export default ItemForm;
