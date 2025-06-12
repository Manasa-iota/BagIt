import Select from "react-select";
import EmptyView from "./EmptyView";
import { useMemo, useState } from "react";
import { useItemsContext } from "../lib/hooks";

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
  const {items,toogleCheck,removeItem} = useItemsContext();
const sortedItems = useMemo(()=>[...items].sort((a, b) => {
  if (sortBy === "packed") return b.packed - a.packed;
  if (sortBy === "unpacked") return a.packed - b.packed;
  return 0; 
}),[items, sortBy]);

  return (
    <>
    
    <ul className="item-list">
      { 
        items.length>0 && <section className="sorting">
        <Select defaultValue={sortingOptions[0]} options={sortingOptions} onChange={option=>setSortBy(option.value)} />
      </section>
      }
      
      {
        
        items.length===0 ?<EmptyView /> : sortedItems.map((item) => (
        <Item key={item.id} item={item} onToogleCheck={toogleCheck} onRemoveItem ={removeItem} />
      ))
      }  
    </ul>
  </>
  );
}

function Item({ item, onToogleCheck, onRemoveItem }) {
  return (
    <>
      <li className="item">
        <label>
          <input type="checkbox" checked={item.packed} onChange={()=>onToogleCheck(item)} />
          {item.name}
        </label>
        <button onClick={()=>{ 
          onRemoveItem(item)
        }}>❌</button>
      </li>
    </>
  );
}
