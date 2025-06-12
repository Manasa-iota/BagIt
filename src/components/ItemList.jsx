import Select from "react-select";
import EmptyView from "./EmptyView";
import { useMemo, useState } from "react";
import { useItemsStore } from "../stores/itemsStore";

const sortingOptions = [
  {
    "label":"Sort by default",
    "value":"default"
  },
  {
    "label":"Sort by packed",
    "value":"packed"
  },
  {
    "label":"Sort by unpacked",
    "value":"unpacked"
  }
]

export default function ItemList() {
  const [sortBy, setSortBy] = useState("default");
  const items = useItemsStore(state=>state.items);
  const toggleCheck = useItemsStore(state=>state.toggleCheck);
  const removeItem = useItemsStore(state=>state.removeItem);

const sortedItems = useMemo(()=>[...items].sort((a, b) => {
  if (sortBy === "packed") return b.packed - a.packed;
  if (sortBy === "unpacked") return a.packed - b.packed;
  return 0; 
}),[items, sortBy]);

  return (
    <>
    
    <ul className="item-list">
      { 
        items.length>0 && <section key={"sort-selection"} className="sorting">
        <Select defaultValue={sortingOptions[0]} options={sortingOptions} onChange={option=>setSortBy(option.value)} />
      </section>
      }
      
      {
        
        items.length===0 ?<EmptyView /> : sortedItems.map((item) => (
        <Item key={item.id} item={item} onToggleCheck={toggleCheck}
              onRemoveItem={removeItem} />
      ))
      }  
    </ul>
  </>
  );
}

function Item({ item, onToggleCheck, onRemoveItem }) {
  return (
    <>
      <li className="item">
        <label>
          <input type="checkbox" checked={item.packed} onChange={() => onToggleCheck(item.id)} />
          {item.name}
        </label>
        <button onClick={()=>{ 
           onRemoveItem(item.id)
        }}>❌</button>
      </li>
    </>
  );
}
