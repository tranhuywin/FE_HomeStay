import React from "react";
import "./ViewMoreRoom.scss";
import { HeadingDropdown, ListView, FilterFeature } from "./Dropdown";
import { ListRoomPagination } from "../../components";
import {Header} from '../../components';
function ViewMoreRoom(props) {
  const { type } = props;

  function detectQuery(typeRoom) {
    if (type === "confirmed-room") {
      return { isConfirmed: true };
    }
  }

  return (
    <>
    <header>
      <Header></Header>
    </header>
    <div className="view_more_result" style={{backgroundColor: "#f6f5f2", paddingBottom:"65px"}}>
      <div className="container">
        <div className="row">
          <FilterFeature />
          <ListRoomPagination queryOption={detectQuery(type)} />
        </div>
      </div>
    </div>
    </>
  );
}

export default ViewMoreRoom;
