import { useRef } from 'react';
import Card from '../ui/Card';
import classes from '../ui/Card.module.css';
import  { useState } from 'react';

function NewItemForm(props) {
  const [activityName, setActivityName] = useState("");
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res = await fetch("http://localhost:8080/addtodo", {
            mode: 'no-cors',
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              activityName: activityName,
              deadline: deadline,
              description: description,
            }),
          });
          //let resJson = await res.json();
          if (res.status != 200) {
            console.log("Error creating Todo!");
          }
        } catch (err) {
          console.log(err);
        }
      };

    const titleInputRef = useRef();
    const descriptionInputRef = useRef();
    const deadlineInputRef = useRef();

    // function submitHandler(event){

    //     event.preventDefault();
    //     //holding the current value of inputted value
    //     const enteredTitle = titleInputRef.current.value;
    //     const enteredDescription = descriptionInputRef.current.value;
    //     const enteredDeadline = deadlineInputRef.current.value;

    //     const todoData = {
    //         title: enteredTitle, 
    //         description: enteredDescription, 
    //         completed: false,
    //         deadline: enteredDeadline,
    //     };

    //     // function name can be anything because this is our own component
    //     props.onAddTodo(todoData);

    // }

    return (
    <Card>
        <form className={classes.form} onSubmit= {handleSubmit}>
            <div className={classes.control}>
                <label htmlFor="title">
                    Activity/Todo
                    <input type="text" value ={activityName} required description="title"  onChange={(e) => setActivityName(e.target.value)} ref={titleInputRef}/>
                </label>
            </div>
            <div className = {classes.control}>
                <label htmlFor="deadline">
                    Deadline
                    <input type="date" value={deadline} required description="deadline" onChange={(e) => setDeadline(e.target.value)}  ref={deadlineInputRef}/>
                </label>
            </div>
            <div className = {classes.control}>
                <label htmlFor="description">
                    Todo description
                    <textarea id='description' value={description}  onChange={(e) => setDescription(e.target.value)} ref={descriptionInputRef}></textarea>
                </label>
            </div>
            <div className= {classes.actions}>
                <button>Add Todo</button>
            </div>
        </form>
    </Card>
    );
}

export default NewItemForm;