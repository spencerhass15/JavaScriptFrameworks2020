import React, { useState } from "react";
import "./App.css";

const GroceryList = () => {
  const [groceryList, setGroceryList] = useState([]);
  const [groceryItem, setGroceryItem] = useState("");
  const [cost, setCost] = useState("");

  const handleForm = e => {
    e.preventDefault();
    const newArr = [...groceryList];
    newArr.push({ cost, groceryItem });
    setGroceryList(newArr);
    setCost("");
    setGroceryItem("");
  };
  const clearForm = () => {
    setGroceryList([]);
    setGroceryItem("");
    setCost("");
  };
  const removeGroceryItem = itemIndex => {
    const updatedGroceryList = groceryList.filter((_, index) => {
      return index !== itemIndex;
    });
    setGroceryList(updatedGroceryList);
  };
  const renderGroceryList = () => {
    console.log(groceryList);
    return (
      groceryList.length > 0 &&
      groceryList.map((item, index) => {
        return (
          <div key={index}>
            <li className={"item-container"}>
              <div>{item.groceryItem}</div>
              <div>${parseFloat(item.cost).toFixed(2)}</div>
              <div onClick={() => removeGroceryItem(index)}>&times;</div>
            </li>
          </div>
        );
      })
    );
  };

  const renderTotalCost = () => {
    const cost = groceryList.reduce((acc, item, index) => {
      return acc + parseFloat(item.cost);
    }, 0);
    console.log({ cost });
    return cost.toFixed(2);
  };
  return (
    <div id="grocery-list-wrapper">
      <div id="grocery-list">
        <h1>Grocery List</h1>
        <form onSubmit={handleForm}>
          <input
            type="text"
            id="grocery-item-text"
            name="grocery-item"
            placeholder="Add a grocery item..."
            onChange={e => setGroceryItem(e.target.value)}
            value={groceryItem}
          />
          <input
            type="number"
            min="0"
            step=".01"
            id="grocery-item-text"
            name="cost"
            value={cost}
            placeholder="Cost of grocery item..."
            onChange={e => setCost(e.target.value)}
          />
          <div className="button-container">
            <button type="submit">Add</button>
            <button type="button" onClick={clearForm}>
              Clear List
            </button>
          </div>
        </form>
        <div className="list-container">
          <h3>Grocery List</h3>
          <ul>{renderGroceryList()}</ul>
        </div>
      </div>
      <div>
        <h2>Total Cost: ${renderTotalCost()}</h2>
      </div>
    </div>
  );
};

export default GroceryList;
