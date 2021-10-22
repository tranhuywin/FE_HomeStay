import HeaderBrand from '../components/headers/headerBrand';
import BannerSignUp from '../components/banner/bannerSignUp';
import ItemIndtroduce from '../components/ItemIntroduce/itemIndtroduce';
import FooterCertification from '../components/footers/footerCertification';

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
      <HeaderBrand />
      <BannerSignUp />

      <div style={styles.groupItem}>
        <div style={{ display: 'inline-block' }}>
          <ItemIndtroduce image='/coins@2x.png' title='Tich diem nhanh chong'>
            <span>Phương thức thanh toán tiện lợi, an toàn.
              Tích hợp chức năng lưu thẻ để đặt phòng lần sau.</span>
          </ItemIndtroduce>
        </div>


        <div style={{ marginLeft: '60px', display: 'inline-block', }}>
          <ItemIndtroduce image='/coins@2x.png' title='Tich diem nhanh chong'>
            <span>Phương thức thanh toán tiện lợi, an toàn.
              Tích hợp chức năng lưu thẻ để đặt phòng lần sau.</span>
          </ItemIndtroduce>
        </div>

        <div style={{ display: 'inline-block', marginTop: '64px' }}>
          <ItemIndtroduce image='/coins@2x.png' title='Tich diem nhanh chong'>
            <span>Phương thức thanh toán tiện lợi, an toàn.
              Tích hợp chức năng lưu thẻ để đặt phòng lần sau.</span>
          </ItemIndtroduce>
        </div>

        <div style={{ marginLeft: '60px', display: 'inline-block', marginTop: '64px' }}>
          <ItemIndtroduce image='/coins@2x.png' title='Tich diem nhanh chong'>
            <span>Phương thức thanh toán tiện lợi, an toàn.
              Tích hợp chức năng lưu thẻ để đặt phòng lần sau.</span>
          </ItemIndtroduce>
        </div>
      </div>

      <FooterCertification />

    </>
  );
}

export default Login;
