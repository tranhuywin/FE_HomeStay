import React from "react";
import "./Header.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { Search } from "../index";
import Download from "../../assets/download.js";
import Home from "../../assets/home.js";
import Styles from "../headers/headerBrand.module.scss";

function HeaderV2(props) {
  return (
    <>
      <div class="header__line">
        <div className="dflex">
          <div className="left"></div>
          <div className="right" style={{ flexBasis: "60%" }}>
            <div className="dflex1">
            <div style={{ marginLeft: "1rem", flexBasis: "10%", cursor: "pointer" }}>
                <div style={{ display: "flex" }}>
                  <Download />
                  <p className="text-style">Tải App</p>
                </div>
              </div>
              <div style={{ marginRight: "1rem", flexBasis: "25%", cursor: "pointer" }}>
                <div style={{ display: "flex" }}>
                  <Home />
                  <Link to="/post" className="text-style">Đăng phòng dễ dàng</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  );
}

export default HeaderV2;
