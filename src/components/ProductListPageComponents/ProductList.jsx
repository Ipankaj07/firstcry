import React, { useEffect, useState } from "react";
import "./productList.css";
import { BsPinterest, BsFacebook } from "react-icons/bs";
import { FaGooglePlus } from "react-icons/fa";
import { BiRupee } from "react-icons/bi";

import { useSelector, useDispatch } from "react-redux";
import { fetchProductsData } from "../../redux/actions/productAction";
import { Link } from "react-router-dom";

import FilterBySubCategory from "../ProductListPageComponents/caterogy/subCategory/FilterBySubCategory";
import FilterByBrands from "../ProductListPageComponents/caterogy/brands/FilterByBrands";
import FilterByDiscount from "../ProductListPageComponents/caterogy/discount/FilterByDiscount";
import FilterByPrice from "../ProductListPageComponents/caterogy/price/FilterByPrice";
import FilterByAge from "../ProductListPageComponents/caterogy/age/FilterByAge";
import FilterByGender from "../ProductListPageComponents/caterogy/gender/FilterByGender";
import FilterByColor from "../ProductListPageComponents/caterogy/color/FilterByColor";
import FilterByMaterial from "../ProductListPageComponents/caterogy/material/FilterByMaterial";

function ProductList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch]);

  const data = useSelector((state) => state.product.products);
  // console.log("data", data);

/*   const filteredData = useSelector((state) => state.product.filteredProducts);
  console.log("filtered - data", filteredData[0].productData); */

  // const [showFilterOption, setShowFilterOption] = useState(false);

  return (
    <div>
      <div className="banner__div">
        <div className="banner__containt dis-flex">
          <div className="banner__text1">
            Home / Premium Boutiques / Own the Looks
          </div>
          <div className="banner__text2">Boutique open until stocks last</div>
        </div>

        <div className="banner__img">
          <div>
            <img
              src="https://cdn.fcglcdn.com/brainbees/images/boutique/994x295/26305.webp"
              alt="Own the Looks"
            />
          </div>
        </div>
      </div>

      <div className="filter">
        <div className="filter__container">
          <div className="filter__head dis-flex">
            <div className="filter__left dis-flex">
              <div>Own the Looks</div>
              <div>(54 Results)</div>
            </div>
            <div className="filter__right dis-flex">
              <div className="filter__sort dis-flex">
                <div>Sort by:</div>
                <div className="filter__sort__dropdown">
                  <select>
                    <option value="10">New Arrivals</option>
                    <option value="20">Best Seller</option>
                    <option value="30">Discount</option>
                    <option value="40">Price</option>
                    <option value="50">Name</option>
                  </select>
                </div>
              </div>
              <div className="share__icons dis-flex">
                <div>Share:</div>
                <div>
                  <BsPinterest />
                </div>
                <div>
                  <BsFacebook />
                </div>
                <div>
                  <FaGooglePlus />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="filter__tab">
          <div className="filter__option dis-flex">
            <div>Filter by:</div>
            <div>Subcategory</div> 
            <div>Brands</div> 
            <div>Discount</div>
            <div>Price</div>
            <div>Age</div>
            <div>Gender</div>
            <div>Colors</div>
            <div>Material</div>
          </div>
        </div>

        <div className="filter__tab pincode__input dis-flex">
          <div></div>
          <div className="filter__Pin dis-flex">
            <input type="text" placeholder="Enter Pin Code" />
            <span className="check__btn">CHECK</span>
          </div>
        </div>

        {/* filters options */}
        <div className="filters__options">
          <FilterBySubCategory />
        </div>
      </div>

      {/* ---- product main container ----- */}

      <div className="productLists">
        <div className="product__container">
          <div className="product__view">
            {data.map((item) => (
              <div key={item._id}>
                <div className="product__div">
                  <Link to={`/products/${item._id}`}>
                    <div className="product__img">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="product__img"
                      />
                    </div>

                    <div className="product__title">
                      <p>{item.name.split("-")[0]}</p>
                      <p>Multiple Sizes Available</p>
                      <span className="product__rs org__rs">
                        <BiRupee />
                        {(item.price * (100 - item.discount)) / 100}
                      </span>
                      <span className="product__rs">
                        <BiRupee />
                        <span className="dis__rs">{item.price}</span>
                      </span>

                      <div className="product__club-block">
                        <span className="club-star-img"></span>
                        <span className="club__pText">
                          Club Price: <BiRupee />
                          {(item.price * (100 - item.discount)) / 100 -
                            Math.floor(Math.random() * (30 - 1 + 1)) +
                            1}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
