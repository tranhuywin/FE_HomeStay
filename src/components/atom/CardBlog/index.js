import Styles from './CardBlog.module.scss';
import { Link } from 'react-router-dom';
import userPNG from '../../../assets/images/icons/Person.png';

export default function CardBlog({title, srcImg, dateAgo, timeReading, styleCard, to}) {
    return (
        <Link className={Styles.BlogWapper} style={styleCard} to={to}>
            <div className={Styles.BlogWapperImage}>
                <img src={srcImg} alt="" />
                <div className={Styles.BlogWapperImageUser}>
                    <img src={userPNG} alt="user"></img>
                </div>
            </div>
            <div className={Styles.BlogWapperContent}>
                    <div className={Styles.BlogWapperContentTitle}>
                        {title}
                    </div>

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
        </Link>)
}