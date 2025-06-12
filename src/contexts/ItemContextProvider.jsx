import { items as initialItems } from "../lib/constants";
import { createContext, useEffect, useState } from "react";

export const ItemContext  = createContext();

export default function ItemContextProvider({ children }) {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || initialItems
  );

  const handleAddItem = (newItemText) => {
    const newItem = {
      name: newItemText,
      packed: false,
      id: Date.now(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
  };
  const markAllAsComplete = () => {
    const newItems = items.map((item) => ({
      ...item,
      packed: true,
    }));

    setItems(newItems);
    console.log("marked all");
  };
  const markAllAsIncomplete = () => {
    const newItems = items.map((item) => ({
      ...item,
      packed: false,
    }));

    setItems(newItems);
    console.log("unmarked");
  };
  const resetToIntial = () => {
    setItems(initialItems);
    console.log("reset to initial");
  };
  const removeAllItems = () => {
    setItems([]);
    console.log("removed all");
  };
  const handleClicks = {
    "Mark All as complete": markAllAsComplete,
    "Mark All as incomplete": markAllAsIncomplete,
    "Reset to Initial": resetToIntial,
    "Remove all items": removeAllItems,
  };
  const toogleCheck = (item) => {
    const newItem = { ...item, packed: !item.packed };
    const idx = items.indexOf(item);
    const newItems = [...items];
    newItems[idx] = newItem;
    setItems(newItems);
  };
  const removeItem = (item) => {
    const newItems = items.filter((i) => i.id !== item.id);
    setItems(newItems);
  };
  const totalItems = items.length;
  const markedItems = items.reduce((count, item) => {
    return item.packed ? count + 1 : count;
  }, 0);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  return <ItemContext.Provider value={{
    items,
    handleAddItem,
    handleClicks,
    toogleCheck,
    removeItem,
    totalItems,
    markedItems,
  }}>{children}</ItemContext.Provider>;
}
