import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "../filterProducts.css";

import { filterProductsData } from "../../../../redux/actions/productAction";

function FilterByMaterial() {
  const dispatch = useDispatch();

  const handleOnchange = (e) => {
    console.log("e.target.value", e.target.value);
    dispatch(filterProductsData("", "", "", "", "", "", e.target.value, "", ""));
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
                name="cotton"
                value="Cotton"
                onChange={handleOnchange}
              />
              <label>Cotton (23)</label>
            </div>

            <div className="products">
              <input
                type="checkbox"
                name="Rayon"
                value="Rayon"
                onChange={handleOnchange}
              />
              <label>Rayon (5)</label>
            </div>

            <div className="products">
              <input
                type="checkbox"
                name="Cotton Jersey"
                value="Cotton Jersey"
                onChange={handleOnchange}
              />
              <label>Cotton Jersey (1)</label>
            </div>

            <div className="products">
              <input
                type="checkbox"
                name="Sinker"
                value="Sinker"
                onChange={handleOnchange}
              />
              <label>Sinker(3)</label>
            </div>

            <div className="products">
              <input
                type="checkbox"
                name="Jersey"
                value="Jersey"
                onChange={handleOnchange}
              />
              <label>Jersey (1)</label>
            </div>

            <div className="products">
              <input
                type="checkbox"
                name="Single Jersey"
                value="Single Jersey"
                onChange={handleOnchange}
              />
              <label>Single Jersey (1)</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterByMaterial;
