import React from "react";
import "../filterProducts.css";

function FilterByMaterial() {
  return (
    <div>
      <div className="filter__product">
        <div className="product__container">
          <div className="product__list">
            <div className="products">
              <input type="checkbox" />
              <label>Cotton (27)</label>
            </div>

            <div className="products">
              <input type="checkbox" />
              <label>Rayon (3)</label>
            </div>

            <div className="products">
              <input type="checkbox" />
              <label>Denim (1)</label>
            </div>

            <div className="products">
              <input type="checkbox" />
              <label>Polyster(1)</label>
            </div>
            <div className="products">
              <input type="checkbox" />
              <label>Viscose(1)</label>
            </div>

            <div className="products">
              <input type="checkbox" />
              <label>Sinker(1)</label>
            </div>

            <div className="products">
              <input type="checkbox" />
              <label>Cotton Jersey (1)</label>
            </div>

            <div className="products">
              <input type="checkbox" />
              <label>Single Jersey (1)</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterByMaterial;
