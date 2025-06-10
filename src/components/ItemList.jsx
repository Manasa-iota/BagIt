import { items } from "../lib/constants";

export default function ItemList() {
  return (
    <ul className="item-list">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}

function Item({ item }) {
  return (
    <>
      <li className="item">
        <label>
          <input type="checkbox" checked={item.packed} />
          {item.name}
        </label>
      </li>
    </>
  );
}
