import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const CartApp = () => {
  const [loader, setLoader] = useState(false);
  const [title, setTitle] = useState([]);
  const [selectedItem, setSelectedItem] = useState();

  const url = "https://fakestoreapi.com/products?limit=5";

  const dropItemToCart = (item) => {};

  useEffect(() => {
    (async () => {
      setLoader(true);
      const getData = await axios.get(url);
      const data = await getData.data;
      setTitle(data);
      setLoader(false);
    })();
  }, []);

  return (
    //useeffect, usecontext, localstorage
    //  create a cart
    // fetch data from api
    // set a state and render it on to the view
    // create another cart
    // add to cart btn
    // add it to the cart array

    <div className="flex-center">
      <h1>Cart Component</h1>
      <div>
        <h2>Item List</h2>
        {loader ? (
          <p>Please wait while the data loads...</p>
        ) : (
          title.map((item) => {
            return (
              <div key={item.id} className="margin-bottom purple-border">
                <li>{item.title}</li>
                <button>Add to cart</button>
              </div>
            );
          })
        )}
      </div>
      <div>
        <h2>Inside Cart</h2>
        <div>{selectedItem}</div>
      </div>
    </div>
  );
};
