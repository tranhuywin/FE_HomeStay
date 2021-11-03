import Styles from './headerBrand.module.scss'

function HeaderBrand() {
    return (
        <header className={Styles.Header}>
            <div className={Styles.HeaderBrand} >
                FranceStay
            </div>

            <nav className={Styles.HeaderLeft}>
                <span className={Styles.HeaderLeftLink}>Guide</span>
                <span className={Styles.HeaderLeftLink}>Host</span>
                <span className={Styles.HeaderLeftLink}>Đăng ký</span>
                <span className={Styles.HeaderLeftLink}>Đăng nhập</span>
                <button className={Styles.HeaderLeftlanguage}><img src='/Vietnam.png' alt='vietnam'></img>VND</button>
            </nav>
        </header>
    );
}

export default HeaderBrand;
