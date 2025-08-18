import travelPlansData from '../assets/travel-plans.json';
import {useState} from 'react';
import TravelCard from './TravelCard';

function TravelList() {
  const [items, setItems] = useState(travelPlansData);

  const deleteItem = (itemId) => {
    const filteredItems = items.filter((item) => {
      return item.id !== itemId;
    });
    setItems(filteredItems);
  };

  return (
    <div className="items-container">
      {items.map((item) => (
        <TravelCard
          key={item.id}
          plan={item}
          addItem={1}
          deleteItem={deleteItem}
        />
      ))}
    </div>
  );
}
export default TravelList;
