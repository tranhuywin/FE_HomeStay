import Styles from './multiCheckbox.module.scss'
import CheckBox from './checkbox';

function MultiCheckbox({ name, checkboxs }) {
    return (
        <div className={Styles.Wrapper}>
            <b className={Styles.WrapperTitle}>{name}</b>
            <div className={Styles.Content}>
                {
                    checkboxs.map((checkbox) => {
                        return (
                            <CheckBox label={checkbox}></CheckBox>
                        )
                    })
                }

            </div>
        </div>
    );
}

export default MultiCheckbox;
