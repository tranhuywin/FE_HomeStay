import Styles from './button.module.scss';
export default function ButtonBlog({ icon, href}) {
    return (
        <>
            <a href={href} className={Styles.Button} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} style={{background: `url(${icon})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "30px 30px"}}>
            </a>
        </>
    )
}