function PromoteLabel({ percent }) {
  const style = {
    backgroundColor: '#14C1C7',
    width: '4.1rem',
    height: '4.7rem',
    color: '#FFFFFF',
    fontSize: '1.2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    marginTop: '-0.5rem',
    right: '0.8rem'
  }
  return (
    <div style={style}>
      <label>-{percent}% </label>
    </div>
  );
}

export default PromoteLabel;
