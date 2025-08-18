import travelPlansData from '../assets/travel-plans.json';
import {useState} from 'react';

function TravelList() {
  const [items, setItems] = useState(travelPlansData);

  return (
    <div className="items-container">
      {items.map((item) => {
        return (
          <div className="item-container">
            <div className="image-container">
              <img src={item.image}></img>
            </div>
            <div className="item-description">
              <h3>
                {item.destination} ({item.days} Days)
              </h3>
              <p className='description'>{item.description}</p>
              <p className='price'>
                Price: <span>{item.parts[0].cost} €</span>
              </p>
              <div className="">
                {item.parts[0].cost >= 1500 && (
                  <button className="premium-inclusive">Premium</button>
                )}
                {item.allInclusive && (
                  <button className="premium-inclusive">All-Inclusive</button>
                )}
              </div>
              {item.parts[0].cost<=350&&<button className='great-deal'>Great Deal</button>}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TravelList;
