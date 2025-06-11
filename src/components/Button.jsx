export default function Button({text,type,handleClicks}) {
  const handleClick = () => {
    if (handleClicks && typeof handleClicks[text] === 'function') {
      handleClicks[text]();
    }
  };

  return (
    <button onClick={handleClick} className={`btn ${type==='secondary'? "btn--secondary":""}`} >{text}</button>
  )
}
