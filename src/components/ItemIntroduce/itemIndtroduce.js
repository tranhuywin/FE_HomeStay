import Styles from "./itemIntroduce.module.scss";

function ItemIndtroduce({ image, title, children }) {
    return (
        <div className={Styles.Item}>
            <img className={Styles.ItemImg} src={image} alt='introduce'></img>
            <p  className={Styles.ItemTitle}>{title}</p>
            {children}
        </div>
    );
}

export default ItemIndtroduce;
