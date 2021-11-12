import Styles from './multiCheckbox.module.scss'

function MultiCheckbox({ name, checkboxs }) {
    return (
        <div className={Styles.Wrapper}>
            <b className={Styles.WrapperTitle}>{name}</b>

            <div className={Styles.Content}>

                {
                    // eslint-disable-next-line array-callback-return
                    checkboxs.map((checkbox, index) => {
                        return (                            
                            <div>
                                <input type="checkbox" name={name} id={"checkbox" + index}/>
                                <label for={"checkbox" + index}>{checkbox}</label>
                            </div>
                        )
                    }
                        

                    )
                }

            </div>
        </div>
    );
}

export default MultiCheckbox;
