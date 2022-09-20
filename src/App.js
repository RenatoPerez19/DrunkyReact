
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Nav from "./componentes/navbar/NavBar" 
import ItemListContainer from './componentes/Productos/ItemListContainer';
import Botonclick from "./componentes/Botonclick/Botonclick";
import ItemCount from "./componentes/ItemCount/ItemCount";



function App() {
  return (
    <div className="App">
      <header/>
      <Nav/>
      <ItemListContainer greeting="Drunky , tienda de zapatillas"/>
      <Botonclick/>
      <ItemCount inicial={1} stock={10}/>
      

    </div>
  );
}

export default App;
