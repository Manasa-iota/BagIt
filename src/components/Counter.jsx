import { useItemsStore } from "../stores/itemsStore"


export default function Counter() {
  const totalItems = useItemsStore(state=>state.totalItems);
  const markedItems = useItemsStore(state=>state.markedItems);
  return (
    <p>
        <b>{markedItems}</b>/{totalItems} are packed    
    </p>
 )
}

