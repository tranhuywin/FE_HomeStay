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
import Styles from "./login.module.scss";
function Login() {
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
            <h2 className={Styles.HeadingTitle}>Đăng nhập</h2>
            <div className={Styles.DescriptionBlock}>
              <h4 className={Styles.Description}>
                Đăng nhập FranceStay để trải nghiệm
              </h4>
            </div>
            <FranceInput
              textInput={"Địa chỉ Email"}
              iconComponent={<Gmail />}
            />
            <FranceInput textInput={"Mật khẩu"} iconComponent={<Password />} />

            <FranceButton
              textInput={"Đăng nhập"}
              typeHover={2}
              colorText={"#fff"}
            />

            <div className={Styles.EventTextBlock}>
              <p className={Styles.EventText}>
                Quên mật khẩu ?{" "}
                <a href="google.com" className={Styles.ActionEventLink}>
                  Nhấn vào đây
                </a>
              </p>
            </div>
            <div className={Styles.EventTextBlock}>
              <p className={Styles.EventText}>
                Bạn chưa có tài khoản FranceStay?{" "}
                <a href="google.com" className={Styles.ActionEventLink}>
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

export default Login;
