import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({onAddItem}) {
  const inputRef = useRef();
  const [itemText,setItemText] = useState();

  const handleSubmit =(e)=>{
      e.preventDefault();
            if(!itemText){
              inputRef.current.focus();
              return;
            }
            
          onAddItem(itemText);
          setItemText("")
  }

  return (
    <form onSubmit={handleSubmit}>
        <h2>Add an item</h2>
        <input value={itemText} ref={inputRef} autoFocus onChange={(e)=>{
          setItemText(e.target.value)
        }}/>
        <Button text="Add to list"/>
    </form>
  )
}
