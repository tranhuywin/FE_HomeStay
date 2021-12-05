import React from "react";
import Styles from "./index.module.scss";

function FranceInput(props) {
  const {
    iconComponent,
    textInput,
    titleInput,
    miniTitleInput,
    isInValid,
    errorText,
    typeInput,
  } = props;
  return (
    <div className={Styles.FranceInputBlock}>
      <div className={Styles.FranceInputWrap}>
        <div className={Styles.TextInputWrap}>
          {!!titleInput && (
            <h3 className={Styles.TitleInput}>
              {titleInput}
              <span className={Styles.MiniTitleInput}>{miniTitleInput}</span>
            </h3>
          )}
        </div>
        <div className={Styles.InputWrap}>
          <input
            className={Styles.Input}
            autoComplete="off"
            placeholder={textInput}
            type={typeInput ? typeInput : "text"}
          />
          {!!isInValid && <p className={Styles.ErrorText}>{errorText}</p>}
          <div className={Styles.IconWrap}>
            {!!iconComponent && iconComponent}
          </div>
        </div>
      </div>
    </div>
  );
}
export default FranceInput;
