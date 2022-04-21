import React from "react";
import "../filterProducts.css";

function FilterByAge() {
  return (
    <div>
      <div className="filter__product">
        <div className="product__container">
          <div className="product__list">
            <div className="products">
              <input type="checkbox" />
              <label>1-2 Years (3)</label>
            </div>

            <div className="products">
              <input type="checkbox" />
              <label>2-3 Years (10)</label>
            </div>

            <div className="products">
              <input type="checkbox" />
              <label>3-4 Years (12)</label>
            </div>

            <div className="products">
              <input type="checkbox" />
              <label>4-5 Years (6)</label>
            </div>
            <div className="products">
              <input type="checkbox" />
              <label>5-6 (4)</label>
            </div>

            <div className="products">
              <input type="checkbox" />
              <label>6-7 Years (3)</label>
            </div>

            <div className="products">
              <input type="checkbox" />
              <label>7-8 Years (6)</label>
            </div>

            <div className="products">
              <input type="checkbox" />
              <label>8-9 Years (5)</label>
            </div>

            <div className="products">
              <input type="checkbox" />
              <label>9-10 Years (8)</label>
            </div>

            <div className="products">
              <input type="checkbox" />
              <label>10-11 Years (2)</label>
            </div>

            <div className="products">
              <input type="checkbox" />
              <label>12+ (3)</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterByAge;
