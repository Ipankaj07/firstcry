import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "../filterProducts.css";

import { filterProductsData } from "../../../../redux/actions/productAction";

function FilterByPrice() {
  const dispatch = useDispatch();

  const handleOnchange = (e) => {
    console.log("e.target.value", e.target.value);
    dispatch(filterProductsData("", e.target.value, "", "", "", "", "", "", ""));
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
                name="0-100"
                value="250"
                onChange={handleOnchange}
              />
              <label>up to 250 (4)</label>
            </div>

            <div className="products">
              <input
                type="checkbox"
                name="250 to 500"
                value="500"
                onChange={handleOnchange}
              />
              <label>up to 500 (15)</label>
            </div>

            <div className="products">
              <input
                type="checkbox"
                name="500 to 1000"
                value="1000"
                onChange={handleOnchange}
              />
              <label>up to 1000 (18)</label>
            </div>

            <div className="products">
              <input
                type="checkbox"
                name="1000 to 1500"
                value="1500"
                onChange={handleOnchange}
              />
              <label>up to 2000 (13)</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterByPrice;
