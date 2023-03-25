import '../App.css';
import { Button, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Horario = (props) => {
    return ( 
        <div className="Horario">
          <div Style="padding-top: 5vh;"></div>
        {                    
            props.horarioA.length===0   
            ? 
              <div>
                <h3>No tienes materias</h3>
              </div>
            : 
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Clave</th>
                        <th>Materia</th>
                        <th>Hora</th>
                        <th>Grupo</th>
                        <th></th>
                    </tr>
                </thead>
              <tbody>
            {
              props.horarioA.map((a,index)=>
                <tr key={index}>
                    <td>{a.clave}</td>
                    <td>{a.asignatura}</td>
                    <td>{a.hora}</td>
                    <td>{a.grupo}</td>
                    <td><Button onClick={()=>props.EliminarDato(a.clave)} variant="danger">-</Button></td>
                </tr>
              )
            }
              </tbody>
            </Table>
          }

        </div>
     );
}
 
export default Horario;