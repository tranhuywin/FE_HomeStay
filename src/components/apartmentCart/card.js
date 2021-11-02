import Style from './card.module.scss';
import PromoteLabel from './promoteLabel.js'
function Card() {
  return (
    <>
      <div className={Style.Card}>
        <PromoteLabel percent={20}></PromoteLabel>
        <img className={Style.CardImage} src='./apartment.png' alt='apartment img'></img>
        <div>
          <label className={Style.CardTypeRoom}>Loại căn hộ - 1 phòng ngủ</label>
        </div>
        <div>
          <label className={Style.CardNameRoom}>The Galaxy Home - 1 Phòng ...</label>
        </div>
        <div>
          <label className={Style.CardPricedRoom}>850,000 VNĐ/đêm</label>
        </div>
      </div>
    </>
  );
}

export default Card;
