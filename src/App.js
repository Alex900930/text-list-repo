import './App.css';
import plusSquareIcon from './images/plus-square.svg';

function App() {
  return (
    <div className="App">
      <div className="input-container">
        <input
          type="text"
          placeholder="        Type to add new task"
        />
        <img src={plusSquareIcon} alt="Plus Square Icon" className="icon" />
      </div>
    </div>
  );
}

export default App;
