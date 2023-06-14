import { useState } from "react";

const ItemForm = (props) => {
  const { onAddItemToShop } = props;

  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(0);
  const [itemType, setItemType] = useState("");

  const onItemNameChange = (e) => {
    setItemName(e.target.value);
  };

  const onItemPriceChange = (e) => {
    setItemPrice(e.target.value);
  };

  const onItemTypeChange = (e) => {
    setItemType(e.target.value);
  };

  const onSave = () => {
    const itemDetails = {
      name: itemName,
      price: itemPrice,
      type: itemType,
    };
    // Pass the itemDetails to App component
    onAddItemToShop(itemDetails);

    // Reset back the item details to its initial state
    setItemName("");
    setItemPrice(0);
    setItemType("");
  };

  // Save button should only be enabled where the details are non empty
  const isSaveEnabled =
    itemName.length > 0 && itemPrice > 0 && itemType.length > 0;

  return (
    <div>
      <div>Enter Item Details</div>
      <input
        type="text"
        placeholder="Enter Item Name"
        value={itemName}
        onChange={onItemNameChange}
      />
      <input
        type="number"
        placeholder="Enter Item Price"
        value={itemPrice}
        onChange={onItemPriceChange}
      />
      <select value={itemType} onChange={onItemTypeChange}>
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
