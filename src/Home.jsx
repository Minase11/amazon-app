import React, { useState } from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  const [storeItems, setStoreItems] = useState([
    {
      id: 1010,
      title:
        "The lean startup: how Constant Innovation Creates Radically Successful Business Paperback",
      price: 20,
      rating: 2,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg",
    },
    {
      id: 1011,
      title:
        "Kenwood kMix Stand Mixer for Baking, Stylish Kitchen MIxer with k-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",
      price: 84,
      rating: 1,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg",
    },
    {
      id: 1012,
      title: "Samsung LC49RG0SSUXEN 49' Curved LED Gaming Monitor",
      price: 134,
      rating: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg",
    },
    {
      id: 1013,
      title:
        "Amazon Echo (3rd Generation) | Smart speaker with Alexa, Charcoal Fabric",
      price: 209,
      rating: 5,
      image:
        "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$",
    },
    {
      id: 1014,
      title:
        "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",
      price: 460,
      rating: 3,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg",
    },
    {
      id: 1015,
      title:
        "Samsung LC 49RG90 SSUXEN 49' cURVED LED Gaming MOnitor - Super Ultra Wide Dual WQHD 5120 X 1400",
      price: 925,
      rating: 3,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355__.jpg",
    },
  ]);

  // const rows_quantity = [2, 3, 1];
  // let initial = 0;

  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Home Banner"
          className="home__image"
        />
        {/* {rows_quantity.map((row_value, i) => (
          <div key={i} className="home__row">
            {storeItems
              .filter((_, index) => index < initial + row_value)
              .filter((_, index) => index >= initial)
              .map((item, index) => (
                <Product
                  key={index}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  image={item.image}
                />
              ))}
          </div>
        ))} */}
        <div className="home__row">
          {storeItems
            .filter((_, index) => index < 2)
            .filter((_, index) => index >= 0)
            .map((item, index) => (
              <Product
                key={index}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
        </div>
        <div className="home__row">
          {storeItems
            .filter((_, index) => index < 5)
            .filter((_, index) => index >= 2)
            .map((item, index) => (
              <Product
                key={index}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
        </div>
        <div className="home__row">
          {storeItems
            .filter((_, index) => index < 6)
            .filter((_, index) => index >= 5)
            .map((item, index) => (
              <Product
                key={index}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
