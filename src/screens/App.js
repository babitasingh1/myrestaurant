import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import GoogleBtn from "./GoogleBtn.js";

import Mainpage from "./Mainpage";

import img1 from "../Resources/images/img1.webp";
import img2 from "../Resources/images/img2.webp";
import img3 from "../Resources/images/img3.jpg";
import img4 from "../Resources/images/img4.jpg";
import img5 from "../Resources/images/img5.jpg";

import "../App.css";

export default function Main() {
  const [displayImages, setdisplayImages] = useState([
    {
      id: 1,
      image: img1,
      done: false,
    },
    {
      id: 2,
      image: img2,
      done: false,
    },
    {
      id: 3,
      image: img3,
      done: false,
    },
    {
      id: 4,
      image: img4,
      done: false,
    },
    {
      id: 5,
      image: img5,
      done: false,
    },
  ]);

  const handleMouseOver = useCallback(
    (image, index) => {
      const newitem = displayImages.slice();
      newitem.splice(index, 1, {
        ...image,
        done: true,
      });

      setdisplayImages(newitem);
    },
    [displayImages]
  );

  const handleMouseOut = useCallback(
    (image, index) => {
      const newitem = displayImages.slice();
      newitem.splice(index, 1, {
        ...image,
        done: false,
      });

      setdisplayImages(newitem);
    },
    [displayImages]
  );

  return (
    <div>
      <div className="mainpage">
        <h1>Be vegetarian</h1>
        <GoogleBtn />
        <Link className="button" to="/Menu">
          Menu
        </Link>

        <Mainpage
          images={displayImages}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />

        <div className="infodiv">
          <p>
            Write us at:
            <a href="babita.singh1@gmail.com">babita.singh1@gmail.com</a>{" "}
          </p>
          <p>Address: Meentweg 63,De Meern </p>
          <p>Contact us: 0682471394</p>
        </div>
      </div>
    </div>
  );
}
