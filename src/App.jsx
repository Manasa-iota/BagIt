import { useState } from "react";
import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import { items as initialItems } from "./lib/constants";

function App() {
  const [items, setItems] = useState(initialItems);

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
  const markAllAsIncomplete = ()=>{
    const newItems = items.map((item) => ({
      ...item,
      packed: false,
    }));

    
    setItems(newItems);
    console.log("unmarked")
  }
  const resetToIntial = () =>{
    setItems(initialItems);
    console.log("reset to initial");
  }
  const removeAllItems = () => {
    setItems([]);
    console.log("removed all");
  }
  const handleClicks = {
    'Mark All as complete':markAllAsComplete,
     "Mark All as incomplete":markAllAsIncomplete,
     "Reset to Initial":resetToIntial, 
     "Remove all items":removeAllItems
  }
  const toogleCheck =(item) => {
    const newItem = {...item,packed:!item.packed}
    const idx = items.indexOf(item)
    const newItems= [...items]
    newItems[idx] = newItem
    setItems(newItems);
  }
 const removeItem = (item) => {
  const newItems = items.filter(i => i.id !== item.id);
  setItems(newItems);
};

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList items={items} toogleCheck={toogleCheck} removeItem={removeItem} />
        <Sidebar
          handleClicks={handleClicks}
          handleAddItem={handleAddItem}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
