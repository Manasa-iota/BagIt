import { useItemsContext } from "../lib/hooks"

export default function Counter() {
  const {totalItems,markedItems} = useItemsContext();
  return (
    <p>
        <b>{markedItems}</b>/{totalItems} are packed    
    </p>
 )
}

