import React, { Component } from 'react'
import Cookies from 'universal-cookie';
class Profile extends Component {

    constructor() {
        super();
        this.state = {
            id_usuario: 0,
            nombre: '',
            apellido: '',
            direccion: '',
            ciudad: '',
            id_provincia: 0,
            telefono: '',
            email: '',
            pass: '',
            dni: 0,
            id_estado: 0,
            imagen: '',
            codigo: '',
            codigo_validez: ''

        }
    }

    baseUrl = "http://whales.matanga.net.ar:8000/usuarios/profile";
    cookies = new Cookies();

    componentWillMount() {

        var token = localStorage.getItem('token')
        console.log(token)
        fetch(this.baseUrl, {
            method: 'GET',
            headers: {
                'x-access-token': token
            }
        }).then(res =>
            res.json().then((result) => {
                this.setState({
                    id_usuario: result.data[0].id_usuario,
                    nombre: result.data[0].nombre,
                    apellido: result.data[0].apellido,
                    direccion: result.data[0].direccion,
                    ciudad: result.data[0].ciudad,
                    id_provincia: result.data[0].id_provincia,
                    telefono: result.data[0].telefono,
                    email: result.data[0].email,
                    pass: result.data[0].pass,
                    dni: result.data[0].dni,
                    id_estado: result.data[0].id_estado,
                    imagen: result.data[0].imagen,
                    codigo: result.data[0].codigo,
                    codigo_validez: result.data[0].codigo_validez
                })
            }));

    }


 

    // AGREGAR NUEVO PRODUCTO
    // const agregarProducto = () =>{
    //     window.location.href = './newProduct';
    // }


    render() {

        return (<>
            <div className='row'>
                <div className='col-12'>
                    <div className=' col-4 card' style={{ float: 'left', 'margin-top':'1rem','margin-left':'1rem', 'text-aling': 'center', 'background-color': 'lightgray' }}>
                        <div className='row'>
                            <div className='col-12'>
                                <img alt='user' src={this.state.imagen} />
                                <br></br>
                                <b>{this.state.nombre}   {this.state.apellido}</b>
                                <p> {this.state.direccion}</p>

                                <button style={{ 'border-radius': '30px', margin: '1rem' }} className='btn-primary'>Message</button>

                            </div>
                        </div>
                    </div>
                    <div className='col-5 card user-description offset-5' style={{ 'margin-top':'1rem','text-aling': 'center', 'background-color': 'lightgray' }} >
                        <br></br>
                           <b>Email:</b>  {this.state.email}
                        <hr></hr>
                            <b>Phone:</b> {this.state.telefono}
                        <hr></hr>
                            <b>Address:</b> {this.state.direccion}
                        <p></p>
                    </div>
                </div>

            </div>


        </>

        )
    }

}
export default Profile;