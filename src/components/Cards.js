import React from "react";
import Carditem from "./Carditem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Choose your own adventure</h1>
      <div className="cards__container">
        <div className="cards_wrapper">
          <ul className="cards__items">
            <Carditem
              src="img-1.jpg"
              text="Explore the hidden waterfall deep inside the Amazon jungle"
              label="Adventure"
              path="/services"
            />
            <Carditem
              src="img-3.jpg"
              text="Unwind and relax under a white canopy tent in Bali"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <Carditem
              src="img-4.jpg"
              text="Travel across the islands of Bali in a cruise ship"
              label="Luxury"
              path="/services"
            />
            <Carditem
              src="img-2.jpg"
              text="Visit the famous Machu Picchu in Peru"
              label="Travel"
              path="/services"
            />
            <Carditem
              src="img-5.jpg"
              text="Visit the historical monuments in Egypt"
              label="Travel"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
