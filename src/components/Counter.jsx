import { useItemsStore } from "../stores/itemsStore"

export default function Counter() {
  const items = useItemsStore((state) => state.items);
  const totalItems = items.length;
  const markedItems = items.filter((item) => item.packed).length;


  return (
    <p>
        <b>{markedItems}</b>/{totalItems} are packed    
    </p>
 )
}

