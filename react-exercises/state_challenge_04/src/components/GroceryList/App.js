import React, { useState } from "react";
import "./App.css";

const GroceryList = () => {
  const [groceryList, setGroceryList] = useState([]);
  const [groceryItem, setGroceryItem] = useState("");
  const [cost, setCost] = useState();
  const [errorMessage, setErrorMessage] = useState(null);
  const [isError, setError] = useState(true);

  const handleForm = e => {
    e.preventDefault();

    console.log({ errorMessage });
    if (!isError) {
      console.log({ errorMessage });
      const newArr = [...groceryList];
      newArr.push({ cost, groceryItem });
      setGroceryList(newArr);
      setCost("");
      setGroceryItem("");
    } else {
      alert(errorMessage);
    }
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

  const validateForm = () => {
    console.log({ groceryItem });
    if (groceryItem.length === 0) {
      setErrorMessage("Please add a grocery Item");
      setError(true);
    } else if (typeof cost !== "number") {
      setErrorMessage("Please add the cost of the item");
      setError(true);
    } else {
      setErrorMessage(null);
      setError(false);
    }
  };

  const renderTotalCost = () => {
    const cost = groceryList.reduce((acc, item, index) => {
      return acc + parseFloat(item.cost);
    }, 0);

    return cost;
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
            placeholder="Cost of grocery Item..."
            onChange={e => setCost(parseInt(e.target.value))}
          />
          <div className="button-container">
            <button onClick={validateForm}>Add</button>
            <button
              onClick={e => {
                e.preventDefault();
                clearForm();
              }}
            >
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
        <h2>Total Cost:{groceryList.length > 0 && renderTotalCost()}</h2>
      </div>
    </div>
  );
};

export default GroceryList;
