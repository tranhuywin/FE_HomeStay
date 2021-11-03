function Rating({ point, numbers }) {
    const style = {
        display: 'flex',
        alignItems: 'center',
        Star : {
            width: '1.6rem',
            height: '1.6rem'
        },
        Point : {
            color: '#22222280',
            fontSize: '1.4rem'
        },
        Numbers : {
            color:' #22222250',
            fontSize:' 1.4rem'
        }
    }
    return (
        <div style={style}>
        <img style={style.Star} src='./Star.png' alt='star img'></img>
        <label style={style.Point}>{point}</label>
        <label style={style.Numbers}>({numbers})</label>
        </div>
    );
  }
  
  export default Rating;
  