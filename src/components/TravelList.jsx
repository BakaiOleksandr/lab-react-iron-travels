import travelPlansData from '../assets/travel-plans.json';
import {useState} from 'react';

function TravelList() {
  const [items, setItems] = useState(travelPlansData);

  return (
    <div className="items-container">
      {items.map((item) => {
        return (
          <div key={item.id} className="item-container">
            <div className="image-container">
              <img src={item.image}></img>
            </div>
            <div className="item-description">
              <h3>
                {item.destination} ({item.days} Days)
              </h3>
              <p>{item.description}</p>
              <p>
                Price: <span>{item.parts[0].cost} €</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TravelList;
