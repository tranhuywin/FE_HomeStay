import Style from './card.module.scss';
import PromoteLabel from '../../components/apartmentCart/promoteLabel'
import Rating from '../../components/apartmentCart/rating'
function Card({typeRoom, nameRoom, price, percentPromote, ratingPoint, ratingNumber, urlImage}) {
  return (
      <div className={Style.Card}>
        <PromoteLabel percent={percentPromote}></PromoteLabel>
        <img className={Style.CardImage} src={urlImage} alt='apartment img'></img>
        <div className={Style.CardTypeRoom}>
          <label className={Style.CardTypeRoomText}>{typeRoom}</label>
          <Rating point = {ratingPoint} numbers={ratingNumber}></Rating>
        </div>
        <div className={Style.CardNameRoom}>
          <img src='./Lightning Bolt.png' className={Style.CardNameRoomIcon} alt='lightning Bolt'></img>
          <label className={Style.CardNameRoomText}>{nameRoom}</label>
        </div>
        <div>
          <label className={Style.CardPricedRoom}>{price}</label>
        </div>
      </div>
  );
}

export default Card;
