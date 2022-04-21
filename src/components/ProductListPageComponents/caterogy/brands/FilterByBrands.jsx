import React from "react";
import "../filterProducts.css";

function FilterByBrands() {
  return (
    <div>
      <div className="filter__product">
        <div className="product__container">
          <div className="product__list">
            <div className="products">
              <input type="checkbox" />
              <label>AND Girl (1)</label>
            </div>

            <div className="products">
              <input type="checkbox" />
              <label>Babyhug (1)</label>
            </div>

            <div className="products">
              <input type="checkbox" />
              <label>Babyoye</label>
            </div>

            <div className="products">
              <input type="checkbox" />
              <label>Carter's</label>
            </div>
            <div className="products">
              <input type="checkbox" />
              <label>Ed-a-Mamma (1)</label>
            </div>

            <div className="products">
              <input type="checkbox" />
              <label>Hola Bonita</label>
            </div>

            <div className="products">
              <input type="checkbox" />
              <label>OLLINGTON ST.(1)</label>
            </div>

            <div className="products">
              <input type="checkbox" />
              <label>Pine Kids (15)</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterByBrands;
