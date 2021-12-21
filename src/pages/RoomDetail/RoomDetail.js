import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./RoomDetail.scss";
import "../../assets/styles/common.scss";
import { fetchWithTimeout } from "../../services/TinNgoServices";
import {
  ImageRoom,
  TagAddress,
  InformationRoom,
  HostDetail,
  UtilitiesInformation,
  AvailableStatus,
  Description,
} from "./components";
import FranceInput from "../../components/Atom/franceinput/franceinput";
import FranceButton from "../../components/Atom/francebutton/FranceButton";
import Constant from "../../common/Constant";
import { Header } from '../../components';
import {Link} from 'react-router-dom';
import Styles from '../User/user.module.scss';

import { DetailRoomLoading, NoContent } from "../../components";
function RoomDetail(props) {
  const [roomData, setRoomData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(async () => {
    try {
      let response = await fetchWithTimeout(
        `${Constant.url}/motel/detail/${id}`,
        {
          timeout: 6000,
        }
      ).then((response) => response.json());
      if (response) {
        setRoomData(response);
        setLoading(false);
      }
    } catch (error) {
      setRoomData([]);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <DetailRoomLoading />;
  }

  if (roomData.length === 0) {
    return <NoContent />;
  }

  const {
    util_list,
    id_motel_host,
    number_vacancies_available_in_room,
    imgUrl_list,
  } = roomData.data;

  return (
    <>
      <header>      <Header></Header></header>

      <div className="room_detail">
        <div className="container">
          <ImageRoom gallery_img={imgUrl_list} />
          <TagAddress data={roomData.data} />
          <div className="row">
            <div className="left">
              <InformationRoom data={roomData.data} />
              <UtilitiesInformation util_list={util_list} />
              <AvailableStatus
                number_vacancy={number_vacancies_available_in_room}
              />
              <Description descriptionHTML={roomData.data.more_description} />
            </div>
            <div className="right">
              <HostDetail host_data={id_motel_host} />
              <div className={Styles.UserNavigation} style={{ width: "100%", marginLeft: 0, marginTop: "32px" }}>
                <ul>
                  <div className={Styles.CommonLine}>
                    <p className="TitleSearch" style={{ fontSize: "24px", fontWeight: "700" }}>500 k/đêm</p>
                  </div>
                  <li className={Styles.CommonLine}>
                    <div className={Styles.ProfileInfoElement}>
                      <FranceInput
                        textInput="nguyenvanphap@gmail.com"
                        titleInput="Từ ngày"
                        typeInput="date"
                      ></FranceInput>
                    </div>
                  </li>
                  <li className={Styles.CommonLine}>
                    <div className={Styles.ProfileInfoElement}>
                      <FranceInput
                        textInput="nguyenvanphap@gmail.com"
                        titleInput="Đến ngày"
                        typeInput="date"
                      ></FranceInput>
                    </div>
                  </li>
                  <li className={Styles.CommonLine}>
                    <div className={Styles.ProfileInfoElement}>
                      <Link to='/booking-room'>
                        <FranceButton
                          textInput={"Đặt phòng"}
                          typeHover={2}
                          colorText={"#fff"}
                        />
                      </Link>


                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoomDetail;
