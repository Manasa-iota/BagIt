export default function Button({text,type}) {
  return (
    <button className={`btn ${type==='secondary'? "btn--secondary":""}`} >{text}</button>
  )
}
