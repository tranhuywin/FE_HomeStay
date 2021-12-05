import BannerSignUp from '../../components/banner/bannerSignUp';
import ItemIndtroduce from '../../components/ItemIntroduce/itemIndtroduce';

function Login() {
  const styles = {
    groupItem: {
      marginTop: '65px',
      marginLeft: '40px',
      width: '750px',
    },
  }
  return (
    <>
      <BannerSignUp />

      <div style={styles.groupItem}>
        <div style={{ display: 'inline-block' }}>
          <ItemIndtroduce image='/coins@2x.png' title='Tích điểm nhanh chóng'>
            <span>Tích điểm đối với mỗi lượt đặt chỗ thành công.</span><br/>
            <span>Quy đổi thành Lux Credit để du lịch nhiều hơn nữa.</span>
          </ItemIndtroduce>
        </div>


        <div style={{ marginLeft: '60px', display: 'inline-block', }}>
          <ItemIndtroduce image='/wallet@2x.png' title='Thanh toán đơn giản'>
            <span>Phương thức thanh toán tiện lợi, an toàn.</span><br/>
            <span>Tích hợp chức năng lưu thẻ để đặt phòng lần sau.</span>
          </ItemIndtroduce>
        </div>

        <div style={{ display: 'inline-block', marginTop: '64px' }}>
          <ItemIndtroduce image='/backpack@2x.png' title='Ưu đãi mỗi ngày'>
            <span>Nhận thông báo ưu đãi từ Luxstay khi có kế hoạch
              du lịch để lựa chọn và đặt ngay cho mình
              một chỗ ở phù hợp, tiện nghi với giá tốt nhất.</span>
          </ItemIndtroduce>
        </div>

        <div style={{ marginLeft: '60px', display: 'inline-block', marginTop: '64px' }}>
          <ItemIndtroduce image='/top-sales@2x.png' title='Tiện ích thông minh'>
            <span>Check-in và kiểm tra hóa đơn thanh toán kể cả khi
              không có kết nối mạng. Hoàn tiền nhanh gọn. </span><br/>
            <span>Đổi lịch dễ dàng.</span>
          </ItemIndtroduce>
        </div>
      </div>
    </>
  );
}

export default Login;