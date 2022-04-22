import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "../filterProducts.css";

import { filterProductsData } from "../../../../redux/actions/productAction";

function FilterByDiscount() {
  const dispatch = useDispatch();

  const handleOnchange = (e) => {
    // console.log("e.target.value", e.target.value);
    dispatch(filterProductsData("", "", e.target.value, "", "", "", "", "", ""));
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
                name="20"
                value="20"
                onChange={handleOnchange}
              />
              <label>10%-20% (3)</label>
            </div>

            <div className="products">
              <input
                type="checkbox"
                name="30"
                value="30"
                onChange={handleOnchange}
              />
              <label>20%-30% (24)</label>
            </div>

            <div className="products">
              <input
                type="checkbox"
                name="40"
                value="40"
                onChange={handleOnchange}
              />
              <label>30%-40% (12)</label>
            </div>

            <div className="products">
              <input
                type="checkbox"
                name="50"
                value="50"
                onChange={handleOnchange}
              />
              <label>up to 40% (2)</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterByDiscount;
