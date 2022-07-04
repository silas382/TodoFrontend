import Item from "./Item";
import NewItemForm from "./NewItemForm";
import { Link } from 'react-router-dom';
import {Routes, Route, Switch, useNavigate} from 'react-router-dom';
import classes from "./TodoList.module.css";

function TodoList () {
    
  let toDos = [];
  
    fetch('http://localhost:8080/todolist')
    .then(response => response.json())
    .then(data => {
      toDos = data;
      console.log("working");
      console.log(toDos);
    }
      );

  
  
  // const DUMMY_DATA = [
  //   {
  //     item_id: 123,
  //     order: 1,
  //     description:
  //       'This is an item',
  //     completed: false
  //   },
  //   {
  //     item_id: 321,
  //     order: 2,
  //     description:
  //       'This is an item',
  //     completed: false
  //   },
  // ];

    return (
        // <ul>
        //   {DUMMY_DATA.map((todo) => (
        //     <li key="{todo.todo_id}">{todo.description}</li>
        //   ))}
        // </ul>
        <section>
          <Item description='I suck at coding'></Item>
        </section>
      );
}

export default TodoList;