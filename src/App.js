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

import axios from 'axios';

function App() {

  function addToDoHandler(todoData){
      fetch(
        'http://http://localhost:5432',
        {
        method: 'POST',//get would be default'
        body: JSON.stringify(todoData),
        headers: {
          'Content-Type': 'application/json'
        }
        }

      );

  }

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
