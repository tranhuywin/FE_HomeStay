import Styles from './PrimaryButton.module.scss';

export default function PrimaryButton({text, disableButton}){

    const backgroundDisabled="rgb(147 144 144)";
    const background="linear-gradient(90deg, #02aab0 0%, rgba(0, 205, 172, 0.51) 100%)";
    return (
        <button className={Styles.PrimaryButton} disabled={disableButton} style={{background: !disableButton? background : backgroundDisabled}}>{text}</button>
    )
}