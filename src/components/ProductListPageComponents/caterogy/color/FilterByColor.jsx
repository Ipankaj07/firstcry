import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "../filterProducts.css";

import { filterProductsData } from "../../../../redux/actions/productAction";

function FilterByColor() {
  const dispatch = useDispatch();

  const handleOnchange = (e) => {
    console.log("e.target.value", e.target.value);
    dispatch(filterProductsData("", "", "", "", "", e.target.value, "", "", ""));
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
                name="Blue"
                value="Blue"
                onChange={handleOnchange}
              />
              <label>Blue (13)</label>
            </div>

            <div className="products">
              <input
                type="checkbox"
                name="Green"
                value="Green"
                onChange={handleOnchange}
              />
              <label>Green (2)</label>
            </div>

            <div className="products">
              <input
                type="checkbox"
                name="Multi Color"
                value="Multicolour"
                onChange={handleOnchange}
              />
              <label>Multi Color (1)</label>
            </div>
            <div className="products">
              <input
                type="checkbox"
                name="Peach"
                value="Peach"
                onChange={handleOnchange}
              />
              <label>Peach (2)</label>
            </div>

            <div className="products">
              <input
                type="checkbox"
                name="Pink"
                value="Pink"
                onChange={handleOnchange}
              />
              <label>Pink (6)</label>
            </div>

            <div className="products">
              <input
                type="checkbox"
                name="Red"
                value="Red"
                onChange={handleOnchange}
              />
              <label>Red (1)</label>
            </div>

            <div className="products">
              <input
                type="checkbox"
                name="White"
                value="White"
                onChange={handleOnchange}
              />
              <label>White (4)</label>
            </div>

            <div className="products">
              <input
                type="checkbox"
                name="Yellow"
                value="Yellow"
                onChange={handleOnchange}
              />
              <label>Yellow (3)</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterByColor;
