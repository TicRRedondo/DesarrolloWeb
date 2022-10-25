import './producto.css';
import Button from 'react-bootstrap/Button';

function Producto(props) {

  const productos = JSON.parse(localStorage.getItem("productos"))


  const adicionarCarrito = () => {

    const productoAdicionado = productos.find(element => {
      return element.id === props.id;
    });
    if (localStorage.getItem("carrito") == null) {
      localStorage.setItem("carrito", JSON.stringify([productoAdicionado]))
    }
    else {
      const productosAdicionados = JSON.parse(localStorage.getItem("carrito"))
      productosAdicionados.push(productoAdicionado)
      localStorage.setItem("carrito", JSON.stringify(productosAdicionados))
    }
      

  }

  return (
    <div id="card-product">
      <div className="card-scd">
        <img src={props.src}
          className='img-prod'
          alt="imagen de producto"
        ></img>
        <div className='card-description'>
          <h4 className='card-title'>{props.marca} {props.modelo}</h4>
          <h5 className='price'>$ {props.precio}</h5>
          <p className='description'>{props.caracteristicas}</p>
        </div>
        <Button variant="outline-success" onClick={() => adicionarCarrito(props)}>Comprar</Button>
      </div>
    </div>

  )
}

export default Producto;