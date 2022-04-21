import React, { useState, useEffect , useRef} from "react";
import { useSelector, useDispatch } from "react-redux";
import "../filterProducts.css";

import { filterProductsData } from "../../../../redux/actions/productAction";

function FilterBySubCategory() {
  const dispatch = useDispatch();

  // const data = useSelector((state) => state.product.filteredProducts);
  // console.log("data", data);


  const handleOnchange = (e) => {
    console.log("e.target.value", e.target.value);
    dispatch(filterProductsData("", "", "", "", "", "", "", e.target.value));
  };

  useEffect(() => {
    return () => {
      dispatch(filterProductsData());
    };
  }, [dispatch]);

  return (
    <div>
      <div className="filter__product">
        <div className="product__container">
          <div className="product__list">
            <div className="products">
              <input
                type="checkbox"
                name="Frocks and Dresses"
                value="Frocks and Dresses"
                onChange={handleOnchange}
              />
              <label>Frocks and Dresses (13)</label>
            </div>

            <div className="products">
              <input
                type="checkbox"
                name="Onesies & Rompers"
                value="Onesies & Rompers"
                onChange={handleOnchange}
              />
              <label>Onesies & Rompers (7)</label>
            </div>

            <div className="products">
              <input
                type="checkbox"
                name="Party Wear"
                value="Party Wear"
                onChange={handleOnchange}
              />
              <label>Party Wear (1)</label>
            </div>

            <div className="products">
              <input
                type="checkbox"
                name="Sets & Suits"
                value="Sets & Suits"
                onChange={handleOnchange}
              />
              <label>Sets & Suits (13)</label>
            </div>

            <div className="products">
              <input
                type="checkbox"
                name="Swim Wear"
                value="Swim Wear"
                onChange={handleOnchange}
              />
              <label>Swim Wear (1)</label>
            </div>

            <div className="products">
              <input
                type="checkbox"
                name="Tops and T-shirts"
                value="Tops and T-shirts"
                onChange={handleOnchange}
              />
              <label>Tops and T-shirts (18)</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterBySubCategory;
