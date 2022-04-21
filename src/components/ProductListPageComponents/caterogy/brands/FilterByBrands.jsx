import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "../filterProducts.css";

import { filterProductsData } from "../../../../redux/actions/productAction";

function FilterByBrands() {
  const dispatch = useDispatch();

  const handleOnchange = (e) => {
    console.log("e.target.value", e.target.value);
    dispatch(filterProductsData("", "", "", e.target.value, "", "", "", "", ""));
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
                name="AND Girl"
                value="AND Girl"
                onChange={handleOnchange}
              />
              <label>AND Girl (1)</label>
            </div>

            <div className="products">
              <input
                type="checkbox"
                name="Babyhug"
                value="Babyhug"
                onChange={handleOnchange}
              />
              <label>Babyhug (10)</label>
            </div>

            <div className="products">
              <input
                type="checkbox"
                name="Babyoye"
                value="Babyoye"
                onChange={handleOnchange}
              />
              <label>Babyoye (3)</label>
            </div>

            <div className="products">
              <input
                type="checkbox"
                name="Carter's"
                value="Carter's"
                onChange={handleOnchange}
              />
              <label>Carter's (1)</label>
            </div>
            <div className="products">
              <input
                type="checkbox"
                name="Ed-a-Mamma"
                value="Ed-a-Mamma"
                onChange={handleOnchange}
              />
              <label>Ed-a-Mamma (1)</label>
            </div>

            <div className="products">
              <input
                type="checkbox"
                name="Hola Bonita"
                value="Hola Bonita"
                onChange={handleOnchange}
              />
              <label>Hola Bonita (2) </label>
            </div>

            <div className="products">
              <input
                type="checkbox"
                name="Ollington"
                value="Ollington"
                onChange={handleOnchange}
              />
              <label>OLLINGTON ST.(1)</label>
            </div>

            <div className="products">
              <input
                type="checkbox"
                name="Pine Kids"
                value="Pine Kids"
                onChange={handleOnchange}
              />
              <label>Pine Kids (15)</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterByBrands;
