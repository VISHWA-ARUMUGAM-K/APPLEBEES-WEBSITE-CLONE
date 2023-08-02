// import React from "react";
import "./mainpage.css";
import { applebeesLogo } from "../../assets/Images";

const MainPage = () => {
  return (
    <div>
      <div className="main-body">
        <div className="header">
          <div className="logo">
            <div className="applebees">
              <img
                className="applebees-logo"
                src={applebeesLogo}
                alt="applebee's logo"
                title="applebee's logo"
              />
            </div>
          </div>
          <div className="options">
            <div className="selection">
              <div className="login">SIGN IN / CREATE ACCOUNT</div>

              <div className="store">APPLEBEE&apos;S WYTHEVILLE</div>
            </div>
            <div className="navbar">navbar</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
