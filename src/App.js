import './App.css';
import plusSquareIcon from './images/plus-square.svg';

function App() {
  return (
    <div className="App">
      <div className="input-container">
        <label>
          <img src={plusSquareIcon} alt="Plus Square Icon" className="icon" />
        </label>
        <div></div>
        <input
          type="search"
          placeholder="Type to add new task"
        />
      </div>
    </div>
  );
}

export default App;
