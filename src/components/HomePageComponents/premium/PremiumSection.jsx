import React from "react";
import "./premiumSection.css";
import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";

let data = [
  {
    id: 1,
    image:
      "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/26305.webp",
    title: "Own The Looks",
    link: "/products",
    discription: "Best Styles Of The Season",
  },
  {
    id: 2,
    image:
      "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/26429.webp",
    title: "Their Favorite Store | Up To 24M",
    link: "/products",
    discription: "Tees, Tops, Frocks & More",
  },
  {
    id: 3,
    image:
      "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/26370.webp",
    title: "Fashionable Conscious | Up To 24M",
    link: "/products",
    discription: "Stylish Organic Clothing",
  },
  {
    id: 4,
    image:
      "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/26468.webp",
    title: "Comfy Cotton | Up To 24M",
    link: "/products",
    discription: "Tops, Sets, Onesis & More",
  },
  {
    id: 5,
    image:
      "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/26434.webp",
    title: "Gear Up For Eid | Up Tp 12+Y",
    link: "/products",
    discription: "Ethnic Wear",
  },
  {
    id: 6,
    image:
      "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/26470.webp",
    title: "Dress Up Champ | Up To 8Y",
    link: "/products",
    discription: "T-Shirts, Shirts & More",
  },
  {
    id: 7,
    image:
      "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/26462.webp",
    title: "Lilac & Lavenders |2 - 12+Y",
    link: "/products",
    discription: "Sets, Frocks, Tees & More",
  },
  {
    id: 8,
    image:
      "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/26464.webp",
    title: "The Hawaiian Way! | 2 - 12+Y",
    link: "/products",
    discription: "Shirts For Him",
  },
  {
    id: 9,
    image:
      "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/26465.webp",
    title: "Little Miss Sassy | 4 - 12+Y",
    link: "/products",
    discription: "Pretty Tops, Dresses & More",
  },
];

function PremiumSection() {
  return (
    <div className="premiumSection">
      <div className="p__title">PREMIUM BOUTIQUES</div>
      <div className="premiumSection__container">
        {data.map((item) => (
          <div className="premiumSection__cBox" key={item.id}>
            <img src={item.image} alt=".." />
            <Link to={item.link}>
              <div className="p__text">
                <div className="p__head">{item.title}</div>
                <div className="discription">{item.discription}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="view__all">
        <div className="v__1">
          {" "}
          <Link to="/products">View All Boutiques <IoMdArrowDropright className="arrow_logo" /> </Link>{" "}
        </div>
        <div className="v__2">
          <Link to="/products"> View All Premium Brands <IoMdArrowDropright className="arrow_logo" /> </Link>{" "}
        </div>
      </div>
    </div>
  );
}

export default PremiumSection;
