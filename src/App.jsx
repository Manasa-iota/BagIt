import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
// import ItemContextProvider from "./contexts/ItemContextProvider";


function App() {
  
  return (
    <>
      <BackgroundHeading />
      <main>
        {/* <ItemContextProvider> */}
          <Header />
          <ItemList />
          <Sidebar />
        {/* </ItemContextProvider> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
