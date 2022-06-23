import { useRef } from 'react';
import Card from '../ui/Card';
import classes from '../ui/Card.module.css';

function NewItemForm(props) {

    const titleInputRef = useRef();
    const descriptionInputRef = useRef();
    const deadlineInputRef = useRef();

    function submitHandler(event){

        event.preventDefault();
        //holding the current value of inputted value
        const enteredTitle = titleInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
        const enteredDeadline = deadlineInputRef.current.value;

        const todoData = {
            title: enteredTitle, 
            description: enteredDescription, 
            completed: false,
            deadline: enteredDeadline,
        };

        // function name can be anything because this is our own component
        props.onAddTodo(todoData);

    }

    return (
    <Card>
        <form className={classes.form} onSubmit= {submitHandler}>
            <div className={classes.control}>
                <label htmlFor="title">
                    Activity/Todo
                    <input type="text" required description="title" ref={titleInputRef}/>
                </label>
            </div>
            <div className = {classes.control}>
                <label htmlFor="deadline">
                    Deadline
                    <input type="text" required description="deadline" ref={deadlineInputRef}/>
                </label>
            </div>
            <div className = {classes.control}>
                <label htmlFor="description">
                    Todo description
                    <textarea id='description' ref={descriptionInputRef}></textarea>
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