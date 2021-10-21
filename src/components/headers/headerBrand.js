import Styles from './headerBrand.module.scss'

function HeaderBrand() {
  return (
    <header className={Styles.Header}>
         <div className={Styles.HeaderBrand} >
          FranceStay
        </div>
    </header>
  );
}

export default HeaderBrand;
