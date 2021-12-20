import "./InformationRoom.scss";
import "./UtilitiesInformation.scss";
import { GetUrlImgUtil } from "../../../../helpers";
import Constant from "../../../../common/Constant";
import { TextIcon } from "../../../../components/index";
import HeadingIcon from "../Atom/HeadingIcon";
import UtilityIcon from "../../../../assets/images/icons/common/UtilityIcon";

function UtilitiesInformation(props) {
  const { util_list, isNotIconText, isDisabled } = props;

  const styleComponent = { margin: "2.4rem 0", width: "calc(100%/6)" };
  return (
    <div className="information_room_detail">
      {!isNotIconText ? <HeadingIcon
        nameTitle={"Tiện ích"}
        iconComponent={
         <UtilityIcon sizeIcon={{ height: "32px", width: "32px"}} />
        }
      />: <h1 style={{color: "#02AAB0"}}>Tiện ích</h1>}

      <div className="list_information">
        {util_list.map((util) => {
          let resultDetect = GetUrlImgUtil(util.type, Constant.utilities);
          let Icon;
          if (resultDetect.length !== 0) {
            Icon = resultDetect.url_icon.default;
          } else if (!resultDetect) return <div></div>;
          return (
            <TextIcon
              Text={util.name}
              styleComponent={styleComponent}
              styleTextName={"text_icon"}
              iconComponent={<Icon />}
              isDisabled={isDisabled}
            />
          );
        })}
      </div>
    </div>
  );
}

export default UtilitiesInformation;
