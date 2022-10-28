import { Fragment } from 'react'
import '../styles/ventanaCarritoCompras.css'
import '../styles/skeleton.css'
import '../styles/normalize.css'
import '../styles/custom.css'

export function VentanaCarritoCompras() {
    return(
        <>

<div id="menuCarrito" class="carritoCompras">
        <div class="container">
            <div class="row">
                    <div class="rowMenu three column">
                            <nav id="principal" class="menuCarrito">
                                <a class="enlace" href="#">Lista De Productos</a>
                                <a class="enlace" href="#">Carrito</a>
                            </nav>
                    </div>
            </div>
        </div>
            <div class="row">
                    <div class="rowMenu three column">
                            <table class="menuCarritoTable">
                                <tr>
                                    <td class="menuCarritoTableTd">Imágen</td>
                                    <td class="menuCarritoTableTd">Cantidad</td>
                                    <td class="menuCarritoTableTd">Producto</td>
                                    <td class="menuCarritoTableTd">Valor</td>
                                    <td class="menuCarritoTableTd">Total</td>
                                </tr>
                                <tr>
                                    <td class="menuCarritoTableTd"><img height="400px" src="../public/Img/curso1.jpg"></img></td>
                                    <td class="menuCarritoTableTd">1</td>
                                    <td class="menuCarritoTableTd">Curso</td>
                                    <td class="menuCarritoTableTd">100$</td>
                                    <td class="menuCarritoTableTd">100$</td>
                                </tr>
                                <tr>
                                    <td class="menuCarritoTableTd"><img height="400px" src="../public/Img/curso1.jpg"></img></td>
                                    <td class="menuCarritoTableTd">1</td>
                                    <td class="menuCarritoTableTd">Curso</td>
                                    <td class="menuCarritoTableTd">100$</td>
                                    <td class="menuCarritoTableTd">100$</td>
                                </tr>

                            </table>
                    </div>
            </div>
    </div>


        </>

    );
};