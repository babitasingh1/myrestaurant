import React from "react";

export default function Mainpage({ images, onMouseOver, onMouseOut }) {
  return (
    <div className="photoGridmain">
      {images.map((image, index) => (
        <img
          className="image"
          src={image.image}
          alt={image.id}
          onMouseOver={() => {
            onMouseOver(image, index);
          }}
          onMouseOut={() => {
            onMouseOut(image, index);
          }}
          key={index}
          style={{
            filter: image.done ? "brightness(120%)" : "brightness(70%)",
          }}
        />
      ))}
    </div>
  );
}
