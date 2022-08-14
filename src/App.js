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

  const [actvityName, setActivityName] = useState("");
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");
  
  let res = await fetch("https://localhost:8080/todolist", {
  method: "POST",
  body: JSON.stringify({
    activityName: activityName,
    deadline: deadline,
    description: description,
  }),
});


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
        <NewItemForm onAddTodo={addToDoHandler}/>
      </Route>
    </Switch>
  </div>
  );
}

export default App;
