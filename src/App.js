
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Nav from "./componentes/navbar/NavBar" 
import ItemListContainer from './componentes/Productos/ItemListContainer';
import ItemDetailContainer from "./componentes/itemDetailContainer/ItemDetailContainer";
import {BrowserRouter , Routes , Route , } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header/>
      <Nav/>
      <Routes>
        <Route path="/" element={
          <ItemListContainer greeting="Drunky , tienda de zapatillas"/>
        }/>
        <Route path="/categoria/:categoria" element={<ItemListContainer/>}></Route>
        <Route path="/zapatillas/:id" element={
          <ItemDetailContainer />
        }/> 
        
      </Routes>
      

    </div>
    </BrowserRouter>
  );
}

export default App;
