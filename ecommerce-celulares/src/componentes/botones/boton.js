import './boton.css';

function Boton(props) {
  
  return (
    <div className="btn">
      <a href='/productos' onClick={props.click}>{props.nombre}</a>
    </div>


  )
}

export default Boton;