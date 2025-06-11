export default function ItemList({items, toogleCheck,removeItem}) {
  
  return (
    <ul className="item-list">
      {items.map((item) => (
        <Item key={item.id} item={item} toogleCheck={toogleCheck} removeItem ={removeItem} />
      ))}
    </ul>
  );
}

function Item({ item, toogleCheck, removeItem }) {
  return (
    <>
      <li className="item">
        <label>
          <input type="checkbox" checked={item.packed} onChange={()=>toogleCheck(item)} />
          {item.name}
        </label>
        <button onClick={()=>{ 
          removeItem(item)
        }}>❌</button>
      </li>
    </>
  );
}
