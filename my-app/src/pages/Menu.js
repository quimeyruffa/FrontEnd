import React, { Component } from 'react'
import SinImagen from './ballenita3.png';
// import Cookies from 'universal-cookie';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Buscardor from '../component/Buscardor';

// const cookies = new Cookies();
class Menu extends Component {

    constructor() {
        super();
        this.state = {
            termino: '',
            products: []
        }
    }
    baseUrl = "http://whales.matanga.net.ar:8000/usuarios/login";

   
    productos = async (termino) => {
        this.setState({
            termino: termino
        })
        
        const url = 'http://whales.matanga.net.ar:8000/productos/' + termino.trim()
        console.log(url)
        const res = await fetch(url)
        const data = await res.json();
        console.log(data)
        this.setState({
            products: data
        })
    }
    
    DesProduct(){
        window.location.href = "./product";
    }

    render() {
        return (
            <React.Fragment>

                <Buscardor datosBusqueda={this.productos} />
                <div className='row'>
                    {this.state.products.map(producto => (

                        <div className="col">
                            <Card style={{ width: '18rem', margin: '2rem' }}>
                                <Card.Img variant="top" src={!producto.imagen ? SinImagen : "http://whales.matanga.net.ar:8000/" + producto.imagen} />
                                <Card.Body>
                                    <Card.Title  >{producto.nombre}</Card.Title>
                                    <Card.Text>
                                        Descripción: {producto.id}
                                        Categoria:{producto.categoria}
                                    </Card.Text>
                                    <Button onClick={this.DesProduct} variant="primary">Comprar</Button>

                                </Card.Body>
                            </Card>
                        </div>


                    ))}

                </div>

            </React.Fragment>
        )
    }




}
export default Menu;