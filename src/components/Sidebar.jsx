import { useItemsStore } from "../stores/itemsStore";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";


export default function Sidebar() {
  const handleAddItem = useItemsStore(state=>state.handleAddItem);
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />

      <ButtonGroup />
    </div>
  )
}
