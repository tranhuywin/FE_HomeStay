import React from "react";
import "./Search.scss";
import {
  PinkLocationIcon,
  CaretDownIcon,
  SearchIcon,
} from "../../assets/images/icons";
import SearchPng from "../../assets/images/banner/Search.png";

function SearchBar(props) {
  return (
    <div className="search_bar">
      <div className="search"  style={{height: "50px"}}>
        <div className="select_city_filter_dropdown">
          <div className="select_control">
            <div className="icon_location">
              <PinkLocationIcon />
            </div>
            <div className="selected_value">
              <span>HCM</span>
            </div>
            <div className="dropdown_caret_icon">
              <CaretDownIcon />
            </div>
          </div>
        </div>
        <div className="input_field">
          <input
            type="text"
            placeholder="Tìm kiếm theo địa điểm, quận, tên đường..."
          />
          <div className="search_icon" style={{backgroundColor: '#02AAB0', borderRadius: "50%"}}>
            <img src={SearchPng} style={{width: "30px", paddingTop: "5px", paddingLeft: "4px"}}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
