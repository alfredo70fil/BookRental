import '../App.css';
import { Button} from 'react-bootstrap';
const Body = (props) => {
    return ( 
        <div className="App-body">
            <div Style= "padding-top: 5vh; overflow-y: auto;">
                <h3>Materias</h3>
                <table class="table table-striped table-bordered table-hover col-md-6">
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
                        props.horario.map((a,index)=>
                            <tr key={index}>
                                <td>{a.clave}</td>
                                <td>{a.asignatura}</td>
                                <td>{a.hora}</td>
                                <td>{a.grupo}</td>
                                <td><Button onClick={()=>props.AgregarMateria(a.clave)} variant="success">+</Button></td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
 
export default Body;