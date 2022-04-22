import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "../filterProducts.css";

import { filterProductsData } from "../../../../redux/actions/productAction";

function FilterByAge() {
  const dispatch = useDispatch();

  const handleOnchange = (e) => {
    // console.log("e.target.value", e.target.value);
    dispatch(filterProductsData("", "", "", "", e.target.value, "", "", "", ""));
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
                name="1-2"
                value="1-2"
                onChange={handleOnchange}
              />
              <label>1-2 Years (2)</label>
            </div>

            <div className="products">
              <input
                type="checkbox"
                name="2-3"
                value="2-3"
                onChange={handleOnchange}
              />
              <label>2-3 Years (1)</label>
            </div>

            <div className="products">
              <input
                type="checkbox"
                name="3-4"
                value="3-4"
                onChange={handleOnchange}
              />
              <label>3-4 Years (2)</label>
            </div>

            <div className="products">
              <input
                type="checkbox"
                name="4-5"
                value="4-5"
                onChange={handleOnchange}
              />
              <label>4-5 Years (2)</label>
            </div>
            <div className="products">
              <input
                type="checkbox"
                name="5-6"
                value="5-6"
                onChange={handleOnchange}
              />
              <label>5-6 Years (5)</label>
            </div>

            <div className="products">
              <input
                type="checkbox"
                name="6-7"
                value="6-7"
                onChange={handleOnchange}
              />
              <label>6-7 Years (0)</label>
            </div>

            <div className="products">
              <input type="checkbox"
                name="7-8"
                value="7-8"
                onChange={handleOnchange}
              />
              <label>7-8 Years (3)</label>
            </div>

            <div className="products">
              <input type="checkbox" 
                name="8-9"
                value="8-9"
                onChange={handleOnchange}
              />
              <label>8-9 Years (9)</label>
            </div>

            <div className="products">
              <input type="checkbox"
                name="9-10"
                value="9-10"
                onChange={handleOnchange}
              />
              <label>9-10 Years (1)</label>
            </div>

            <div className="products">
              <input type="checkbox" 
                name="10-11"
                value="10-11"
              />
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
