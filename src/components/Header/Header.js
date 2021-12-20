import React from "react";
import "./Header.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { Search } from "../index";
import Download from "../../assets/download.js";
import Home from "../../assets/home.js";
import Styles from "../headers/headerBrand.module.scss";

function Header(props) {
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
        <div className="header">
        <div className="container">
          <div className="logo_search">
            <div className="logo">
            <Link className={Styles.HeaderBrand} style={{paddingleft: "0 !important"}} to="/home" >
                FranceStay
            </Link>
            </div>
            <Search />
            <div className="popup">
              <div className="upload_room">
                <Link to="/home/blog" style={{fontWeight: 700}}>Blog</Link>
              </div>
              <div className="upload_room">
                <Link to="/booking-room" style={{fontWeight: 700}}>Đặt phòng</Link>
              </div>
              <div className="login">
                <Link to="/login" style={{fontWeight: 700}}>Đăng Nhập</Link>
              </div>
              <div className="register">
                <Link to="/register" style={{fontWeight: 700}}>Đăng kí</Link>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </>
  );
}

export default Header;
