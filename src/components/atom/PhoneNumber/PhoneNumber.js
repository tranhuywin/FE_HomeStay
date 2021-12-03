import React from "react";
import Styles from "./PhoneNumber.module.scss";

function PhoneNumber(props) {
  const {
    iconComponent,
    titleInput,
    miniTitleInput,
    isInValid,
    errorText,
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
        <div style={{ display: "flex" }}>
          <div
            className={Styles.InputWrap}
            style={{ flexBasis: "20%", marginRight: "2rem" }}
          >
            <input
              className={Styles.Input}
              type="text"
              autoComplete="off"
              placeholder={"84+"}
            />

            {!!isInValid && <p className={Styles.ErrorText}>{errorText}</p>}
            <div className={Styles.IconWrap}>
              {!!iconComponent && iconComponent}
            </div>
          </div>
          <div className={Styles.InputWrap} style={{ flexBasis: "80%" }}>
            <input
              className={Styles.Input}
              type="text"
              autoComplete="off"
              placeholder={"Số điện thoại"}
            />
            {!!isInValid && <p className={Styles.ErrorText}>{errorText}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
export default PhoneNumber;