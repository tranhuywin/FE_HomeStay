import Styles from "./numbericupdown.module.scss";
import { useState } from 'react';
function Numericupdown({title}) {
    const [number, setnumber] = useState(0);

    const decrease = () => {
        if (number > 0) {
            setnumber(number - 1);
        }
    }
    const increase = () => {
        setnumber(number + 1);
    }
    return (
        <div className={Styles.Wrapper}>
            <label>{title}</label>
            <div className={Styles.WrapperNumbericUpDowm}>
                <button type="button" onClick={decrease}>-</button>
                <label>{number}</label>
                <button type="button" onClick={increase}>+</button>
            </div>

        </div>
    )
}
export default Numericupdown;