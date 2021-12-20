import "./TextIcon.scss";
import {useState} from "react";

function TextIcon(props) {
  const {
    iconComponent,
    Text,
    styleTextName,
    sizeIcon,
    styleComponent,
    styleTitleName,
    isDisabled,
  } = props;

  const [isClick, setisClick] = useState(false);
  const handleClick = () =>{
    if(isDisabled || isDisabled === undefined) return;
    setisClick(!isClick);
  }
  return (
    <div className={`text_icon`} style={styleComponent} onClick={handleClick}>
      {!!iconComponent && iconComponent}
      <p style={!isClick ? styleTitleName : {...styleTitleName,color: "#02AAB0"}}
       className={styleTextName}>
        {Text}
      </p>
    </div>
  );
}

export default TextIcon;
