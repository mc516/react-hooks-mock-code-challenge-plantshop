import React, { useState } from "react";

function PlantCard( {plantData} ) {

  const [isInStock, setisInStock] = useState(true)
  const {name, image, price} = plantData

  function handleIsInStockToggle() {
    setisInStock(isInStock => !isInStock)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button className="primary" onClick={handleIsInStockToggle}>In Stock</button>
      ) : (
        <button onClick={handleIsInStockToggle}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
