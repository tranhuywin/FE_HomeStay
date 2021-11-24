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
function Register() {
  const styles = {
    groupItem: {
      marginTop: "65px",
      marginLeft: "40px",
      width: "750px",
    },
    modalEdit: {
      left: "50%",
      width: "40%",
      top: "12%",
    },
  };
  return (
    <>
      <Modal styleClass={styles.modalEdit}>
        <div className={Styles.LoginModal}>
          <div className={Styles.Account}>
            <h2 className={Styles.HeadingTitle}>Đăng ký thành viên</h2>
            <FranceInput
              titleInput={"Địa chỉ Email"}
              textInput={"phaplon@gmail.com"}
              iconComponent={<Gmail />}
            />
            <PhoneNumberInput
              titleInput={"Số điện thoại"}
              textInput={"Mật khẩu"}
              iconComponent={<Vietnam />}
            />
            <FranceInput
              titleInput={"Họ và tên đệm"}
              textInput={"Huỳnh Loan"}
            />
            <FranceInput
              titleInput={"Mật khẩu"}
              miniTitleInput={" (Tối thiểu 8 ký tự)"}
              textInput={"**********"}
              iconComponent={<Password />}
            />
            <FranceInput
              titleInput={"Xác định mật khẩu"}
              textInput={"**********"}
              iconComponent={<Password />}
            />
            <FranceButton
              colorText={"#fff"}
              textInput={"Đăng ký"}
              typeHover={2}
            />
            <div className={Styles.EventTextBlock}>
              <p className={Styles.EventText}>
                Bạn đã có tài khoản FranceStay ?{" "}
                <a href="google.com" className={Styles.ActionEventLink}>
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
