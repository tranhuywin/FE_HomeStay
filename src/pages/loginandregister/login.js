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
} from "../../components/index";
import PasswordIcon from "@mui/icons-material/LockOpen";
import { useState } from "react";
import { HeaderLogo } from "../../components/";
import Styles from "./login.module.scss";
function Login() {
  const [Email, setEmail] = useState("Địa chỉ Email");
  const [Password, setPassword] = useState("Mật khẩu");
  const [isValidateEmail, setIsValidateEmail] = useState(false);
  const [isValidatePassword, setIsValidatePassword] = useState(false);

  const handleSubmit = () => {
    if (Email === "" || Email.includes("Địa chỉ Email"))
      setIsValidateEmail(true);
    else setIsValidateEmail(false);
    if (Password === "" || Password.includes("Mật khẩu"))
      setIsValidatePassword(true);
    else setIsValidatePassword(false);
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
    <header>
    <HeaderLogo />
    </header>

   
    <div style={{ background: "#fff" }}>
      <Modal styleClass={styles.modalEdit}>
        <div className={Styles.LoginModal}>
          <div className={Styles.Account}>
            <h2 className={Styles.HeadingTitle}>Đăng nhập</h2>
            <div className={Styles.DescriptionBlock}>
              <h4 className={Styles.Description}>
                Đăng nhập FranceStay để trải nghiệm
              </h4>
            </div>
            <FranceInput
              onChangefunc={(value) => setEmail(value)}
              errorText={"*Chưa nhập địa chỉ Email"}
              textInput={Email}
              iconComponent={<Gmail />}
            />
            {isValidateEmail && (
              <p className={Styles.ErrorText}>*Chưa nhập địa chỉ Email</p>
            )}
            <FranceInput
              onChangefunc={(value) => setPassword(value)}
              errorText={"*Chưa nhập mật khẩu"}
              typeInput="password"
              textInput={Password}
              iconComponent={
                <PasswordIcon style={{ transform: "scale(1.5)" }} />
              }
            />

            {isValidatePassword && (
              <p className={Styles.ErrorText}>*Chưa nhập mật khẩu</p>
            )}

            <div onClick={() => handleSubmit()}>
              <FranceButton
                textInput={"Đăng nhập"}
                typeHover={2}
                colorText={"#fff"}
              />
            </div>

            <div className={Styles.EventTextBlock}>
              <p className={Styles.EventText}>
                Quên mật khẩu ?{" "}
                <a href="/login" className={Styles.ActionEventLink}>
                  Nhấn vào đây
                </a>
              </p>
            </div>
            <div className={Styles.EventTextBlock}>
              <p className={Styles.EventText}>
                Bạn chưa có tài khoản FranceStay?{" "}
                <a href="register" className={Styles.ActionEventLink}>
                  Đăng ký
                </a>
              </p>
            </div>
            <div className={Styles.EventTextBlock}>
              <p className={Styles.EventText}>Hoặc</p>
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
            paddingBottom: "154px",
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
      <br/>
    </div>
    </>
  );
}

export default Login;
