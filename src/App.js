import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Nav from "./componentes/navbar/NavBar" 
import ItemListContainer from './componentes/Productos/ItemListContainer';


function App() {
  return (
    <div className="App">
      <header/>
      <Nav/>
      <ItemListContainer greeting="Drunky , tienda de zapatillas"/>

    </div>
  );
}

export default App;
