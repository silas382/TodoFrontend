import './App.css';
import ItemList from './Components/ItemlList';

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
    <ItemList items={DUMMY_DATA}/>
  );
}

export default App;
