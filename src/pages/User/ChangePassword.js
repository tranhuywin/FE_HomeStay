import { FranceInput, PrimaryButton } from '../../components';
import { useState } from "react";

export default function ChangePassword() {
    const [isEdit, setisEdit] = useState(true);

    return (
        <>
            <FranceInput textInput="********" titleInput="Mật khẩu hiện tại" typeInput="password" onChange={()=>{setisEdit(false)}}></FranceInput>
            <FranceInput textInput="********" titleInput="Mật khẩu mới" typeInput="password"></FranceInput>
            <FranceInput textInput="********" titleInput="Xác nhận mật khẩu mới" typeInput="password"></FranceInput>
            <div style={{float: 'right', marginTop: "2rem"}}>
            <PrimaryButton text="Đổi mật khẩu" disableButton={isEdit}></PrimaryButton>
            </div>

            
        </>
    )
}