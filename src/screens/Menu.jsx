import React, { useState, useCallback } from "react";

import Menupage from "./Menupage";

import img1 from "../Resources/images/img1.webp";
import img2 from "../Resources/images/img2.webp";
import img3 from "../Resources/images/img3.jpg";
import img4 from "../Resources/images/img4.jpg";
import img5 from "../Resources/images/img5.jpg";
import img6 from "../Resources/images/img6.jpg";
import img7 from "../Resources/images/img7.webp";
import img8 from "../Resources/images/img8.jpg";
import img9 from "../Resources/images/img9.webp";
import img10 from "../Resources/images/img10.jpg";

import "../App.css";

export default function Menu() {
  const [menuImages] = useState([
    {
      id: 1,
      image: img1,
      description: "Matar paneer ",
      price: "€14.00",
      qty: 1,
    },
    {
      id: 2,
      image: img2,
      description: "Palak paneer ",
      price: "€13.00",
      qty: 1,
    },
    {
      id: 3,
      image: img3,
      description: "Paneer tikka ",
      price: "€15.00",
      qty: 1,
    },
    {
      id: 4,
      image: img4,
      description: "Veg thali ",
      price: "€15.00",
      qty: 1,
    },
    {
      id: 5,
      image: img5,
      description: "Dal fry ",
      price: "€12.00",
      qty: 1,
    },
    {
      id: 6,
      image: img6,
      description: "Alu gobhi ",
      price: "€12.00",
      qty: 1,
    },
    {
      id: 7,
      image: img7,
      description: "Curry rice ",
      price: "€12.00",
      qty: 1,
    },
    {
      id: 8,
      image: img8,
      description: "Bhel puri ",
      price: "€8.00",
      qty: 1,
    },
    {
      id: 9,
      image: img9,
      description: "Masala dosa ",
      price: "€9.00",
      qty: 1,
    },
    {
      id: 10,
      image: img10,
      description: "Indian bread",
      price: "€3.00",
      qty: 1,
    },
  ]);

  const [amount, setAmount] = useState(0);

  const [orderedItems, setOrderedItems] = useState([]);

  // Add item in your order
  const handleClick = useCallback(
    (addedItem, index, initialAmount) => {
      //dont add item again if item is already in ordered items
      if (
        orderedItems.find(
          (orderedItem) =>
            orderedItem.description.toLowerCase() ===
            addedItem.description.toLowerCase()
        )
      )
        return;
      //update amount for new added item
      const newaddeditem = menuImages[index];

      const addedamount = newaddeditem.price.slice(1);
      const newAmount = initialAmount + parseInt(addedamount);

      setAmount(newAmount);

      setOrderedItems([
        ...orderedItems,
        {
          description: addedItem.description,
          price: addedItem.price,
          id: Math.random(),
          quantity: 1,
        },
      ]);
    },
    [orderedItems, menuImages]
  );

  //user wants to increase the quantity for already ordered item
  //update amount and increase quantity by 1
  const handleAdd = useCallback(
    (increasedItem, index, totalAmount) => {
      const newIncreaseditem = orderedItems[index];

      const newAddedAmount = newIncreaseditem.price.slice(1);
      const newAmount = totalAmount + parseInt(newAddedAmount);
      setAmount(newAmount);

      const newQuantity = parseInt(increasedItem.quantity) + 1;

      const newitem = orderedItems.slice();
      newitem.splice(index, 1, {
        ...increasedItem,
        quantity: newQuantity,
      });
      setOrderedItems(newitem);
    },
    [orderedItems]
  );

  //user wants to decrease the quantity for already ordered item
  //update amount and decrease quantity by 1
  const handleMinus = useCallback(
    (decreasedItem, index, totalAmount) => {
      const newDecreaseditem = orderedItems[index];
      //do nothing if quantity for the item is already 0
      if (newDecreaseditem.quantity === 0) return;

      const newDecreasedAmount = newDecreaseditem.price.slice(1);
      const newAmount = totalAmount - parseInt(newDecreasedAmount);
      setAmount(newAmount);

      const newQuantity = parseInt(decreasedItem.quantity) - 1;

      const newitem = orderedItems.slice();
      newitem.splice(index, 1, {
        ...decreasedItem,
        quantity: newQuantity,
      });
      setOrderedItems(newitem);
    },
    [orderedItems]
  );

  return (
    <div>
      <Menupage
        images={menuImages}
        amount={amount}
        orderedItems={orderedItems}
        onClick={handleClick}
        onIncrease={handleAdd}
        onDecrease={handleMinus}
      />
    </div>
  );
}
