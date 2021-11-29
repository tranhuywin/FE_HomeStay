import Styles from './MainCardBlog.module.scss';
import { Link } from 'react-router-dom';

export default function MainCardBlog({title, srcImg, dateAgo, timeReading, styleCard}) {
    return (
        <div className={Styles.BlogWapper} style={styleCard}>
            <div className={Styles.BlogWapperImage}>
                <img src={srcImg} alt="" />
                <div className={Styles.BlogWapperImageUser}>
                    <img src='../../../assets/images/icons/Person.svg' alt="user"></img>
                </div>
            </div>
            <div className={Styles.BlogWapperContent}>
                    <Link className={Styles.BlogWapperContentTitle} to='/'>
                        {title}
                    </Link>

                <div className={Styles.BlogWapperContentFooter}>
                    <div className={Styles.BlogWapperContentFooterDate}>
                        <span className={Styles.BlogWapperContentFooterDateDateAgo}>
                            {dateAgo}
                        </span>
                        <span className={Styles.BlogWapperContentFooterDatePoint}/>
                        <span className={Styles.BlogWapperContentFooterDateTimeReading}>
                            {timeReading}
                        </span>
                    </div>
                </div>
            </div>
        </div>)
}