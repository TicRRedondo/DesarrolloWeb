import './producto.css';

function Producto(props) {
  return (
    <div id="card-product">
      <div className="card-scd">
      <img src={props.src}
        className='img-prod'
        ></img>
        <div className='card-description'>
          <h4 className='card-title'>{props.marca} {props.modelo}</h4>
          <h5 className='price'>$ {props.precio}</h5>
          <p className='description'>{props.caracteristicas}</p>
        </div>
      </div>
    </div>
  )
}

export default Producto;