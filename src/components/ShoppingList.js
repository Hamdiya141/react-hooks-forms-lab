import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onUpdateItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchItem(e){
    setSearch(e.target.value)
  }
  
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  }).filter((item) => {
    return  item.name.toLowerCase().includes(search)
  })

  return (
    <div className="ShoppingList">
      <ItemForm onUpdateItems={onUpdateItems}/>
      <Filter onCategoryChange={handleCategoryChange} handleSearchItem={handleSearchItem} search={search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
