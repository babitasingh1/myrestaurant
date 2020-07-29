import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";

import Mainpage from "./Components/Mainpage";
import Menu from "./Components/Menu";

import "./Main.css";

export default function Main() {
  const [displayImages, setdisplayImages] = useState([
    {
      id: 1,
      image: "images/img1.webp",
      done: false,
    },
    {
      id: 2,
      image: "images/img2.webp",
      done: false,
    },
    {
      id: 3,
      image: "images/img3.jpg",
      done: false,
    },
    {
      id: 4,
      image: "images/img4.webp",
      done: false,
    },
    {
      id: 5,
      image: "images/img5.jpg",
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
      <Route
        exact
        path="/"
        render={() => (
          <div className="mainpage">
            <h1>Be vegetarian</h1>
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
                Write us at:<a href="mailto:babita.singh1@gmail.com">babita</a>{" "}
              </p>
              <p>Address: Meentweg 63,De Meern </p>
              <p>Contact us: 0682471394</p>
            </div>
          </div>
        )}
      />

      <Route
        path="/Menu"
        render={() => (
          <div>
            <Menu />
          </div>
        )}
      />
    </div>
  );
}
