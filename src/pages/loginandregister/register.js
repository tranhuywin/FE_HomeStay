import BannerSignUp from "../../components/banner/bannerSignUp";
import ItemIndtroduce from "../../components/ItemIntroduce/itemIndtroduce";
import {
  FranceInput,
  Modal,
  Gmail,
  Password,
  FranceButton,
  Facebook,
  Google,
  Vietnam,
} from "../../components/index";
import PhoneNumberInput from "./components/PhoneNumber";
import Styles from "./register.module.scss";
import PasswordIcon from "@mui/icons-material/LockOpen";
import EmailIcon from "@mui/icons-material/Email";
import { useState } from "react";
import { HeaderLogo } from "../../components/";

function Register() {
  const [Email, setEmail] = useState("Địa chỉ Email");
  const [Password, setPassword] = useState("Mật khẩu");
  const [ConfirmPassword, setConfirmPassword] = useState("Mật khẩu");
  const [UserName, setUserName] = useState("Huỳnh Long");
  const [Phone, setPhone] = useState("");
  const [isValidateEmail, setIsValidateEmail] = useState(false);
  const [isValidatePassword, setIsValidatePassword] = useState(false);
  const [isValidateConfirmPassword, setIsValidateConfirmPassword] =
    useState(false);
  const [isValidateUser, setIsValidateUser] = useState(false);
  const [IsValidatePhone, setIsValidatePhone] = useState(false);

  const handleSubmit = () => {
    if (Email === "" || Email.includes("Địa chỉ Email"))
      setIsValidateEmail(true);
    else setIsValidateEmail(false);
    if (Password === "" || Password.includes("Mật khẩu"))
      setIsValidatePassword(true);
    else setIsValidatePassword(false);
    if (ConfirmPassword === "" || ConfirmPassword.includes("Mật khẩu"))
      setIsValidateConfirmPassword(true);
    else setIsValidateConfirmPassword(false);
    if (UserName === "" || UserName.includes("Huỳnh Long"))
      setIsValidateUser(true);
    else setIsValidateUser(false);
    if (Phone === "") setIsValidatePhone(true);
    else setIsValidatePhone(false);
  };

  const styles = {
    groupItem: {
      marginTop: "65px",
      marginLeft: "40px",
      width: "750px",
    },
    modalEdit: {
      left: "70%",
      width: "40%",
      top: "20%",
    },
  };
  return (
    <>
    <header><HeaderLogo></HeaderLogo></header>
      <Modal styleClass={styles.modalEdit}>
        <div className={Styles.LoginModal}>
          <div className={Styles.Account}>
            <h2 className={Styles.HeadingTitle}>Đăng ký thành viên</h2>
            <FranceInput
              onChangefunc={(value) => setEmail(value)}
              titleInput={"Địa chỉ Email"}
              textInput={"phappy@gmail.com"}
              iconComponent={<EmailIcon style={{ transform: "scale(1.5)" }} />}
              textInput={Email}
            />
            {isValidateEmail && (
              <p className={Styles.ErrorText}>*Chưa nhập địa chỉ Email</p>
            )}
            <PhoneNumberInput
              onChangefunc={(value) => setPhone(value)}
              titleInput={"Số điện thoại"}
              textInput={Phone}
              iconComponent={<Vietnam />}
            />
            {IsValidatePhone && (
              <p className={Styles.ErrorText}>*Chưa nhập số điện thoại</p>
            )}
            <FranceInput
              onChangefunc={(value) => setUserName(value)}
              titleInput={"Họ và tên đệm"}
              // textInput={"Huỳnh Long"}
              textInput={UserName}
            />
            {isValidateUser && (
              <p className={Styles.ErrorText}>*Chưa nhập Họ và tên</p>
            )}
            <FranceInput
              onChangefunc={(value) => setPassword(value)}
              typeInput="password"
              titleInput={"Mật khẩu"}
              miniTitleInput={" (Tối thiểu 8 ký tự)"}
              // textInput={"**********"}
              textInput={Password}
              iconComponent={
                <PasswordIcon style={{ transform: "scale(1.5)" }} />
              }
            />
            {isValidatePassword && (
              <p className={Styles.ErrorText}>*Chưa nhập mật khẩu</p>
            )}
            <FranceInput
              onChangefunc={(value) => setConfirmPassword(value)}
              typeInput="password"
              titleInput={"Xác định mật khẩu"}
              // textInput={"**********"}
              textInput={ConfirmPassword}
              iconComponent={
                <PasswordIcon style={{ transform: "scale(1.5)" }} />
              }
            />
            {isValidateConfirmPassword && (
              <p className={Styles.ErrorText}>*Chưa nhập mật khẩu xác nhận</p>
            )}
            <div onClick={() => handleSubmit()}>
              <FranceButton
                colorText={"#fff"}
                textInput={"Đăng ký"}
                typeHover={2}
              />
            </div>

            <div className={Styles.EventTextBlock}>
              <p className={Styles.EventText}>
                Bạn đã có tài khoản FranceStay ?{" "}
                <a href="/login" className={Styles.ActionEventLink}>
                  Nhấn vào đây
                </a>
              </p>
            </div>
            <div className={Styles.EventTextBlock}>
              <p className={Styles.EventText}>
                Tôi đồng ý với Bảo mật và Điều khoản hoạt động của FranceStay
              </p>
            </div>
            <FranceButton
              textInput={"Đăng nhập với Facebook"}
              iconComponent={<Facebook />}
              backgroundColorButton={"transparent"}
              typeHover={1}
            />
            <FranceButton
              textInput={"Đăng nhập với Google"}
              iconComponent={<Google />}
              backgroundColorButton={"transparent"}
              typeHover={1}
            />
          </div>
        </div>
      </Modal>

      <BannerSignUp />

      <div style={styles.groupItem}>
        <div style={{ display: "inline-block" }}>
          <ItemIndtroduce image="/coins@2x.png" title="Tích điểm nhanh chóng">
            <span>Tích điểm đối với mỗi lượt đặt chỗ thành công.</span>
            <br />
            <span>Quy đổi thành Lux Credit để du lịch nhiều hơn nữa.</span>
          </ItemIndtroduce>
        </div>

        <div style={{ marginLeft: "60px", display: "inline-block" }}>
          <ItemIndtroduce image="/wallet@2x.png" title="Thanh toán đơn giản">
            <span>Phương thức thanh toán tiện lợi, an toàn.</span>
            <br />
            <span>Tích hợp chức năng lưu thẻ để đặt phòng lần sau.</span>
          </ItemIndtroduce>
        </div>

        <div style={{ display: "inline-block", marginTop: "64px" }}>
          <ItemIndtroduce image="/backpack@2x.png" title="Ưu đãi mỗi ngày">
            <span>
              Nhận thông báo ưu đãi từ Luxstay khi có kế hoạch du lịch để lựa
              chọn và đặt ngay cho mình một chỗ ở phù hợp, tiện nghi với giá tốt
              nhất.
            </span>
          </ItemIndtroduce>
        </div>

        <div
          style={{
            marginLeft: "60px",
            display: "inline-block",
            marginTop: "64px",
            paddingBottom: "450px",
          }}
        >
          <ItemIndtroduce image="/top-sales@2x.png" title="Tiện ích thông minh">
            <span>
              Check-in và kiểm tra hóa đơn thanh toán kể cả khi không có kết nối
              mạng. Hoàn tiền nhanh gọn.{" "}
            </span>
            <br />
            <span>Đổi lịch dễ dàng.</span>
          </ItemIndtroduce>
        </div>
      </div>
    </>
  );
}

export default Register;
