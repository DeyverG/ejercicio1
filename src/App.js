import EditInfo from './page/EditInfo';
import Home from './page/Home';
import NewTarea from './page/NewTarea';
import Tareas from './page/Tareas';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/tareas" component={Tareas} />
        <Route path="/crear-tarea" component={NewTarea} />
        <Route path="/editar-perfil" component={EditInfo} />
      </Switch>
    </Router>
  );
}

export default App;
