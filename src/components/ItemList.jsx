import Select from "react-select";
import EmptyView from "./EmptyView";
import { useState } from "react";

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

export default function ItemList({items, toogleCheck,removeItem}) {
  const [sortBy, setSortBy] = useState("default");
  const sortedItems = [...items].sort((a, b) => {
  if (sortBy === "packed") return b.packed - a.packed;
  if (sortBy === "unpacked") return a.packed - b.packed;
  return 0; 
});

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
