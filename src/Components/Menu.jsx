import React, { useState, useCallback } from "react";

import Menupage from "./Menupage";

import "../Main.css";

export default function Main() {
  const [menuImages] = useState([
    {
      id: 1,
      image: "images/img1.webp",
      description: "Veg Salad ",
      price: "€14.00",
      qty: 1,
    },
    {
      id: 2,
      image: "images/img2.webp",
      description: "Palak paneer ",
      price: "€13.00",
      qty: 1,
    },
    {
      id: 3,
      image: "images/img3.jpg",
      description: "Paneer tikka ",
      price: "€15.00",
      qty: 1,
    },
    {
      id: 4,
      image: "images/img4.webp",
      description: "Matar paneer ",
      price: "€15.00",
      qty: 1,
    },
    {
      id: 5,
      image: "images/img5.jpg",
      description: "Dal fry ",
      price: "€12.00",
      qty: 1,
    },
    {
      id: 6,
      image: "images/img6.jpg",
      description: "Alu gobhi ",
      price: "€12.00",
      qty: 1,
    },
    {
      id: 7,
      image: "images/img7.webp",
      description: "Curry rice ",
      price: "€12.00",
      qty: 1,
    },
    {
      id: 8,
      image: "images/img8.jpg",
      description: "Bhel puri ",
      price: "€8.00",
      qty: 1,
    },
    {
      id: 9,
      image: "images/img9.webp",
      description: "Masala dosa ",
      price: "€9.00",
      qty: 1,
    },
    {
      id: 10,
      image: "images/img10.jpg",
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
