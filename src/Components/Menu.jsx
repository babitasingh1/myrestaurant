import React, { useState, useCallback } from "react";
import Menupage from "./Menupage";
import "../Main.css";

export default function Main() {
  const [menuImages, setmenuImages] = useState([
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      description: "Veg Salad ",
      price: "€14.00",
      done: false,
    },
    {
      id: 2,
      image:
        "https://i2.wp.com/spicecravings.com/wp-content/uploads/2017/08/Palak-Paneer-5.jpg",
      description: "Palak paneer ",
      price: "€12.00",
      done: false,
    },
    {
      id: 3,
      image:
        "https://thumbs.dreamstime.com/b/liver-detox-diet-food-concept-fruits-vegetables-nuts-olive-oil-garlic-cleansing-body-healthy-eating-top-view-flat-lay-liver-166983115.jpg",
      description: "Paneer tikka ",
      price: "€15.00",
      done: false,
    },
    {
      id: 4,
      image:
        "https://www.thespruceeats.com/thmb/JFfLyNaoY6EPB5xFknkp-4Vbup8=/1414x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Mutter-Paneer-GettyImages-670907161-58d00a633df78c3c4f3b9bb2.jpg",
      description: "Matar paneer ",
      price: "€10.00",
      done: false,
    },
    {id:5,
    image:"https://i.ytimg.com/vi/GjwxuQqT_yg/maxresdefault.jpg",
  description:"Dal fry",
price:"€12.00",
done:false},
{id:6,
  image:"https://i.ytimg.com/vi/GjwxuQqT_yg/maxresdefault.jpg",
description:"Dal fry",
price:"€12.00",
done:false},
{id:5,
  image:"https://i.ytimg.com/vi/GjwxuQqT_yg/maxresdefault.jpg",
description:"Dal fry",
price:"€12.00",
done:false}
  ]);

  const [amount, setAmount] = useState(0);

  function handleClick(addedItem, index, initialAmount) {
    const newaddeditem = menuImages[index];

    const addedamount = newaddeditem.price.slice(1);
    const newAmount = initialAmount + parseInt(addedamount);

    setAmount(newAmount);
  }

  return (
    <div >
      
      <Menupage images={menuImages} amount={amount} onClick={handleClick} />
    </div>
  );
}
