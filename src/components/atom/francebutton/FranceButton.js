import React, { useState } from "react";
import Styles from "./index.module.scss";

function FranceButton(props) {
  const {
    iconComponent,
    textInput,
    backgroundColorButton,
    colorText,
    typeHover,
  } = props;
  // 1 hover text
  // 2  hover background
  const [HoverSelected, setHoverSelected] = useState();
  const handleHoverOn = () => {
    if (typeHover === 1) {
      setHoverSelected({
        color: "#02aab0",
      });
    } else {
      setHoverSelected({
        backgroundPosition: "100%",
      });
    }
  };

  const handleHoverOut = () => {
    setHoverSelected({});
  };

  return (
    <div className={Styles.FranceButtonBlock}>
      <div className={Styles.FranceButtonWrap}>
        <div className={Styles.TextButtonWrap}>
          <div className={Styles.ButtonWrap}>
            <button
              onMouseOver={() => handleHoverOn()}
              onMouseOut={() => handleHoverOut()}
              className={`${Styles.Button} ${Styles.HoverText}`}
              style={{
                background: backgroundColorButton,
                color: colorText,
                ...HoverSelected,
              }}
            >
              {textInput}
            </button>
            <div className={Styles.IconWrap}>
              {!!iconComponent && iconComponent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FranceButton;
