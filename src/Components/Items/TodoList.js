import Item from "./Item";
import NewItemForm from "./NewItemForm";
import { Link } from 'react-router-dom';
import {Routes, Route, Switch, useNavigate} from 'react-router-dom';
import classes from "./TodoList.module.css";
import React, {useState} from 'react';


class TodoList extends React.Component  {
  constructor() {
    super()
    this.state = { todos: [] }
  }
 
  componentDidMount() {
  

    fetch('http://localhost:8080/todolist', {mode: 'cors'} )
  
    .then(response => response.json())
    .then(data => {
      this.setState({todos: data});
      console.log("working");
      console.log(data);
    }
    );
  }
  
   
      

    
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

  render() {
    return (
        // <ul>
        //   {DUMMY_DATA.map((todo) => (
        //     <li key="{todo.todo_id}">{todo.description}</li>
        //   ))}
        // </ul>
        <section>
          <ul>
            <>
            {this.state.todos.map(({ id, title, description, completed, deadline }) => (
              <div>
                <li key={id}>Todo: {title}: {description} needs to be completed by {deadline}.</li>
              </div>
              ))}
            </>
          </ul>
         
        </section>
      );
  }
}

export default TodoList;

// {arrayOfObjects.map(({ coffee, size }) => (
//   <p key={coffee}>Coffee type {coffee} in a {size} size.</p>