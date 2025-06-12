import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({handleClicks,handleAddItem}) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem}/>

      <ButtonGroup  handleClicks={handleClicks}/>
    </div>
  )
}
