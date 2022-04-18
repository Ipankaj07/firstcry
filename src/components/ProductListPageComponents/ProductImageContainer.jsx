import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchProductsData } from "../../redux/actions/productAction";

import { v4 as uuidv4 } from "uuid";

function ProdImgContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch]);

  const data = useSelector((state) => state.product.products);

  let imageData = data.map((product) => {
    let imageLink = product.image;
    let splitLink = imageLink.split(".webp")[0].split("").slice(0, -1).join("");
    let aplpha = ["a", "b", "c", "d"];
    return aplpha.map((item) => {
      return `${splitLink}${item}.webp`;
    });
  });

  console.log("imageData", imageData);

  return (
    <div>
      <h1>Product Image Container</h1>
      <div>
        {imageData.map((item) => {
          return item.map((image) => {
            return <img key={uuidv4()} src={image} alt="product" />;
          });
        })}
      </div>
    </div>
  );
}

export default ProdImgContainer;
