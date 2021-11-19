import React, { useEffect, useState } from "react";
import Item from "./../Item/Item";
import "./Items.css";
import ItemModal from "./../Item/ItemModal";

const Items = (props) => {
  const [items, setItems] = useState([]);
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch("https://food-zonous.herokuapp.com/items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data.items);
      });
  }, []);
  return (
    <div className="mt-5 pt-5 mb-5">
      <h1 className="text-dark">Our Items</h1>
      <hr className="border border-4 border-dark rounded-pill w-25 m-auto" />
      <div className="container item-container mt-5">
        {items.map((item) => (
          <Item key={item._id} item={item} setProduct={setProduct}></Item>
        ))}
      </div>
      <ItemModal product={product} />
    </div>
  );
};

export default Items;
