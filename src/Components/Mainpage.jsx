import React from "react";

export default function Mainpage(props) {
  return (
    <div className="photoGridmain">
      {props.images.map((image, index) => (
        <img
          className="image"
          src={image.image}
          alt={image.id}
          onMouseOver={() => {
            props.onMouseOver(image, index);
          }}
          onMouseOut={() => {
            props.onMouseOut(image, index);
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
