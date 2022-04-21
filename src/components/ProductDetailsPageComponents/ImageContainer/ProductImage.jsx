import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./productImage.css";

import { fetchProductById } from "../../../redux/actions/productAction";

function ProdImgContainer() {
  const { id } = useParams();
  console.log("id", id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductById(id));

    return () => {
      dispatch(fetchProductById(""));
    };
  }, [dispatch, id]);

  let data = useSelector((state) => state.product.productById);
  // console.log(data.image === undefined);

  if (data === undefined) {
    return <div>Loading...</div>;
  } else if (data.image !== undefined) {
    let imageData = data.image
      .split(".webp")[0]
      .split("")
      .slice(0, -1)
      .join("");
    console.log("imageData", imageData);
    let alpha = ["a", "b", "c", "d"];
    let imageArray = alpha.map((item) => {
      return `${imageData}${item}.webp`;
    });
    console.log("imageArray", imageArray);
    return (
      <div className="prod__img dis-flex">
        <div className="left__pictures">
          <div>
            <img src={imageArray[1]} alt="b" />
          </div>
          <div>
            <img src={imageArray[2]} alt="c" />
          </div>
          <div>
            <img src={imageArray[3]} alt="d" />
          </div>
        </div>

        <div className="right__pictures">
          <img src={imageArray[0]} alt="a" />
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default ProdImgContainer;
