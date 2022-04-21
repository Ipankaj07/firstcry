import React from "react";
import "../filterProducts.css";

function FilterByColor() {
  return (
    <div>
      <div className="filter__product">
        <div className="product__container">
          <div className="product__list">
            <div className="products">
              <input type="checkbox" />
              <label>Blue (16)</label>
            </div>

            <div className="products">
              <input type="checkbox" />
              <label>Green (5)</label>
            </div>

            <div className="products">
              <input type="checkbox" />
              <label>Grey (2)</label>
            </div>

            <div className="products">
              <input type="checkbox" />
              <label>Multi Color (1)</label>
            </div>
            <div className="products">
              <input type="checkbox" />
              <label>Peach (1)</label>
            </div>

            <div className="products">
              <input type="checkbox" />
              <label>Pink (5)</label>
            </div>

            <div className="products">
              <input type="checkbox" />
              <label>Red (3)</label>
            </div>

            <div className="products">
              <input type="checkbox" />
              <label>White (4)</label>
            </div>

            <div className="products">
              <input type="checkbox" />
              <label>Yellow (6)</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterByColor;
