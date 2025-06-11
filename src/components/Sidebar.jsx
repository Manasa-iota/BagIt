import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({handleClicks,handleAddItem}) {
  return (
    <div className="sidebar">
      <AddItemForm handleAddItem={handleAddItem}/>

      <ButtonGroup  handleClicks={handleClicks}/>
    </div>
  )
}
