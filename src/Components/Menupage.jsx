import React from "react";

export default function Menupage({
  images,
  amount,
  orderedItems,
  onClick,
  onIncrease,
  onDecrease,
}) {
  return (
    <div>
      <h3>place your order here</h3>
      <div className="menudiv">
        <div className="photoGrid">
          {images.map((image, index) => (
            <photogrid>
              <figure className="figure">
                <img
                  className="menuimage"
                  src={image.image}
                  alt={image.id}
                  key={index}
                />
                <figcaption>
                  <p>
                    {image.description}
                    {image.price}
                  </p>
                </figcaption>
                <div className="button-container">
                  <button
                    onClick={() => {
                      onClick(image, index, amount);
                    }}
                  >
                    Add
                  </button>
                </div>
              </figure>
            </photogrid>
          ))}
        </div>
        <div className="orderdiv">
          <h2>Your order: €{amount} </h2>
          <ul>
            {orderedItems.map((item, index) => (
              <li>
                {item.description}{" "}
                <button
                  className="sidebutton"
                  onClick={() => {
                    onIncrease(item, index, amount);
                  }}
                >
                  +
                </button>
                <button
                  className="sidebutton"
                  onClick={() => {
                    onDecrease(item, index, amount);
                  }}
                >
                  -
                </button>{" "}
                {item.quantity}
              </li>
            ))}
          </ul>
          <h3 className="bottom">Subtotal: €{amount}</h3>
        </div>
      </div>
    </div>
  );
}
