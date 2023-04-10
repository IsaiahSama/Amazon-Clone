import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61mL9ySACvL._SX3000_.jpg"
        />

        <div className="home__row">
          <Product
            id="13880513"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={4}
          />
          <Product
            id="60382330"
            title="MOTOSPEED K2 OSU Hot Swap Game Keyboards USB Wired RGB Mechanical Keypad with 2 Fully Programmable Keys Brown Switches（White）"
            price={15.58}
            rating={4}
            image="https://m.media-amazon.com/images/I/51zPG8arovL._AC_UY218_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="68842273"
            title="Great Eastern Entertainment Sailor Moon- Artemis Plush 7"
            price={12.99}
            image="https://m.media-amazon.com/images/I/71gwJlpWHQL._AC_UL320_.jpg"
            rating={5}
          />
          <Product
            id="52394129"
            title="JBL Tune 130NC TWS True Wireless In-Ear Noise Cancelling Headphones - Black"
            price={49.95}
            image="https://m.media-amazon.com/images/I/51RI5KppdXL._AC_SY355_.jpg"
            rating={4}
          />
          <Product
            id="43641388"
            title="BENGOO G9000 Stereo Gaming Headset"
            price={25.99}
            image="	https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61CGHv6kmWL._AC_UY218_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="77352273"
            title="Dowinx Gaming Chair Fabric with Pocket Spring Cushion, Massage Game Chair Cloth with Headrest, Ergonomic Computer Chair with Footrest 290LBS, Grey"
            price={189.99}
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/612rCYuFeEL._AC_UL400_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
