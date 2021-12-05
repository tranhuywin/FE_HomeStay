import {
  PrimaryButton,
  FranceInput,
  Vietnam,
  PhoneNumberInput,
} from "../../../../components";
import ListRoom from "../ListRoom/ListRoom";
import Styles from "./BookingRoomUser.module.scss";
export default function BookingRoomUser() {
  return (
    <div>
      <div className={Styles.ProfileInfoAvatar}>
        <p className={Styles.TitleResult}>Kết quả</p>
      </div>
      <div className={Styles.ProfileInfoElement}>
        <ListRoom />
      </div>
    </div>
  );
}
