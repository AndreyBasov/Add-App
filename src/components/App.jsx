import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Ad from "./Ad";
import startingBanners from "./startingBanners";
import CreateArea from "./CreateArea";
import { Modal, Carousel } from "react-bootstrap";

const App = () => {
  let [banners, setBanners] = useState([...startingBanners]);

  const addBanner = (newBanner) => {
    newBanner.title = newBanner.title.slice(0, 140);
    newBanner.content = newBanner.content.slice(0, 300);
    setBanners((prevBanners) => {
      return [newBanner, ...prevBanners];
    });
  };

  const deleteBanner = (id) => {
    setBanners((prevNotes) => {
      return prevNotes.filter((bannerItem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateArea onAdd={addBanner} />
      <div className="banner-container">
        {banners.map((bannerItem, index) => {
          return (
            <Ad
              key={index}
              id={index}
              title={bannerItem.title}
              content={bannerItem.content}
              phone={bannerItem.phone}
              city={bannerItem.city}
              onDelete={deleteBanner}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default App;
