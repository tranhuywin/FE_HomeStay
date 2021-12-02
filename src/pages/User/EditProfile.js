import { PrimaryButton } from '../../components';
import Styles from './EditPRofile.module.scss';
import Person from '../../assets/images/icons/PersonBlack.png';
import Password from '../../assets/images/icons/Password.png';
import Connect from '../../assets/images/icons/Connect.png';
export default function EditProfile() {
    return (
        <div className={Styles.Wrapper}>
            <div className={Styles.UserNavigation}>
                <ul>
                    <li style={{ fontWeight: 700 }}><img src={Person} alt="logo"></img>Thông tin tài khoản</li>
                    <li><img src={Password} alt="logo"></img>Thay đổi mật khẩu</li>
                    <li><img src={Connect} alt="logo"></img>Liên kết tài khoản</li>
                </ul>
            </div>
            <div className={Styles.UserInfo}>
                <div className={Styles.UserInfo__Avatar}>
                </div>
                <PrimaryButton text="Đổi ảnh đại diện"></PrimaryButton>
            </div>
        </div>
    )
}