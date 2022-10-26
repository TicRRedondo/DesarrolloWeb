import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import BarraNavegacion from './componentes/navbar/barraNavegacion';
import listaProductos from "./componentes/listaproductos/listaProductos.json"
import Productos from './componentes/listaproductos/productos'

function App() {

  if (localStorage.getItem("productos") === null) {
    localStorage.setItem("productos", JSON.stringify(listaProductos));
  }


  return (

    <BrowserRouter>
      <BarraNavegacion />
      <Routes>
        <Route path='/productos' element={<Productos/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

