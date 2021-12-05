import Styles from './button.module.scss';

export default function ButtonBlog({icon}){
    return(
        <>
        <button className={Styles.Button}>
            <img src={icon} alt='icon'></img>
        </button>
        </>
    )
}