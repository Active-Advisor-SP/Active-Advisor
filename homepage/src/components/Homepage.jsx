import React from "react";
import "../App.css";
import NavbarComponent from "./NavbarComponent";
import FooterComp from "./FooterComp";
import CarouselComponent from "./CarouselComponent";
import SidebarComponent from "./SidebarComponent";
import Feed from "./Feed";
import RightbarComponent from "./RightbarComponent";
import HomeMap from "./HomeMap";

function Homepage() {
  

  return (
    <>
      <NavbarComponent />
      <br />
      <br />
      <div className="container">
        <div className="row carousel">
          <div className="col-md-8">
            <CarouselComponent />
          </div>
          <div className="col-md-4">
            <RightbarComponent />
          </div>
        </div>

        <br />
        <br />

        <div className="row">
          <div className="col-md-8">
            <Feed />
          </div>
          <div className="col-md-4">
            <SidebarComponent />
          </div>
        </div>

        <br />
        <br />
        <div className="row">
          <div className="col-md-8">
            <div className="mapComponent">
              <HomeMap />
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-4">
        
        </div>
      </div>

      <FooterComp />
    </>
  );
}

export default Homepage;
