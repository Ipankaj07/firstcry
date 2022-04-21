import React from "react";
import "../filterProducts.css";

function FilterByDiscount() {
  return (
    <div>
      <div className="filter__product">
        <div className="product__container">
          <div className="product__list">
            <div className="products">
              <input type="checkbox" />
              <label>10%-20% (3)</label>
            </div>

            <div className="products">
              <input type="checkbox" />
              <label>20%-30% (24)</label>
            </div>

            <div className="products">
              <input type="checkbox" />
              <label>30%-40% (12)</label>
            </div>

            <div className="products">
              <input type="checkbox" />
              <label>More than 40% (2)</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterByDiscount;
