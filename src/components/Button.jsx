export default function Button({text,type,onClick}) {
  return (
    <button onClick={onClick} className={`btn ${type==='secondary'? "btn--secondary":""}`} >{text}</button>
  )
}
