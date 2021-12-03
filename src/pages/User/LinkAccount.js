import { FranceButton, Facebook, Google } from '../../components';
export default function LinkAccount() {
    return (
        <>
            <div style={{width: '25rem'}}>
                <span style={{fontSize:'1.6rem', fontWeight:'700', marginBottom: '0.8rem'}}>Facebook</span>
                <FranceButton
                    textInput={"Kết nối với Facebook"}
                    iconComponent={<Facebook />}
                    backgroundColorButton={"#FFFFFF"}
                    typeHover={1}
                />
            </div>
            <div style={{width: '25rem', marginTop: '1.6rem'}}>
            <span style={{fontSize:'1.6rem', fontWeight:'700', marginBottom: '0.8rem'}}>Google</span>
            <FranceButton
                textInput={"Kết nối với Google"}
                iconComponent={<Google />}
                backgroundColorButton={"#FFFFFF"}
                typeHover={1}
            />
            </div>
            <p style={{color: "#00000099", fontSize: '1.6rem', marginTop: '2rem'}}>Lưu ý: Luxstay chỉ liên kết với tài khoản google sử dụng email khớp với thông tin cá nhân của bạn.</p>
        </>
    )
}