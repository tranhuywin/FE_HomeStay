import Styles from "./franceSelect.module.scss";

export default function FranceInput({text, title, options, errorText, isInValid}) {
    return(
        <div className={Styles.FranceInputBlock}>
      <div className={Styles.FranceInputWrap}>
        <div className={Styles.TextInputWrap}>
          {!!title && (
            <h3 className={Styles.TitleInput}>
              {title}
            </h3>
          )}
        </div>
        <div className={Styles.InputWrap}>
          <select
            className={Styles.Input}
          >
            {options.map((item, index) => (
                <option key={index} value={item.value}>
                    {item.text}
                </option>
            ))}
            </select>
          {!!isInValid && <p className={Styles.ErrorText}>{errorText}</p>}
        </div>
      </div>
    </div>
    )
}