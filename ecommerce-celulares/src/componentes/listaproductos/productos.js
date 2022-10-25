import './productos.css';
import Producto from './producto'


function Productos() {

  const productos = JSON.parse(localStorage.getItem("productos"));


  return (
    <div className="cont-productos">
        {
          productos.map(
            (item) => (
              <Producto
                src={item.img}
                marca={item.marca}
                modelo={item.modelo}
                precio={item.precio}
                caracteristicas={item.caracteristicas}
              />
            )
          )
        }
    </div>
  )
}

export default Productos;