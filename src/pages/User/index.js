import Styles from "./user.module.scss";
import Person from "../../assets/images/icons/PersonBlack.png";
import Password from "../../assets/images/icons/Password.png";
import Connect from "../../assets/images/icons/Connect.png";
import ChangePassword from "./ChangePassword";
import LinkAccount from "./LinkAccount";
import EditProfile from "./EditProfile";
import BookingRoomUser from "./components/BookingRoom";
import { useState } from "react";
import FranceInput from "../../components/Atom/franceinput/franceinput";
import FranceButton from "../../components/Atom/francebutton/FranceButton";

// page = 0  thông tin tài khoản
// page = 1 Đổi mật khẩu
// page = 3 Liên kết tài khoản\
// page = 4 Đặt chỗ
export default function User() {
  const [page, setPage] = useState(0);
  const [tabActive, setTabActive] = useState(0);

  return (
    <>
      <div className={Styles.TabHeader}>
        <div className={Styles.TabHeaderWrap}>
          <div className={Styles.TabHeaderContent}>
            <div className={Styles.DFlex}>
              <div
                onClick={() => setTabActive(0)}
                className={`${Styles.ProfileTab} ${Styles.CommonTitle}`}
              >
                <p
                  className={`${Styles.Title} ${
                    tabActive === 0 ? Styles.ActiveTab : ""
                  }`}
                >
                  Thông tin người dùng
                </p>
              </div>
              <div
                onClick={() => setTabActive(1)}
                className={`${Styles.BookingRoomTab} ${Styles.CommonTitle}`}
              >
                <p
                  className={`${Styles.Title} ${
                    tabActive === 1 ? Styles.ActiveTab : ""
                  }`}
                >
                  Đặt chỗ của tôi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.Wrapper}>
        {tabActive === 0 && (
          <div className={Styles.UserNavigation}>
            <ul>
              <li
                onClick={() => {
                  setPage(0);
                }}
                style={{ fontWeight: page === 0 ? 700 : "" }}
              >
                <img src={Person} alt="logo"></img>Thông tin tài khoản
              </li>
              <li
                onClick={() => {
                  setPage(1);
                }}
                style={{ fontWeight: page === 1 ? 700 : "" }}
              >
                <img src={Password} alt="logo"></img>Thay đổi mật khẩu
              </li>
              <li
                onClick={() => {
                  setPage(2);
                }}
                style={{ fontWeight: page === 2 ? 700 : "" }}
              >
                <img src={Connect} alt="logo"></img>Liên kết tài khoản
              </li>
            </ul>
          </div>
        )}
        {tabActive === 1 && (
          <div className={Styles.UserNavigation}>
            <ul>
              <div className={Styles.CommonLine}>
                <p className="TitleSearch">Tìm kiếm</p>
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
                  <FranceButton
                    textInput={"Tìm kiếm"}
                    typeHover={2}
                    colorText={"#fff"}
                  />
                </div>
              </li>
            </ul>
          </div>
        )}
        <div className={Styles.Content}>
          {/* {page === 0 ? (
            <EditProfile />
          ) : page === 1 ? (
            <ChangePassword />
          ) : page === 2 ? (
            <LinkAccount />
          ) : null} */}
          <BookingRoomUser />
        </div>
      </div>
    </>
  );
}
