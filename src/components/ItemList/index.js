import React from "react";
import Item from "../Item";
import "./styles.css";

const ItemList = ({ products }) => {
  return (
    <div className="item-list-container">
      {products.map((product) => {
        console.log(product);
        return (
          <Item
            key={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            pictureUrl={product.pictureUrl}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
