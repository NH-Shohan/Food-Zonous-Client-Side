import React, { useEffect, useState } from "react";
import Item from "./../Item/Item";
import "./Items.css";
import SingleItem from "./../../SingleItem/SingleItem";

const Items = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/items")
      // fetch("./items.json")
      .then((res) => res.json())
      .then((data) => {
        setItems(data.items);
        // console.log(data.items);
      });
  }, []);
  return (
    <div className="mt-5 pt-5 mb-5">
      <h1 className="text-dark">Our Items</h1>
      <hr className="border border-4 border-dark rounded-pill w-25 m-auto" />
      <div className="container item-container mt-5">
        {items.map((item) => (
          <Item key={item._id} item={item}></Item>
        ))}
      </div>
      <div className="container item-container mt-5">
        {/* {items.map((itemId) => (
          <SingleItem key={itemId._id} itemId={itemId}></SingleItem>
        ))} */}
      </div>
    </div>
  );
};

export default Items;
