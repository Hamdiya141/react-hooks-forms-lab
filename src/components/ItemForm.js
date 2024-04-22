import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onUpdateItems}) {
  const [selectedCategory, setSelectedCategory] = useState("Produce");
  const [itemName, setItemName] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleItemName(event) {
    setItemName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: uuid(),
      name: itemName,
      category: selectedCategory,
    };
    
    onUpdateItems(newItem)
    setSelectedCategory("");
    setItemName("");
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={handleItemName} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
