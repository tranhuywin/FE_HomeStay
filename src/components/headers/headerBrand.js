import Styles from './headerBrand.module.scss'
import { Link } from "react-router-dom";

function HeaderBrand() {
    return (
        <header className={Styles.Header}>
            <Link className={Styles.HeaderBrand} to="/home" >
                FranceStay
            </Link>

            <nav className={Styles.HeaderLeft}>
                <Link className={Styles.HeaderLeftLink} to="/guide">Guide</Link>
                <Link className={Styles.HeaderLeftLink} to="/home/blog">Blog</Link>
                <Link className={Styles.HeaderLeftLink} to="/home/register">Đăng ký</Link>
                <Link className={Styles.HeaderLeftLink} to="/home/login">Đăng nhập</Link>
                <button className={Styles.HeaderLeftlanguage}><img src='/Vietnam.png' alt='vietnam'></img>VND</button>
            </nav>
        </header>
    );
}

export default HeaderBrand;
