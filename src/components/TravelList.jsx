import travelPlansData from '../assets/travel-plans.json';
import {useState} from 'react';

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
      {items.map((item) => {
        return (
          <div key={item.id} className="item-container">
            <div className="image-container">
              <img src={item.image} />
            </div>
            <div className="item-description">
              <h3>
                {item.destination} ({item.days} Days)
              </h3>
              <p className="description">{item.description}</p>
              <p className="price">
                Price: <span>{item.parts[0].cost} €</span>
              </p>
              <div className='labels'>
                {item.parts[0].cost >= 1500 && (
                  <p >Premium</p>
                )}
                {item.allInclusive && (
                  <p>All-Inclusive</p>
                )}
              </div>
              {item.parts[0].cost <= 350 && (
                <p className="great-deal">Great Deal</p>
              )}
            </div>
            <button className='delete-btn' onClick={()=>deleteItem(item.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default TravelList;
