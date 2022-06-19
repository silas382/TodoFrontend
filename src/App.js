import './App.css';
import TodoList from './Components/Items/TodoList';
import NewItemForm from './Components/Items/NewItemForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory, 
  Link
} from "react-router-dom";

function App() {

  return (
  <div>
    <div> <TodoList /> </div>
    <Link to='/AddToDoForm'>Add New Todo</Link>
    <Switch>
      <Route path='/AddToDoForm'> 
        <NewItemForm/>
      </Route>
    </Switch>
  </div>
  );
}

export default App;
