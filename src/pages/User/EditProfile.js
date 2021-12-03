import { PrimaryButton, FranceInput, Vietnam, PhoneNumberInput } from '../../components';
import Styles from './EditPRofile.module.scss';
import Person from '../../assets/images/icons/PersonBlack.png';
export default function EditProfile() {
    return (
        <div>
                <div className={Styles.ProfileInfoAvatar}>
                    <img src={Person} alt='avatar'></img>
                    <PrimaryButton text="Đổi ảnh đại diện"></PrimaryButton>
                </div>
                <div className={Styles.ProfileInfoElement}>
                    <FranceInput textInput="Pháp" titleInput="Tên"></FranceInput>
                </div>

                <div className={Styles.ProfileInfoElement}>
                    <FranceInput textInput="Nguyễn Văn" titleInput="Họ và tên đệm"></FranceInput>
                </div>
                <div className={Styles.ProfileInfoElement}>
                    <FranceInput textInput="nguyenvanphap@gmail.com" titleInput="Email" typeInput="email"></FranceInput>
                </div>
                <div className={Styles.ProfileInfoElement}>
                    <PhoneNumberInput
                        titleInput={"Số điện thoại"}
                        textInput={"Mật khẩu"}
                        iconComponent={<Vietnam />}
                    />
                </div>
                <div className={Styles.ProfileInfoElement}>
                    <FranceInput textInput="24 đường số 11, Linh Trung, Thủ Đức, Hồ Chí Minh" titleInput="Địa chỉ"></FranceInput>
                </div>
                <div className={Styles.ProfileInfoElement}>
                    <FranceInput textInput="nguyenvanphap@gmail.com" titleInput="Ngày sinh" typeInput="date"></FranceInput>
                </div>
                <div className={Styles.ProfileInfoElement}>
                    <FranceInput textInput="Nam" titleInput="Giới Tính"></FranceInput>
                </div>
            </div>
    )
}