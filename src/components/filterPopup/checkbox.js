import Styles from './checkbox.module.scss'
function CheckBox({label}){
    const ramdom = Math.random().toString().replace(/0\./, '');

    return (                            
        <div className={Styles.Wrapper}>
            <input type="checkbox" id={ramdom}/>
            <label  for={ramdom}>{label}</label>
        </div>
    )
}
export default CheckBox;