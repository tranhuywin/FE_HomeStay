import Styles from './headerBrand.module.scss'
import { Link } from "react-router-dom";

function HeaderUser() {
    return (
        <header className={Styles.Header}>
            <Link className={Styles.HeaderBrand} to="/home" >
                FranceStay
            </Link>

            <nav className={Styles.HeaderLeft} style={{display: 'flex'}}>
                <div>
                <span style={{fontSize: "14px", color: "#000000B2", fontWeight: 700, marginBottom: "8px"}}>HÔM NAY</span>
                <p style={{fontSize: "14px", color: "#000000", fontWeight: 700}}>21/12/2021</p>
                </div>
                <div style={{marginLeft: "50px"}}>
                <span style={{fontSize: "14px", color: "#000000B2", fontWeight: 700,  marginBottom: "8px"}}>TÀI KHOẢN CỦA TÔI</span>
                <p style={{fontSize: "14px", color: "#000000", fontWeight: 700}}>Huỳnh Long Pháp</p>
                </div>
            </nav>
        </header>
    );
}

export default HeaderUser;
