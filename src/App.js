import './App.css';
import React, { Component } from 'react';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Horario from './Components/Horario';
import Banner from './Components/Banner';
import { Next } from 'react-bootstrap/esm/PageItem';


class App extends Component {
  constructor() {
    super();

    this.state = {

      isBotonHabilitado: "true",

      horario:[
        {
          clave:"AEB-1011",
          asignatura:"Desarrollo de aplicaciones moviles",
          hora:"17:00-18:00",
          grupo:"C7A",
        },
        {
          clave:"AEB-1055",
          asignatura:"Programación web",
          hora:"14:00-15:00",
          grupo:"C7A",
        },
        {
          clave:"SCD-1016",
          asignatura:"Lenguajes y Autómatas 2",
          hora:"16:00-17:00",
          grupo:"C7A",
        },
        {
          clave:"ACA-0909",
          asignatura:"Taller de investigación I",
          hora:"13:00-14:00",
          grupo:"C7A",
        },
        {
          clave:"AEB-1091",
          asignatura:"Desarrollo de aplicaciones moviles",
          hora:"16:00-17:00",
          grupo:"C7A",
        },
        {
          clave:"AEB-1085",
          asignatura:"Programación web",
          hora:"17:00-18:00",
          grupo:"C7A",
        },
        {
          clave:"SCD-1276",
          asignatura:"Lenguajes y Autómatas 2",
          hora:"15:00-16:00",
          grupo:"C7A",
        },
        {
          clave:"ACA-5739",
          asignatura:"Taller de investigación I",
          hora:"14:00-15:00",
          grupo:"C7A",
        },
      ],
      horarioA:[],
    };
  }

  EliminarDato=(clave)=>{
    console.log(this.state.horarioA);
    this.setState({
      ...this.state,
      horarioA: this.state.horarioA.filter((a) => a.clave !== clave),
    })
  }

  AgregarMateria=(clave)=>{
    this.state.horario.map((a)=>
    {
      console.log(a);
      if(a.clave === clave){
          this.setState({
            ...this.state,
            horarioA:[...this.state.horarioA, {
              clave: a.clave,
              asignatura: a.asignatura,
              hora: a.hora,
              grupo: a.grupo,}],
          })
      }         
       
    })
  }
  
  render() {
    
    return (
      
      <div className="App">
        <Header/>
        <Banner   
        children="Por una Juventud Integrada al Desarrollo de México"
        />
        <div className="Containers">
          <div className='container col-md-6'>
            <div className='row g-0'>
            <Body
              isBotonHabilitado={this.state.isBotonHabilitado}
              horario={this.state.horario}
              AgregarMateria={this.AgregarMateria}
            />
            </div>
          </div>
          <div className='container col-md-6'>
          <Horario
            horarioA={this.state.horarioA}
            EliminarDato={this.EliminarDato}
            />
          </div>
        </div>
        <Banner
            
          />
      </div>
    )
  }
}

export default App;
