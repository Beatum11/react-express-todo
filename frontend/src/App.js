import './App.css';
import CreateItem from './modules/CreateItem';
import Item from './modules/Item';
import ItemList from './modules/ItemList';
import TodaysDate from './modules/TodaysDate';

function App() {
  return (
    <div>
      <TodaysDate/>
      <CreateItem/>
      <ItemList/>
    </div>
  );
}

export default App;
