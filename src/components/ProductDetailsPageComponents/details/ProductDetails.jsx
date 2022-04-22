import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import "./productDetails.css";
import { BiRupee } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";

import { fetchProductById } from "../../../redux/actions/productAction";
import { addProductTocartData } from "../../../redux/actions/userAction";

import ProdImgContainer from "../ImageContainer/ProductImage";

function ProductDetail() {
  const { id } = useParams();
  let userId = JSON.parse(localStorage.getItem("userId"));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductById(id));

    return () => {
      dispatch(fetchProductById(""));
    };
  }, [dispatch, id]);

  const data = useSelector((state) => state.product.productById);
  // console.log("data by ID", typeof data.product ? "object" : undefined);
  // let dataLength = Object.keys(data).length;

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <div className="productDetail">
        <div className="detail__header">
          <div>
            <Link to="/" className="pd_home">
              Home
            </Link>
            /
            <Link to="/products" className="pd_home">
              Premium Boutiques
            </Link>
            / <span>{data.name}</span>
          </div>
        </div>

        <div className="dis-flex">
          <div className="detail__left">
            <ProdImgContainer />

            <div className="prodD__btn dis-flex">
              <div
                className="btn__add-cart"
                onClick={() => dispatch(addProductTocartData(id, userId))}
              >
                ADD TO CART
              </div>
              <div className="btn__add-short">
                <AiOutlineHeart className="hrtD__logo" /> SHORTLIST
              </div>
            </div>
            <div className="hr-line"></div>
          </div>

          <div className="detail__right">
            <div className="prod__name">{data.name}</div>
            <div className="prod__discription">{data.description}</div>
            <div className="hr-line"></div>
            <div className="prod__price dis-flex">
              <div className="prod__price__discount dis-flex">
                <BiRupee className="r__logo" />
                {(data.price * (100 - data.discount)) / 100}
              </div>
              <div className="prod__price__original dis-flex">
                MRP: <BiRupee className="r__logo" /> <span>{data.price}</span>
              </div>
              <div className="prod__disc">
                <span>({data.discount}% OFF)</span>
              </div>
            </div>
            <div className="pd__text">
              MRP incl. all taxes, Add'l charges may apply on discount price
            </div>

            <div className="club__priceDiv dis-flex">
              <img
                src="https://cdn.fcglcdn.com/brainbees/images/club_flag_listing_desktop.png"
                alt="Club"
              />

              <div className="club_priceO" style={{ width: "175px" }}>
                <div>
                  <span>Club Price:</span>
                  <span>
                    <BiRupee />
                    {(data.price * (100 - data.discount)) / 100 -
                      Math.floor(Math.random() * (30 - 1 + 1)) +
                      1}
                  </span>
                </div>
                <div>
                  Add'l Club Saving : <BiRupee /> {data.discount}
                </div>
              </div>

              <div className="join__club">Join Club</div>
            </div>

            <div className="prod__color">COLOR : {data.color}</div>

            <div className="prod__size">
              SIZE : <span>{data.age} Y</span>
            </div>
            <div className="hr-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

/* 
 <h1>Product Details</h1>
      {dataLength == 0 || typeof data.product == "object" ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>{data.name}</h1>
          <img src={data.image} alt="product" />
          <p>{data.description}</p>
          <p>{data.price}</p>
        </div>
      )}

*/
