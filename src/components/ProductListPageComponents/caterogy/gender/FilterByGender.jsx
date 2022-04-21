import React from "react";
import "../filterProducts.css";

function FilterByGender() {
  return (
    <div>
      <div className="filter__product">
        <div className="product__container">
          <div className="product__list">
            <div className="products">
              <input type="checkbox" />
              <label>Girl (10)</label>
            </div>

            <div className="products">
              <input type="checkbox" />
              <label>Boy(15)</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterByGender;
