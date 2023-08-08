// import React from "react";
import "./mainpage.css";
import { applebeesLogo, careerlogo, chefhatLogo, downArrow, giftcardLogo, locationLogo, menuLogo, shoppingCart, shoppingcartWhiteLogo, userlogo } from "../../assets/Images";

const MainPage = () => {
  return (
    <div className="main-body">
      <div className="header">
        <div className="logo">
          <div className="applebees">
            <img className="applebees-logo" src={applebeesLogo} alt="applebee's logo" title="applebee's logo" />
          </div>
        </div>
        <div className="options">
          <div className="selection">
            <div className="user">
              <img src={userlogo} alt="userlogo" className="userlogo" />
            </div>
            <div className="login">SIGN IN / CREATE ACCOUNT</div>
            <div className="location">
              <img src={locationLogo} alt="" className="location-logo" />
            </div>
            <div className="store">APPLEBEE&apos;S WYTHEVILLE</div>
            <div className="downArrow">
              <img src={downArrow} alt="listdown" className="downarrow-logo" />
            </div>
          </div>
          <div className="navbar">
            <div className="navbar-enter">
              <div className="nav-items">
                <div className="shoppingcart">
                  <div className="shoppingcart-section">
                    <img src={shoppingCart} alt="shopping cart" className="shoppingcart-image"></img>
                  </div>
                  <div className="shoppingcart-detail">ORDER ONLINE</div>
                </div>
                <div className="menu">
                  <div className="menu-section">
                    <img src={menuLogo} alt="menu" className="menu-image"></img>
                  </div>
                  <div className="menu-detail">MENU</div>
                </div>
                <div className="locations">
                  <div className="locations-section">
                    <img src={locationLogo} alt="locations" className="locations-image"></img>
                  </div>
                  <div className="locations-detail">LOCATIONS</div>
                </div>
                <div className="catering">
                  <div className="catering-section">
                    <img src={chefhatLogo} alt="catering" className="catering-image"></img>
                  </div>
                  <div className="catering-detail">CATERING</div>
                </div>
                <div className="giftcard">
                  <div className="giftcard-section">
                    <img src={giftcardLogo} alt="giftcard logo" className="giftcard-image"></img>
                  </div>
                  <div className="giftcard-detail">GIFT CARDS</div>
                </div>
                <div className="career">
                  <div className="career-section">
                    <img src={careerlogo} alt="career" className="career-image"></img>
                  </div>
                  <div className="career-detail">CAREERS</div>
                </div>
                <div className="shoppingcartwhite">
                  <img src={shoppingcartWhiteLogo} alt="shoppingcart" className="shoppingcartwhitelogo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
