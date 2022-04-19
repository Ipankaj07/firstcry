import React from "react";
import SubMenu from "../../components/Header/subMenu/SubMenu";
import Carousel from "../../components/HomePageComponents/carousel/Carousel";
import PremiumSection from "../../components/HomePageComponents/premium/PremiumSection";

function HomePage() {
  return (
    <div>
      <SubMenu />
      <Carousel />
      <PremiumSection />
    </div>
  );
}

export default HomePage;
