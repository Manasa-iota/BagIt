export default function ItemList({items, toogleCheck,removeItem}) {
  
  return (
    <ul className="item-list">
      {items.map((item) => (
        <Item key={item.id} item={item} onToogleCheck={toogleCheck} onRemoveItem ={removeItem} />
      ))}
    </ul>
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
