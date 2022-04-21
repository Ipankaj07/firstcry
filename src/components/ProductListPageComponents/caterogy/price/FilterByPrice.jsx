import React from "react";
import "../filterProducts.css";

function FilterByPrice() {
  return (
    <div>
      <div className="filter__product">
        <div className="product__container">
          <div className="product__list">
            <div className="products">
              <input type="checkbox" />
              <label>0 to 250 (4)</label>
            </div>

            <div className="products">
              <input type="checkbox" />
              <label>250 to 500 (15)</label>
            </div>

            <div className="products">
              <input type="checkbox" />
              <label>500 to 1000 (18)</label>
            </div>

            <div className="products">
              <input type="checkbox" />
              <label>1000 to 2000 (13)</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterByPrice;
