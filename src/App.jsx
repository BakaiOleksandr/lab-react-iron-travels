import './App.css';
import TravelList from './components/TravelList';
import Navbar from './components/Navbar';
import Favorites from './components/Favorites';

function App() {
  return (
    <>
      <Navbar />
      <div className="page">
        <TravelList />
        <Favorites />
      </div>
    </>
  );
}

export default App;
