import Styles from './user.module.scss';
import Person from '../../assets/images/icons/PersonBlack.png';
import Password from '../../assets/images/icons/Password.png';
import Connect from '../../assets/images/icons/Connect.png';
import ChangePassword from './ChangePassword';
import LinkAccount from './LinkAccount';
import EditProfile from './EditProfile';
import { useState } from 'react';
export default function User() {

    const [page, setPage] = useState(0)
    return (
        <div className={Styles.Wrapper}>
            <div className={Styles.UserNavigation}>
                <ul>
                    <li onClick={() => {setPage(0)}} style={{ fontWeight: page === 0 ? 700 : '' }}><img src={Person} alt="logo"></img>Thông tin tài khoản</li>
                    <li onClick={() => {setPage(1)}} style={{ fontWeight: page === 1 ? 700 : '' }}><img src={Password} alt="logo"></img>Thay đổi mật khẩu</li>
                    <li onClick={() => {setPage(2)}} style={{ fontWeight: page === 2 ? 700 : '' }}><img src={Connect} alt="logo"></img>Liên kết tài khoản</li>
                </ul>
            </div>
            <div className={Styles.Content}>
               {
                   page === 0 ?  <EditProfile /> : page === 1 ? < ChangePassword/> : page === 2 ? <LinkAccount /> : null
               }
            </div>
        </div>
    )
}