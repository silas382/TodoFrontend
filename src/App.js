import './App.css';
import TodoList from './Components/TodoList';

const DUMMY_DATA = [
  {
    item_id: 123,
    order: 1,
    description:
      'This is an item',
    completed: false
  },
  {
    item_id: 321,
    order: 2,
    description:
      'This is an item',
    completed: false
  },
];

function App(props) {
  return (
    <TodoList />
  );
}

export default App;
