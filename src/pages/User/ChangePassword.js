import { PrimaryButton, FranceInput } from '../../components';

export default function ChangePassword() {
    return (
        <>
            <FranceInput textInput="********" titleInput="Mật khẩu hiện tại" typeInput="password"></FranceInput>
            <FranceInput textInput="********" titleInput="Mật khẩu mới" typeInput="password"></FranceInput>
            <FranceInput textInput="********" titleInput="Xác nhận mật khẩu mới" typeInput="password"></FranceInput>
            <div style={{float: 'right', marginTop: "2rem"}}>
            <PrimaryButton text="Đổi mật khẩu"></PrimaryButton>
            </div>

            
        </>
    )
}