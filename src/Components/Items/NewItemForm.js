import Card from '../ui/Card';
import classes from '../ui/Card.module.css';

function NewItemForm() {
    return (
    <Card>
        <form className={classes.form}>
            <div className={classes.control}>
                <label htmlFor="title">
                    Activity/Todo
                    <input type="text" required description="title"/>
                </label>
            </div>
            <div className = {classes.control}>
                <label htmlFor="description">
                    Todo description
                    <input type="text" required description="description"/>
                    <textarea id='description' required rows='5'/>
                </label>
            </div>
        </form>
    </Card>
    );
}

export default NewItemForm;