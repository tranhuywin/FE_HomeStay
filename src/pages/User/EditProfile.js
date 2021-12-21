import { PrimaryButton, FranceInput, Vietnam, PhoneNumberInput, FranceSelect } from '../../components';
import Styles from './EditPRofile.module.scss';
import Person from '../../assets/images/icons/PersonBlack.png';
import { useState } from "react";

export default function EditProfile() {
    const [isEdit, setisEdit] = useState(true);

    return (
        <div>
                <div className={Styles.ProfileInfoAvatar}>
                    <img src={Person} alt='avatar'></img>
                    <PrimaryButton text="Đổi ảnh đại diện"></PrimaryButton>
                </div>
                <div className={Styles.ProfileInfoElement}>
                    <FranceInput textInput="Pháp" titleInput="Tên" onChange={()=>{setisEdit(false)}}></FranceInput>
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
                    <FranceInput textInput="2000-02-09" titleInput="Ngày sinh" typeInput="date"></FranceInput>
                </div>
                <div className={Styles.ProfileInfoElement}>
                    <FranceSelect text="Nam" title="Giới Tính" options={[{text: "Nam", value: "Nam"}, {text: "Nữ", value: "Nữ"}, {text: "Khác", value: "Khác"}]}></FranceSelect>
                </div>
                <div style={{float: 'right', marginTop: "24px"}}>
                <PrimaryButton text="Lưu thông tin" disableButton={isEdit}></PrimaryButton>
                </div>
               
            </div>
    )
}