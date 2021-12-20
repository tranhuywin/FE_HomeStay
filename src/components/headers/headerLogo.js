import Styles from './headerBrand.module.scss'
import { Link } from "react-router-dom";

function HeaderLogo() {
    return (
        <header className={Styles.Header}>
            <Link className={Styles.HeaderBrand} to="/home" >
                FranceStay
            </Link>
        </header>
    );
}

export default HeaderLogo;
