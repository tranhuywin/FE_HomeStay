function CheckBox({label}){
    return (                            
        <div>
            <input type="checkbox" name={name} id={"checkbox" + index}/>
            <label for={"checkbox" + index}>{label}</label>
        </div>
    )
}
export default CheckBox;