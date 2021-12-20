import React from "react";
import TextField from "@mui/material/TextField";
import HeadingIcon from "../../pages/RoomDetail/components/Atom/HeadingIcon";
import HomeIcon from "../../assets/images/icons/common/HomeIcon";
import "./BookingRoom.scss";
import { Checkbox } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Location from "../../assets/Location";
import Calendar from "../../assets/Calendar";
import Person from "../../assets/Person";
import QrCodeIcon from "@mui/icons-material/QrCode";
import Radio from "@mui/material/Radio";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AddCardIcon from "@mui/icons-material/AddCard";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FranceButton from "../../components/Atom/francebutton/FranceButton";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";

function BookingRoom() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="container">
      <div className="content">
        <div className="disflex">
          <div className="left_content">
            <div className="block">
              <div className="title">
                <HeadingIcon
                  styleClass={{ padding: "1.6rem 0" }}
                  nameTitle={"Thông tin phòng"}
                  iconComponent={
                    <HomeIcon sizeIcon={{ height: "32px", width: "32px" }} />
                  }
                />
                <div className="commonPadding">
                  <TextField
                    style={{ width: "90%", marginBottom: "2.4rem" }}
                    id="standard-basic"
                    label="Họ và tên"
                    variant="standard"
                  />
                  <div className="disflex">
                    <TextField
                      style={{ width: "42%", marginBottom: "2.4 rem" }}
                      id="standard-basic"
                      label="Số điện thoại"
                      variant="standard"
                    />
                    <TextField
                      style={{
                        width: "45%",
                        marginLeft: "3%",
                        marginBottom: "2.4 rem",
                      }}
                      id="standard-basic"
                      label="Email"
                      variant="standard"
                    />
                  </div>
                  <div className="checkbox">
                    <div className="dflex-center">
                      <Checkbox
                        {...label}
                        defaultChecked
                        style={{
                          transform: "scale(1.3)",
                          color: "#02AAB0",
                        }}
                        labelStyle={{ color: "#02AAB0" }}
                        iconStyle={{ fill: "#02AAB0" }}
                      />
                      <span>Tôi đặt phòng giúp người khác</span>
                    </div>
                  </div>
                  <p className="title_booking">Thông tin khách nhận phòng</p>
                  <TextField
                    style={{ width: "90%", marginTop: "0.5rem" }}
                    id="standard-basic"
                    label="Họ và tên"
                    variant="standard"
                  />
                </div>
              </div>
            </div>
            <div className="block">
              <div className="title">
                <HeadingIcon
                  styleClass={{ padding: "1.6rem 0" }}
                  nameTitle={"Yêu cầu đặc biệt"}
                  iconComponent={
                    <HomeIcon sizeIcon={{ height: "32px", width: "32px" }} />
                  }
                />
                <div className="commonPadding">
                  <div className="checkbox">
                    <div className="dflex-center">
                      <Checkbox
                        {...label}
                        defaultChecked
                        style={{
                          transform: "scale(1.3)",
                          color: "#02AAB0",
                        }}
                        labelStyle={{ color: "#02AAB0" }}
                        iconStyle={{ fill: "#02AAB0" }}
                      />
                      <span>Phòng không hút thuốc</span>
                    </div>
                  </div>
                  <div className="checkbox">
                    <div className="dflex-center">
                      <Checkbox
                        {...label}
                        defaultChecked
                        style={{
                          transform: "scale(1.3)",
                          color: "#02AAB0",
                        }}
                        labelStyle={{ color: "#02AAB0" }}
                        iconStyle={{ fill: "#02AAB0" }}
                      />
                      <span>Phòng ở tầng cao</span>
                    </div>
                  </div>
                  <div className="checkbox">
                    <div className="dflex-center">
                      <Checkbox
                        {...label}
                        defaultChecked
                        style={{
                          transform: "scale(1.3)",
                          color: "#02AAB0",
                        }}
                        labelStyle={{ color: "#02AAB0" }}
                        iconStyle={{ fill: "#02AAB0" }}
                      />
                      <span>Phòng có view hướng biển</span>
                    </div>
                  </div>
                  <div className="checkbox">
                    <div className="dflex-center">
                      <Checkbox
                        {...label}
                        defaultChecked
                        style={{
                          transform: "scale(1.3)",
                          color: "#02AAB0",
                        }}
                        labelStyle={{ color: "#02AAB0" }}
                        iconStyle={{ fill: "#02AAB0" }}
                      />
                      <span>Yêu cầu khác</span>
                    </div>
                  </div>
                  <TextField
                    style={{ width: "100%", marginTop: "1.6rem" }}
                    placeholder="Nhập yêu cầu khác"
                    multiline
                    rows={2}
                    maxRows={4}
                  />
                </div>
              </div>
            </div>
            <div className="block">
              <div
                className="dflex-center"
                style={{ justifyContent: "space-between" }}
              >
                <HeadingIcon
                  styleClass={{
                    padding: "1.6rem 0",
                    paddingRight: "0.8rem",
                    paddingLeft: "0.8rem",
                  }}
                  nameTitle={"Mã giảm giá"}
                  iconComponent={
                    <HomeIcon sizeIcon={{ height: "32px", width: "32px" }} />
                  }
                />
                <div className="" style={{ marginRight: "3.2rem" }}>
                  <AddCircleIcon
                    style={{
                      transform: "scale(1.5)",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="block" style={{ paddingBottom: "7.6rem" }}>
              <div className="title">
                <HeadingIcon
                  styleClass={{ padding: "1.6rem 0" }}
                  nameTitle={"Thông tin phòng"}
                  iconComponent={
                    <HomeIcon sizeIcon={{ height: "32px", width: "32px" }} />
                  }
                />
                <div className="commonPadding">
                  <p
                    style={{ color: "#14C1C7", marginLeft: "1.6rem" }}
                    className="title_line"
                  >
                    Sau khi hoàn tất thanh toán, mã xác nhận phòng sẽ được gửi
                    ngay qua SMS và Email của bạn
                  </p>
                  <div className="line1"></div>
                  <div className="multiple_combo">
                    <div className="dflex-center jus-event">
                      <div className="left_combo">
                        <div className="dflex-center">
                          <QrCodeIcon style={{ transform: "scale(1.5)" }} />
                          <span
                            className="name_title"
                            style={{ marginLeft: "0.7rem" }}
                          >
                            Thanh toán QR-PAY
                          </span>
                        </div>
                      </div>
                      <div
                        className="right_combo"
                        style={{ marginRight: "2.5rem" }}
                      >
                        <Radio
                          style={{
                            transform: "scale(1.3)",
                            color: "#02AAB0",
                          }}
                          value="a"
                          name="radio-buttons"
                          inputProps={{ "aria-label": "A" }}
                        />
                      </div>
                    </div>
                    <div
                      className="line1"
                      style={{ marginLeft: "0", width: "95%" }}
                    ></div>
                  </div>
                  <div className="multiple_combo">
                    <div className="dflex-center jus-event">
                      <div className="left_combo">
                        <div className="dflex-center">
                          <AddShoppingCartIcon
                            style={{ transform: "scale(1.5)" }}
                          />
                          <span
                            className="name_title"
                            style={{ marginLeft: "0.7rem" }}
                          >
                            Chuyển khoảng ngân hàng
                          </span>
                        </div>
                      </div>
                      <div
                        className="right_combo"
                        style={{ marginRight: "2.5rem" }}
                      >
                        <Radio
                          style={{
                            transform: "scale(1.3)",
                            color: "#02AAB0",
                          }}
                          value="a"
                          name="radio-buttons"
                          inputProps={{ "aria-label": "A" }}
                        />
                      </div>
                    </div>
                    <div
                      className="line1"
                      style={{ marginLeft: "0", width: "95%" }}
                    ></div>
                  </div>
                  <div className="multiple_combo">
                    <div className="dflex-center jus-event">
                      <div className="left_combo">
                        <div className="dflex-center">
                          <AddCardIcon style={{ transform: "scale(1.5)" }} />
                          <span
                            className="name_title"
                            style={{ marginLeft: "0.7rem" }}
                          >
                            Thẻ Visa, Master Card
                          </span>
                        </div>
                      </div>
                      <div
                        className="right_combo"
                        style={{ marginRight: "2.5rem" }}
                      >
                        <Radio
                          style={{
                            transform: "scale(1.3)",
                            color: "#02AAB0",
                          }}
                          value="a"
                          name="radio-buttons"
                          inputProps={{ "aria-label": "A" }}
                        />
                      </div>
                    </div>
                    <div
                      className="line1"
                      style={{ marginLeft: "0", width: "95%" }}
                    ></div>
                  </div>
                  <div className="multiple_combo">
                    <div className="dflex-center jus-event">
                      <div className="left_combo">
                        <div className="dflex-center">
                          <CreditCardIcon
                            style={{
                              cursor: "pointer",
                              transform: "scale(1.5)",
                            }}
                          />
                          <span
                            className="name_title"
                            style={{ marginLeft: "0.7rem" }}
                          >
                            Thẻ ATM/ Tài khoản ngân hàng
                          </span>
                        </div>
                      </div>
                      <div
                        className="right_combo"
                        style={{ marginRight: "2.5rem" }}
                      >
                        <Radio
                          style={{
                            transform: "scale(1.3)",
                            color: "#02AAB0",
                          }}
                          value="a"
                          name="radio-buttons"
                          inputProps={{ "aria-label": "A" }}
                        />
                      </div>
                    </div>
                    <div
                      className="line1"
                      style={{ marginLeft: "0", width: "95%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="submit_bound">
                <div className="submit">
                  <FranceButton
                    widthCom={"40%"}
                    textInput={"Đăng nhập"}
                    typeHover={2}
                    colorText={"#fff"}
                  />
                </div>
                <p className="submit_title">
                  Bằng cách nhấn nút{" "}
                  <span style={{ color: "#02AAB0" }}>Thanh toán</span>, bạn đồng
                  ý với{" "}
                  <span style={{ color: "#02AAB0" }}>
                    Điều kiện và điều khoản
                  </span>{" "}
                  của chúng tôi
                </p>
              </div>
            </div>
          </div>
          <div className="right_content">
            <div className="title">
              <HeadingIcon
                styleClass={{ padding: "1.6rem 0" }}
                nameTitle={"Thông tin phòng"}
                iconComponent={
                  <HomeIcon sizeIcon={{ height: "32px", width: "32px" }} />
                }
              />
            </div>
            <div className="content_room">
              <div className="dflex">
                <div className="left_room">
                  <div className="title_room">
                    <p>
                      The Royal Homeis Suite Balcony - Phú Mỹ Hưng (SECC,
                      Crescent Mall, SC Vivo City)
                    </p>
                  </div>
                  <div className="location_room">
                    <div className="dflex-center">
                      <Location />
                      <span className="title_tin">
                        Quận 7, Hồ Chí Minh, Việt Nam
                      </span>
                    </div>
                  </div>
                </div>
                <div className="right_room">
                  <img
                    style={{ width: "100%", borderRadius: "1rem" }}
                    src="https://cdn.luxstay.com/rooms/25174/large/room_25174_99_1558322038.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="line"></div>
            <div className="content_room">
              <div className="dflex">
                <div className="left_room">
                  <div className="location_room">
                    <div
                      className="dflex-center"
                      style={{ margin: " 1.6rem 0" }}
                    >
                      <CalendarTodayIcon
                        style={{
                          transform: "scale(1.5)",
                          fill: "#14C1C7",
                          marginLeft: "0.8rem",
                        }}
                      />
                      <span
                        style={{ marginLeft: "1.6rem" }}
                        className="title_tin"
                      >
                        5 đêm, 11/11/2021 - 16/11/2021
                      </span>
                    </div>
                    <div className="dflex-center">
                      <PersonIcon
                        style={{
                          transform: "scale(1.5)",
                          fill: "#14C1C7",
                          marginLeft: "0.8rem",
                        }}
                      />
                      <span
                        className="title_tin"
                        style={{ marginLeft: "1.6rem" }}
                      >
                        2 người lớn
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="line"></div>
            <div className="total_sale_price">
              <div
                className="dflex-center jus-event"
                style={{ marginTop: "22px" }}
              >
                <span className="price_text">Giá thuê 5 đêm</span>
                <span className="price_text" style={{ marginRight: "2rem" }}>
                  5,252,000đ
                </span>
              </div>
              <div
                className="dflex-center jus-event"
                style={{ marginTop: "1.3rem" }}
              >
                <span className="price_text">Phí dịch vụ</span>
                <span className="price_text" style={{ marginRight: "2rem" }}>
                  432,000đ
                </span>
              </div>
              <div
                className="dflex-center jus-event"
                style={{ marginTop: "1.3rem" }}
              >
                <span className="price_text">Tổng giá phòng</span>
                <span className="price_text" style={{ marginRight: "2rem" }}>
                  5,486,000đ
                </span>
              </div>
              <div
                className="dflex-center jus-event"
                style={{ marginTop: "1.3rem" }}
              >
                <span className="price_text">Mã giảm giá</span>
                <span
                  className="price_text"
                  style={{ marginRight: "2rem", color: "#14C1C7" }}
                >
                  -200,000đ
                </span>
              </div>
            </div>
            <div class="line"></div>
            <div className="total_sale_price">
              <div
                className="dflex-center jus-event"
                style={{ marginTop: "1.3rem" }}
              >
                <div className="dflex-colunm">
                  <span className="price_text">Tổng tiền thanh toán</span>
                  <span className="price_text1">Đã bao gồm thuế, phí, VAT</span>
                </div>
                <span
                  className="price_text"
                  style={{
                    marginRight: "2rem",
                    fontWeight: "bold",
                  }}
                >
                  5,624,312đ
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <TextField
        style={{ width: "100%" }}
        id="standard-basic"
        label="Standard"
        variant="filled"
      /> */}
    </div>
  );
}

export default BookingRoom;
