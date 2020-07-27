import React, { useCallback, useState } from "react";

export default function Menupage(props) {
  return (
    <div>
      <h3>place your order here</h3>
      <div className="menudiv">
        <div className="photoGrid">
          {props.images.map((image, index) => (
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
                      props.onClick(image, index, props.amount);
                    }}
                  >
                    Add
                  </button>
                </div>
              </figure>
            </photogrid>
          ))}
          </div>

          <h2 >Your order:{props.amount}</h2>
        
      </div>
    </div>
  );
}
