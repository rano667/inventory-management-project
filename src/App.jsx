import { useEffect, useState } from "react";

import NewItemForm from "./NewItemForm";
import "./style.css";
import ItemList from "./ItemList";

const App = () => {
  const [items, setItems] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    // localStorage.setItem("ITEMS", JSON.stringify(items));
    getProduct();
  }, []);

  const getProduct = async () => {
    let res = await fetch("http://localhost:4000/get-products");
    let data = await res.json();

    let value = data.map((item) => ({
      id: item._id,
      title: item.name,
      itemCount: item.quantity,
    }));
    setItems(value);
  };

  const postProduct = async (title, itemCount) => {
    try {
      let data = {
        name: title,
        quantity: itemCount,
      };
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the Content-Type header for JSON data
        },
        body: JSON.stringify(data), // Convert the data object to a JSON string
      };

      let res = await fetch(
        "http://localhost:4000/add-product",
        requestOptions
      );

      getProduct();
    } catch (error) {
      console.log(error);
    }
  };

  const addItem = (title, itemCount) => {
    postProduct(title, itemCount);

    // setItems((currentItems) => [
    //   ...currentItems,
    //   { id: crypto.randomUUID(), title, itemCount, completed: false }, // Include the item count
    // ]);
  };

  const deleteItem = async (id) => {
    const requestOptions = {
      method: "DELETE",
    };
    let res = await fetch(
      `http://localhost:4000/delete-product/${id}`,
      requestOptions
    );
    getProduct();
  };

  return (
    <>
      <NewItemForm addItem={addItem} />
      {items.length === 0 && "[No items]  "}
      <ItemList items={items} deleteItem={deleteItem} />
    </>
  );
};

export default App;
