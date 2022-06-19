import Item from "./Item";
import NewItemForm from "./NewItemForm";

import classes from "./TodoList.module.css";

function TodoList () {
  function handleClick(event){
    
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

    return (
        // <ul>
        //   {DUMMY_DATA.map((todo) => (
        //     <li key="{todo.todo_id}">{todo.description}</li>
        //   ))}
        // </ul>
        <section>
          <Item description='I suck at coding'></Item>
          {/* <button className={classes.button} onClick={handleClick}></button> */}
          <NewItemForm/>
        </section>
      );
}

export default TodoList;