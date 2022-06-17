
const DUMMY_DATA = [
    {
      item_id: 123,
      order: 1,
      description:
        'This is an item 1 ',
      completed: false
    },
    {
      item_id: 321,
      order: 2,
      description:
        'This is an item 2',
      completed: false
    },
  ];

function ItemList () {


    return (
        <ul>
          {DUMMY_DATA.map((item) => (
            <li key="{item.item_id}">{item.description}</li>
          ))}
        </ul>
      );
}

export default ItemList;