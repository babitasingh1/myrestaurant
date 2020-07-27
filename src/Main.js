import React, { useState, useCallback } from "react";
import Mainpage from "./Components/Mainpage";
import Menu from "./Components/Menu";
import "./Main.css";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";

export default function Main() {
  const [displayImages, setdisplayImages] = useState([
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      done: false,
    },
    {
      id: 2,
      image:
        "https://i2.wp.com/spicecravings.com/wp-content/uploads/2017/08/Palak-Paneer-5.jpg",
      done: false,
    },
    {
      id: 3,
      image:
        "https://thumbs.dreamstime.com/b/liver-detox-diet-food-concept-fruits-vegetables-nuts-olive-oil-garlic-cleansing-body-healthy-eating-top-view-flat-lay-liver-166983115.jpg",
      done: false,
    },
    {
      id: 4,
      image:
        "https://www.thespruceeats.com/thmb/JFfLyNaoY6EPB5xFknkp-4Vbup8=/1414x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Mutter-Paneer-GettyImages-670907161-58d00a633df78c3c4f3b9bb2.jpg",
      done: false,
    },
    {
      id: 5,
      image: "https://i.ytimg.com/vi/GjwxuQqT_yg/maxresdefault.jpg",
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
              <p>Write us at: babita.singh1@gmail.com </p>
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
