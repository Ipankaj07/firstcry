import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "../filterProducts.css";

import { filterProductsData } from "../../../../redux/actions/productAction";

function FilterByGender() {
  const dispatch = useDispatch();

  const handleOnchange = (e) => {
    console.log("e.target.value", e.target.value);
    dispatch(
      filterProductsData("", "", "", "", "", "", "", "", e.target.value)
    );
  };

  useEffect(() => {
    dispatch(filterProductsData());
  }, [dispatch]);

  return (
    <div>
      <div className="filter__product">
        <div className="product__container">
          <div className="product__list">
            <div className="products">
              <input
                type="checkbox"
                name="Girl"
                value="Girl"
                onChange={handleOnchange}
              />
              <label>Girl (10)</label>
            </div>

            <div className="products">
              <input
                type="checkbox"
                name="Boy"
                value="Boy"
                onChange={handleOnchange}
              />
              <label>Boy(15)</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterByGender;
